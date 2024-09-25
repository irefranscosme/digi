import { getIncomeStreams } from '@/actions/create-income-action';
import IncomeStreamTabs from '@/components/digi/income-streams/income-stream-tabs';
import { IncomeStream } from '@/types/create-income';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export const metadata = {
    title: 'DIGI | Discover and Optimize Your Income Streams',
    description:
        'Explore strategies to identify and optimize your primary and additional income streams. Learn how to diversify your earnings and boost your financial stability with expert tips and insights.',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
    const incomeStreams = (await getIncomeStreams()) as IncomeStream[];

    return (
        <Flex flexDirection="column" gap="4">
            <IncomeStreamTabs incomeStreams={incomeStreams || []} />
        </Flex>
    );
}
