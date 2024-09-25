'use client';

import {
    CreateIncome,
    Income,
    IncomeStream,
    IncomeStreamBusiness,
    IncomeStreamFreelance,
    IncomeStreamJob,
    IncomeTypeEnum,
} from '@/types/create-income';
import { Stack } from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { ReactNode, RefObject, useState } from 'react';
import JobForm from './form/job-form';
import BusinessForm from './form/business-form';

const CreateIncomeForm = ({
    formikRef,
    setOptimisticIncomeStreams,
    insertIncomeStream,
}: {
    formikRef: RefObject<
        FormikProps<
            CreateIncome<
                IncomeStreamJob | IncomeStreamBusiness | IncomeStreamFreelance
            >
        >
    >;
    setOptimisticIncomeStreams: (value: IncomeStream) => void;
    insertIncomeStream: (incomeStream: IncomeStream) => void;
}) => {
    const [incomeType, setIncomeType] = useState<IncomeTypeEnum>(
        IncomeTypeEnum.JOB,
    );

    const handleSubmit = async (
        incomeStream: CreateIncome<
            IncomeStreamJob | IncomeStreamBusiness | IncomeStreamFreelance
        >,
    ) => {
        if (typeof incomeStream?.income === 'string') return;

        const incomeType: Record<string, Income> = {
            [IncomeTypeEnum.JOB]: incomeStream.income as IncomeStreamJob,
            [IncomeTypeEnum.BUSINESS]:
                incomeStream.income as IncomeStreamBusiness,
            [IncomeTypeEnum.FREELANCE]:
                incomeStream.income as IncomeStreamFreelance,
        };

        setOptimisticIncomeStreams({
            income: incomeType[incomeStream.income.type],
            monthly_expenses: incomeStream.monthly_expenses,
        });
        insertIncomeStream({
            income: incomeType[incomeStream.income.type],
            monthly_expenses: incomeStream.monthly_expenses,
        });
    };

    const incomeTypeComponent: Record<string, ReactNode> = {
        [IncomeTypeEnum.JOB]: (
            <JobForm
                formikRef={formikRef}
                handleSubmit={handleSubmit}
                setIncomeType={setIncomeType}
            />
        ),
        [IncomeTypeEnum.BUSINESS]: (
            <BusinessForm
                formikRef={formikRef}
                handleSubmit={handleSubmit}
                setIncomeType={setIncomeType}
            />
        ),
    };
    return <Stack gap="8">{incomeTypeComponent[incomeType]}</Stack>;
};

export default CreateIncomeForm;
