import { Suspense } from 'react'

import { cacheTag } from 'next/dist/server/use-cache/cache-tag'
import { notFound } from 'next/navigation'

import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import { eq } from 'drizzle-orm'
import { Loader2Icon } from 'lucide-react'

import { BackLink } from '@/components/BackLink'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { Skeleton, SkeletonButton } from '@/components/Skeleton'
import { SuspendedItem } from '@/components/SuspendedItem'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { db } from '@/drizzle/db'
import { InterviewTable } from '@/drizzle/schema'
import { getInterviewIdTag } from '@/features/interviews/dbCache'
import { getJobInfoIdTag } from '@/features/jobInfos/dbCache'
import { formatDateTime } from '@/lib/formatters'
import { getCurrentUser } from '@/services/clerk/lib/getCurrentUser'
import { CondensedMessages } from '@/services/hume/components/CondensedMessages'
import { fetchChatMessages } from '@/services/hume/lib/api'
import { condenseChatMessages } from '@/services/hume/lib/condenseChatMessages'

export default async function InterviewPage({
  params,
}: {
  params: Promise<{ jobInfoId: string; interviewId: string }>
}) {
  const { jobInfoId, interviewId } = await params

  const interview = getCurrentUser().then(
    async ({ userId, redirectToSignIn }) => {
      if (userId == null) return redirectToSignIn()

      const interview = await getInterview(interviewId, userId)

      if (interview == null) return notFound()

      return interview
    }
  )

  return (
    <div className='container my-4 space-y-4'>
      <BackLink href={`/app/job-infos/${jobInfoId}/interviews`}>
        All Interviews
      </BackLink>
      <div className='space-y-6'>
        <div className='flex gap-2 justify-between'>
          <div className='space-y-6 mb-6'>
            <h1 className='text-3xl md:text-4xl'>
              Interview:{' '}
              <SuspendedItem
                item={interview}
                fallback={<Skeleton className='w-48' />}
                result={(i) => formatDateTime(i.createdAt)}
              />
            </h1>
            <p className='text-muted-foreground'>
              <SuspendedItem
                item={interview}
                fallback={<Skeleton className='w-24' />}
                result={(i) => i.duration}
              />
            </p>
          </div>
          <SuspendedItem
            item={interview}
            fallback={<SkeletonButton className='w-32' />}
            result={(i) =>
              // feedback
              i.feedback == null ? null : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>View Feedback</Button>
                  </DialogTrigger>
                  <DialogContent className='md:max-w-3xl lg:max-w-4xl max-h-[calc(100% - 2rem)] overflow-y-auto flex flex-col'>
                    <DialogTitle>Feedback</DialogTitle>
                    <MarkdownRenderer>{i.feedback}</MarkdownRenderer>
                  </DialogContent>
                </Dialog>
              )
            }
          />
        </div>
        <Suspense
          fallback={<Loader2Icon className='animate-spin size-24 mx-auto' />}
        >
          <Messages interview={interview} />
        </Suspense>
      </div>
    </div>
  )
}

async function Messages({
  interview,
}: {
  interview: Promise<{ humeChatId: string | null }>
}) {
  const { user, redirectToSignIn } = await getCurrentUser({ allData: true })

  if (user == null) return redirectToSignIn()

  const { humeChatId } = await interview

  if (humeChatId == null) return notFound()

  const condensedMessages = condenseChatMessages(
    await fetchChatMessages(humeChatId)
  )

  return (
    <CondensedMessages
      messages={condensedMessages}
      user={user}
      className='max-w-5xl mx-auto'
    />
  )
}

async function getInterview(id: string, userId: string) {
  'use cache'
  cacheTag(getInterviewIdTag(id))

  const interview = await db.query.InterviewTable.findFirst({
    where: eq(InterviewTable.id, id),
    with: {
      jobInfo: {
        columns: {
          id: true,
          userId: true,
        },
      },
    },
  })

  if (interview == null) return null

  cacheTag(getJobInfoIdTag(interview.jobInfo.id))

  if (interview.jobInfo.userId !== userId) return null

  return interview
}
