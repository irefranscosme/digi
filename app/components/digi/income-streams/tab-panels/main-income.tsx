'use client';

import { Flex, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import CreateIncomeDrawer from '../create-income-drawer';
import {
    IncomeStream,
    IncomeStreamBusiness,
    IncomeStreamFreelance,
    IncomeStreamJob,
    IncomeStreamWithType,
    IncomeTypeEnum,
} from '@/types/create-income';
import { useOptimistic, useRef, useState } from 'react';
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

interface IncomeProps {
    incomeStream: IncomeStreamWithType;
    onView: () => void;
}

const Income = ({ incomeStream, onView }: IncomeProps) => {
    switch ('type' in incomeStream && incomeStream.type) {
        case IncomeTypeEnum.JOB:
            return (
                <IncomeStreamJobCard
                    incomeStream={incomeStream}
                    onView={onView}
                />
            );
        // case IncomeTypeEnum.BUSINESS:
        //     return (
        //         <IncomeStreamBusinessCard
        //             income={income as IncomeStreamBusiness}
        //         />
        //     );
        // case IncomeTypeEnum.FREELANCE:
        //     return (
        //         <IncomeStreamFreelanceCard
        //             income={income as IncomeStreamFreelance}
        //         />
        //     );
    }
};

const MainIncome = ({
    initialIncomeStreams,
}: {
    initialIncomeStreams: IncomeStreamWithType[];
}) => {
    const incomeStreamDrawer = useDisclosure();
    const incomeStreamCurrentRef = useRef<IncomeStream>();
    const [incomeStreams, setIncomeStreams] =
        useState<IncomeStreamWithType[]>(initialIncomeStreams);
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
                isOpen={incomeStreamDrawer.isOpen}
                onOpen={incomeStreamDrawer.onOpen}
                onClose={incomeStreamDrawer.onClose}
                incomeStream={incomeStreamCurrentRef.current}
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
                        <Income
                            incomeStream={income}
                            onView={() => {
                                incomeStreamCurrentRef.current = income;
                                incomeStreamDrawer.onOpen();
                            }}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};

export default MainIncome;
