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

export type CreateIncome = {
    income: IncomeStreamJob | IncomeStreamBusiness | IncomeStreamFreelance | '';
    monthly_expenses: IncomeMonthlyExpense[];
};
