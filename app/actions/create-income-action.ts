'use server';

import { db } from '@/db';
import { incomeStreams } from '@/db/schema';

type IncomeStream = typeof incomeStreams.$inferInsert;

export const createIncomeStream = async (incomeStream: IncomeStream) => {
    'use server';
    try {
        await db.insert(incomeStreams).values({
            income: incomeStream.income,
            monthly_expenses: incomeStream.monthly_expenses,
        });
        console.log('income created successfully.');
    } catch (e) {
        console.error(e);
    }
};
