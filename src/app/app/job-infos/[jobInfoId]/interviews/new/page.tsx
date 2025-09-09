import { notFound } from 'next/navigation'
import { cacheTag } from 'next/dist/server/use-cache/cache-tag'
import { Suspense } from 'react'
import { Loader2Icon } from 'lucide-react'
import { fetchAccessToken } from 'hume'
import { and, eq } from 'drizzle-orm'
import { db } from '@/drizzle/db'
import { JobInfoTable } from '@/drizzle/schema'
import { getJobInfoIdTag } from '@/features/jobInfos/dbCache'
import { getCurrentUser } from '@/services/clerk/lib/getCurrentUser'
import { env } from '@/data/env/server'
import { VoiceProvider } from '@humeai/voice-react'
import { StartCall } from './_StartCall'

export default async function NewInterviewPage({
  params,
}: {
  params: Promise<{ jobInfoId: string }>
}) {
  const { jobInfoId } = await params

  return (
    <Suspense
      fallback={
        <div className='h-screen-header flex items-center justify-center'>
          <Loader2Icon className='size-24 animate-spin m-auto' />
        </div>
      }
    >
      <SuspendedComponent jobInfoId={jobInfoId} />
    </Suspense>
  )
}
async function SuspendedComponent({ jobInfoId }: { jobInfoId: string }) {
  const { user, userId, redirectToSignIn } = await getCurrentUser({
    allData: true,
  })

  if (user == null || userId == null) return redirectToSignIn()

  const jobInfo = await getJobInfo(jobInfoId, userId)

  if (jobInfo == null) return notFound()

  const accessToken = await fetchAccessToken({
    apiKey: String(env.HUME_API_KEY),
    secretKey: String(env.HUME_SECRET_KEY),
  })

  return (
    <VoiceProvider>
      <StartCall accessToken={accessToken} jobInfo={jobInfo} user={user} />
    </VoiceProvider>
  )
}

async function getJobInfo(id: string, userId: string) {
  'use cache'
  cacheTag(getJobInfoIdTag(id))

  return db.query.JobInfoTable.findFirst({
    where: and(eq(JobInfoTable.id, id), eq(JobInfoTable.userId, userId)),
  })
}
