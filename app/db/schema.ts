import {
    BillingEnum,
    IncomeTypeEnum as IncomeTypeEnumType,
} from '@/types/create-income';
import {
    integer,
    jsonb,
    pgEnum,
    pgTable,
    serial,
    text,
    varchar,
} from 'drizzle-orm/pg-core';

export const incomeStreamsBillingEnum = pgEnum('income_streams_billing_enum', [
    BillingEnum.HOURLY,
    BillingEnum.FIXED_PRICE,
]);

export const incomeStreamJob = pgTable('income_stream_jobs', {
    id: serial('id').primaryKey(),
    job_title: varchar('job_title', { length: 256 }).notNull(),
    job_location: varchar('job_location', { length: 256 }).notNull(),
    work_schedule: varchar('work_schedule', { length: 256 }).notNull(),
    employment_type: varchar('employment_type', { length: 256 }).notNull(),
});

export const incomeStreamBusiness = pgTable('income_stream_businesses', {
    id: serial('id').primaryKey(),
    sector: varchar('sector', { length: 256 }).notNull(),
    business_name: varchar('business_name', { length: 256 }).notNull(),
    business_location: varchar('business_location', { length: 256 }).notNull(),
    service_offered: varchar('service_offered', { length: 256 }).notNull(),
    target_audience: varchar('target_audience', { length: 256 }),
});

export const incomeStreamFreelance = pgTable('income_stream_freelance', {
    id: serial('id').primaryKey(),
    service_offered: varchar('job_title', { length: 256 }).notNull(),
    skills: text('skills').array().notNull(),
    payment_type: varchar('job_title', { length: 256 }).notNull(),
    rate: varchar('job_title', { length: 256 }).notNull(),
});

export const IncomeTypeEnum = pgEnum('income_streams_income_type_enum', [
    IncomeTypeEnumType.JOB,
    IncomeTypeEnumType.BUSINESS,
    IncomeTypeEnumType.FREELANCE,
    IncomeTypeEnumType.PART_TIME,
]);

export const incomeStreams = pgTable('income_streams', {
    id: serial('id').primaryKey(),
    related_type: IncomeTypeEnum('related_type').notNull(),
    related_id: integer('related_id').notNull(),
    monthly_expenses: jsonb('monthly_expenses').array().notNull(),
});
