'use server';

import { db } from '@/db';
import { incomeStreamJob, incomeStreams } from '@/db/schema';
import { IncomeStream } from '@/types/create-income';
import { and, eq } from 'drizzle-orm';

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
        const data = await db
            .select()
            .from(incomeStreams)
            .leftJoin(
                incomeStreamJob,
                and(eq(incomeStreams.type, 'income_stream_jobs')),
            );
        return data as IncomeStream[];
    } catch (e) {
        console.error(e);
    }
};
