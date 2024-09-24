'use client';

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import CreateIncomeDrawer from '../create-income-drawer';
import {
    type Income,
    IncomeStream,
    IncomeStreamJob as IncomeStreamJobType,
    IncomeTypeEnum,
} from '@/types/create-income';
import IncomeStreamJob from '../income-stream-job';
import { useEffect, useOptimistic, useState } from 'react';
import {
    createIncomeStream,
    getIncomeStreams,
} from '@/actions/create-income-action';

const Income = ({ income }: { income: Income }) => {
    switch (income.type) {
        case IncomeTypeEnum.JOB:
            return <IncomeStreamJob income={income as IncomeStreamJobType} />;
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

    const fetchIncomeStreams = async () => {
        try {
            const result = await getIncomeStreams();
            if (result) {
                setIncomeStreams(result as IncomeStream[]);
            }
        } catch (e) {
            console.error(e);
        }
    };

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

    useEffect(() => {
        fetchIncomeStreams();
    }, []);

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
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                ]}
            >
                {optimisticIncomeStreams?.map((income) => (
                    <GridItem key={income.id}>
                        <Income income={income.income} />
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};

export default MainIncome;
