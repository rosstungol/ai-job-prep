import { relations } from 'drizzle-orm'
import { pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core'

import { createdAt, id, updatedAt } from '../schemaHelpers'

import { InterviewTable } from './interview'
import { QuestionTable } from './question'
import { UserTable } from './user'

export const experienceLevels = ['junior', 'mid-level', 'senior'] as const
export type ExperienceLevel = (typeof experienceLevels)[number]
export const experienceLevelEnum = pgEnum(
  'job_infos_experience_level',
  experienceLevels
)

export const JobInfoTable = pgTable('job-info', {
  id,
  userId: varchar()
    .references(() => UserTable.id, { onDelete: 'cascade' })
    .notNull(),
  title: varchar(),
  name: varchar().notNull(),
  experienceLevel: experienceLevelEnum().notNull(),
  description: varchar().notNull(),
  createdAt,
  updatedAt,
})

export const jobInfoRelations = relations(JobInfoTable, ({ one, many }) => ({
  user: one(UserTable, {
    fields: [JobInfoTable.userId],
    references: [UserTable.id],
  }),
  questions: many(QuestionTable),
  interviews: many(InterviewTable),
}))
