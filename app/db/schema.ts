import { sql } from 'drizzle-orm';
import { jsonb, pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';

export interface IncomeStreamJob {
    type: string;
    job_title: string;
    job_location: string;
    work_schedule: string;
}

export interface IncomeStreamBusiness {
    type: string;
    sector: string;
    business_name: string;
    service_offered: string;
    target_audience: string;
}

export interface IncomeStreamFreelance {
    type: string;
    service_offered: string;
    skills: string[];
}

export const incomeStreamsBillingEnum = pgEnum('income_streams_billing_enum', [
    'hourly',
    'fixed-price',
]);

type MonthlyExpenses = {
    label: string;
    value: string;
};

type Income =
    | IncomeStreamJob
    | IncomeStreamBusiness
    | IncomeStreamFreelance
    | '';

export const incomeStreams = pgTable('income_streams', {
    id: serial('id').primaryKey(),
    income: jsonb('income').$type<Income>().notNull(),
    monthly_expenses: text('monthly_expenses')
        .array()
        .notNull()
        .$type<MonthlyExpenses[]>()
        .default(sql`ARRAY[]::text[]`),
});
