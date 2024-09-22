import {
    BillingEnum,
    Income,
    IncomeTypeEnum,
    MonthlyExpenses,
} from '@/types/create-income';
import { jsonb, pgEnum, pgTable, serial } from 'drizzle-orm/pg-core';

export const incomeStreamsBillingEnum = pgEnum('income_streams_billing_enum', [
    BillingEnum.HOURLY,
    BillingEnum.FIXED_PRICE,
]);

export const incomeTypeEnum = pgEnum('income_streams_income_type_enum', [
    IncomeTypeEnum.JOB,
    IncomeTypeEnum.BUSINESS,
    IncomeTypeEnum.FREELANCE,
    IncomeTypeEnum.PART_TIME,
]);

export const incomeStreams = pgTable('income_streams', {
    id: serial('id').primaryKey(),
    income: jsonb('income').$type<Income>().notNull(),
    monthly_expenses: jsonb('monthly_expenses')
        .$type<MonthlyExpenses[]>()
        .notNull(),
});
