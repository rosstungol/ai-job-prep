'use server'

import { cacheTag } from 'next/dist/server/use-cache/cache-tag'

import arcjet, { request, tokenBucket } from '@arcjet/next'
import { and, eq } from 'drizzle-orm'

import { env } from '@/data/env/server'
import { db } from '@/drizzle/db'
import { InterviewTable, JobInfoTable } from '@/drizzle/schema'
import { PLAN_LIMIT_MESSAGE, RATE_LIMIT_MESSAGE } from '@/lib/errorToast'
import { getCurrentUser } from '@/services/clerk/lib/getCurrentUser'

import { getJobInfoIdTag } from '../jobInfos/dbCache'

import { insertInterview, updateInterview as updateInterviewDB } from './db'
import { getInterviewIdTag } from './dbCache'
import { canCreateInterview } from './permissions'

const aj = arcjet({
  characteristics: ['userId'],
  key: env.ARCJET_KEY,
  rules: [
    tokenBucket({
      capacity: 12,
      refillRate: 4,
      interval: '1d',
      mode: 'LIVE',
    }),
  ],
})

export async function createInterview({
  jobInfoId,
}: {
  jobInfoId: string
}): Promise<{ error: true; message: string } | { error: false; id: string }> {
  const { userId } = await getCurrentUser()

  if (userId == null) {
    return {
      error: true,
      message: "You don't have permission to do this.",
    }
  }

  // Permissions
  if (!(await canCreateInterview())) {
    return {
      error: true,
      message: PLAN_LIMIT_MESSAGE,
    }
  }

  // Rate limiting
  const decision = await aj.protect(await request(), {
    userId,
    requested: 1,
  })

  if (decision.isDenied()) {
    return {
      error: true,
      message: RATE_LIMIT_MESSAGE,
    }
  }

  // Job info
  const jobInfo = await getJobInfo(jobInfoId, userId)
  if (jobInfo == null) {
    return {
      error: true,
      message: "You don't have permission to do this.",
    }
  }

  const interview = await insertInterview({ jobInfoId, duration: '00:00:00' })

  return {
    error: false,
    id: interview.id,
  }
}

export async function updateInterview(
  id: string,
  data: {
    humeChatId?: string
    duration?: string
  }
) {
  const { userId } = await getCurrentUser()

  if (userId == null) {
    return {
      error: true,
      message: "You don't have permission to do this.",
    }
  }

  const interview = await getInterview(id, userId)

  if (interview == null) {
    return {
      error: true,
      message: "You don't have permission to do this.",
    }
  }

  await updateInterviewDB(id, data)

  return {
    error: false,
  }
}

async function getJobInfo(id: string, userId: string) {
  'use cache'
  cacheTag(getJobInfoIdTag(id))

  return db.query.JobInfoTable.findFirst({
    where: and(eq(JobInfoTable.id, id), eq(JobInfoTable.userId, userId)),
  })
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
