import { Suspense } from 'react'

import { redirect } from 'next/navigation'

import { Loader2Icon } from 'lucide-react'

import { JobInfoBackLink } from '@/features/jobInfos/components/JobInfoBackLink'
import { canRunResumeAnalysis } from '@/features/resumeAnalyses/permissions'

import { ResumeClientPage } from './_ResumeClientPage'

export default async function ResumePage({
  params,
}: {
  params: Promise<{ jobInfoId: string }>
}) {
  const { jobInfoId } = await params

  return (
    <div className='container py-4 space-y-4 h-screen-header flex flex-col items-start'>
      <JobInfoBackLink jobInfoId={jobInfoId} />
      <Suspense
        fallback={<Loader2Icon className='animate-spin size-24 m-auto' />}
      >
        <SuspendedComponent jobInfoId={jobInfoId} />
      </Suspense>
    </div>
  )
}

async function SuspendedComponent({ jobInfoId }: { jobInfoId: string }) {
  if (!(await canRunResumeAnalysis())) return redirect('/app/upgrade')

  return <ResumeClientPage jobInfoId={jobInfoId} />
}
