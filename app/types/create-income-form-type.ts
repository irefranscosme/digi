export type CreateIncomeMonthlyExpense = {
    label: string;
    value: string;
};

export type CreateIncome = {
    income_type: 'job' | 'business' | 'freelance' | 'part-time' | '';
    job_title: string;
    job_type: string;
    job_location: string;
    work_schedule: string;
    travel_cost: string;
    monthly_expenses: CreateIncomeMonthlyExpense[];
};
