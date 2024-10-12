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
    id?: number;
    job_title: string;
    job_location: string;
    work_schedule: string;
    employment_type: string;
};

export type IncomeStreamBusiness = {
    id?: number;
    sector: string;
    business_name: string;
    service_offered: string;
    target_audience: string;
    business_location: string;
};

export type IncomeStreamFreelance = {
    id?: number;
    service_offered: string;
    skills: string[];
    payment_type: string;
    rate: string;
};

export type IncomeStream = {
    id?: number;
    type: string;
    monthly_expenses: IncomeMonthlyExpense[];
};

export type IncomeStreamWithType = {
    id?: number;
    type: string;
    monthly_expenses: IncomeMonthlyExpense[];
    job?: IncomeStreamJob;
    business?: IncomeStreamBusiness;
    freelance?: IncomeStreamFreelance;
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

export type MonthlyExpenses = {
    label: string;
    value: string;
};
