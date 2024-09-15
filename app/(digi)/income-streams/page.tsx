import IncomeStreamTabs from '@/components/digi/income-streams/income-stream-tabs';
import ChartMixDollarIcon from '@/components/icons/chart-mix-dollar';
import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export const metadata = {
    title: 'DIGI | Discover and Optimize Your Income Streams',
    description:
        'Explore strategies to identify and optimize your primary and additional income streams. Learn how to diversify your earnings and boost your financial stability with expert tips and insights.',
};

const Page = () => {
    return (
        <Flex flexDirection="column" gap="4">
            <Flex alignItems="center" gap="4">
                <ChartMixDollarIcon color="black" width="28" height="28" />
                <Heading
                    fontSize="1.618em"
                    lineHeight="1.272"
                    letterSpacing="-0.02"
                >
                    Income Streams
                </Heading>
            </Flex>
            <IncomeStreamTabs />
        </Flex>
    );
};

export default Page;
