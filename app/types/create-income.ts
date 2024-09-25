import { incomeStreams } from '@/db/schema';

export type IncomeMonthlyExpense = {
    label: string;
    value: string;
};

export enum IncomeTypeEnum {
    JOB = 'job',
    BUSINESS = 'business',
    FREELANCE = 'freelance',
    PART_TIME = 'part-time',
}

export type IncomeType =
    | IncomeTypeEnum.JOB
    | IncomeTypeEnum.BUSINESS
    | IncomeTypeEnum.FREELANCE
    | IncomeTypeEnum.PART_TIME;

export enum BillingEnum {
    HOURLY = 'hourly',
    FIXED_PRICE = 'fixed-price',
}

export type IncomeStreamJob = {
    type: IncomeType;
    job_title: string;
    job_location: string;
    work_schedule: string;
    // TODO: employment
};

export type IncomeStreamBusiness = {
    type: IncomeType;
    sector: string;
    business_name: string;
    service_offered: string;
    target_audience: string;
};

export type IncomeStreamFreelance = {
    type: IncomeType;
    service_offered: string;
    skills: string[];
};

export type CreateIncome<T = void> = {
    income: T;
    monthly_expenses: IncomeMonthlyExpense[];
};

export type CreateIncomeJob = {
    income: IncomeStreamJob;
    monthly_expenses: IncomeMonthlyExpense[];
};
export type CreateIncomeBusiness = {
    income: IncomeStreamBusiness;
    monthly_expenses: IncomeMonthlyExpense[];
};
export type CreateIncomeFreelance = {
    income: IncomeStreamFreelance;
    monthly_expenses: IncomeMonthlyExpense[];
};

export type IncomeStream = typeof incomeStreams.$inferInsert;

export type MonthlyExpenses = {
    label: string;
    value: string;
};

export type Income =
    | IncomeStreamJob
    | IncomeStreamBusiness
    | IncomeStreamFreelance;
