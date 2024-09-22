'use server';

import { db } from '@/db';
import { incomeStreams } from '@/db/schema';
import { IncomeStream } from '@/types/create-income';

export const createIncomeStream = async (incomeStream: IncomeStream) => {
    try {
        const createdIncomeStream = await db
            .insert(incomeStreams)
            .values({
                income: incomeStream.income,
                monthly_expenses: incomeStream.monthly_expenses,
            })
            .returning();

        return createdIncomeStream;
    } catch (e) {
        console.error(e);
    }
};

export const getIncomeStreams = async (): Promise<
    IncomeStream[] | undefined
> => {
    try {
        const data = await db.select().from(incomeStreams);
        return data as IncomeStream[];
    } catch (e) {
        console.error(e);
    }
};
