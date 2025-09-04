import { Suspense } from 'react'
import { eq } from 'drizzle-orm'
import { cn } from '@/lib/utils'
import { db } from '@/drizzle/db'
import { getJobInfoIdTag } from '../dbCache'
import { JobInfoTable } from '@/drizzle/schema'
import { BackLink } from '@/components/BackLink'
import { cacheTag } from 'next/dist/server/use-cache/cache-tag'

export function JobInfoBackLink({
  jobInfoId,
  className,
}: {
  jobInfoId: string
  className?: string
}) {
  return (
    <BackLink
      href={`/app/job-infos/${jobInfoId}`}
      className={cn('mb-4', className)}
    >
      <Suspense fallback='Job Description'>
        <JobName jobInfoId={jobInfoId} />
      </Suspense>
    </BackLink>
  )
}

async function JobName({ jobInfoId }: { jobInfoId: string }) {
  const jobInfo = await getJobInfo(jobInfoId)

  return jobInfo?.name ?? 'Job Description'
}

async function getJobInfo(id: string) {
  'use cache'
  cacheTag(getJobInfoIdTag(id))

  return db.query.JobInfoTable.findFirst({
    where: eq(JobInfoTable.id, id),
  })
}
