'use client';

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import CreateIncomeDrawer from '../create-income-drawer';
import {
    type Income,
    IncomeStream,
    IncomeStreamBusiness,
    IncomeStreamFreelance,
    IncomeStreamJob,
    IncomeTypeEnum,
} from '@/types/create-income';
import { useOptimistic, useState } from 'react';
import { createIncomeStream } from '@/actions/create-income-action';
import dynamic from 'next/dynamic';

const IncomeStreamJobCard = dynamic(
    () => import('../cards/income-stream-job-card'),
);
const IncomeStreamBusinessCard = dynamic(
    () => import('../cards/income-stream-business-card'),
);
const IncomeStreamFreelanceCard = dynamic(
    () => import('../cards/income-stream-freelance-card'),
);

const Income = ({ income }: { income: Income }) => {
    switch (income.type) {
        case IncomeTypeEnum.JOB:
            return <IncomeStreamJobCard income={income as IncomeStreamJob} />;
        case IncomeTypeEnum.BUSINESS:
            return (
                <IncomeStreamBusinessCard
                    income={income as IncomeStreamBusiness}
                />
            );
        case IncomeTypeEnum.FREELANCE:
            return (
                <IncomeStreamFreelanceCard
                    income={income as IncomeStreamFreelance}
                />
            );
    }
};

const MainIncome = ({
    initialIncomeStreams,
}: {
    initialIncomeStreams: IncomeStream[];
}) => {
    const [incomeStreams, setIncomeStreams] =
        useState<IncomeStream[]>(initialIncomeStreams);
    const [optimisticIncomeStreams, setOptimisticIncomeStreams] = useOptimistic(
        incomeStreams || [],
        (state: IncomeStream[], newIncomeStream: IncomeStream) => [
            ...state,
            newIncomeStream,
        ],
    );
    const [incomeStreamLoading, setIncomeStreamLoading] =
        useState<boolean>(false);

    const insertIncomeStream = async (IncomeStream: IncomeStream) => {
        setIncomeStreamLoading(true);
        try {
            const data = await createIncomeStream(IncomeStream);

            if (data) {
                setIncomeStreams((incomeStreams) => [
                    ...(incomeStreams || []),
                    ...data,
                ]);
                setIncomeStreamLoading(false);
            }
        } catch (e) {
            console.error(e);
            setIncomeStreamLoading(false);
        }
    };

    return (
        <Flex flexDirection="column" gap="4">
            <CreateIncomeDrawer
                setOptimisticIncomeStreams={setOptimisticIncomeStreams}
                insertIncomeStream={(incomeStream) => {
                    insertIncomeStream(incomeStream);
                }}
                isLoading={incomeStreamLoading}
            />
            <Grid
                gap="2"
                templateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(3, 1fr)',
                ]}
            >
                {optimisticIncomeStreams?.map((income) => (
                    <GridItem key={income.id} height="20em" pb="4">
                        <Income income={income.income} />
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};

export default MainIncome;
