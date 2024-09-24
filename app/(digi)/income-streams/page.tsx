import IncomeStreamTabs from '@/components/digi/income-streams/income-stream-tabs';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export const metadata = {
    title: 'DIGI | Discover and Optimize Your Income Streams',
    description:
        'Explore strategies to identify and optimize your primary and additional income streams. Learn how to diversify your earnings and boost your financial stability with expert tips and insights.',
};

const Page = () => {
    return (
        <Flex flexDirection="column" gap="4">
            <IncomeStreamTabs />
        </Flex>
    );
};

export default Page;
