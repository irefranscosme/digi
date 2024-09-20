import { IncomeStreamJob, IncomeStreamBusiness } from '@/db/schema';
import { IncomeStreamFreelance } from '@prisma/client';

export type IncomeMonthlyExpense = {
    label: string;
    value: string;
};

export enum IncomeType {
    JOB = 'job',
    BUSINESS = 'business',
    FREELANCE = 'freelance',
    PART_TIME = 'part-time',
}

export type CreateIncome = {
    income_type: IncomeType | '';
    income: IncomeStreamJob | IncomeStreamBusiness | IncomeStreamFreelance | '';
    monthly_expenses: IncomeMonthlyExpense[];
};
