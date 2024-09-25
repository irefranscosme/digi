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
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Text,
} from '@chakra-ui/react';
import { Field, FieldArray, Form, Formik, FormikProps } from 'formik';
import { ReactNode, RefObject } from 'react';
import JobFields from './form/job-fields';
// import IncomeStreamJob from './income-stream-job';

// const isIncomeJob = (
//     income: IncomeStreamJob | IncomeStreamBusiness | IncomeStreamFreelance | '',
// ): boolean | IncomeStreamJob => {
//     if (typeof income === 'string') return false;
//     if (income.type == IncomeTypeEnum.JOB) return income as IncomeStreamJob;
//     return false;
// };

const CreateIncomeForm = ({
    formikRef,
    setOptimisticIncomeStreams,
    insertIncomeStream,
}: {
    formikRef: RefObject<FormikProps<CreateIncome>>;
    setOptimisticIncomeStreams: (value: IncomeStream) => void;
    insertIncomeStream: (incomeStream: IncomeStream) => void;
}) => {
    const incomeTypeComponent: Record<string, ReactNode> = {
        [IncomeTypeEnum.JOB]: <JobFields />,
    };

    const handleSubmit = async (incomeStream: CreateIncome) => {
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

    return (
        <Stack gap="8">
            <Formik<CreateIncome>
                initialValues={{
                    income: '',
                    monthly_expenses: [],
                }}
                onSubmit={handleSubmit}
                render={({ values: { monthly_expenses, income } }) => (
                    <Form>
                        <FormControl mb="4">
                            <FormLabel>Income type</FormLabel>
                            <Field as={Select} name="income.type">
                                <option value={IncomeTypeEnum.JOB}>Job</option>
                                <option value={IncomeTypeEnum.BUSINESS}>
                                    Business
                                </option>
                                <option value={IncomeTypeEnum.FREELANCE}>
                                    Freelance
                                </option>
                                <option value={IncomeTypeEnum.PART_TIME}>
                                    Part-Time
                                </option>
                            </Field>
                        </FormControl>

                        <Flex gap="8" flexDirection="column">
                            {typeof income !== 'string' ? (
                                incomeTypeComponent[income?.type]
                            ) : (
                                <JobFields />
                            )}
                            {/* MONTHLY EXPENSE */}
                            <FieldArray
                                name="monthly_expenses"
                                render={(arrayHelpers) => (
                                    <Flex flexDirection="column" gap="4">
                                        <Flex
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <FormLabel margin="0">
                                                Monthly Expense
                                            </FormLabel>
                                            <Button
                                                onClick={() => {
                                                    arrayHelpers.push({
                                                        label: '',
                                                        value: '',
                                                    });
                                                }}
                                            >
                                                Add Expenses
                                            </Button>
                                        </Flex>
                                        <Flex flexDirection="column" gap="2">
                                            {monthly_expenses &&
                                            monthly_expenses.length > 0 ? (
                                                <>
                                                    {monthly_expenses.map(
                                                        (
                                                            monthly_expense,
                                                            index,
                                                        ) => (
                                                            <Flex
                                                                key={index}
                                                                flexDirection={
                                                                    'column'
                                                                }
                                                                gap="2"
                                                            >
                                                                <FormControl>
                                                                    <Flex
                                                                        gap="2"
                                                                        flexDirection="column"
                                                                    >
                                                                        <Field
                                                                            as={
                                                                                Input
                                                                            }
                                                                            type="text"
                                                                            placeholder="Enter your expense label."
                                                                            name={`monthly_expenses.${index}.label`}
                                                                        />
                                                                        <Field
                                                                            as={
                                                                                Input
                                                                            }
                                                                            type="text"
                                                                            placeholder="Enter your expense value."
                                                                            name={`monthly_expenses.${index}.value`}
                                                                        />
                                                                    </Flex>
                                                                </FormControl>
                                                                <Box alignSelf="flex-end">
                                                                    <Button
                                                                        onClick={() => {
                                                                            arrayHelpers.remove(
                                                                                index,
                                                                            );
                                                                        }}
                                                                    >
                                                                        Remove
                                                                    </Button>
                                                                </Box>
                                                            </Flex>
                                                        ),
                                                    )}
                                                </>
                                            ) : (
                                                <Text>
                                                    Add your expenses here
                                                </Text>
                                            )}
                                        </Flex>
                                    </Flex>
                                )}
                            />
                        </Flex>
                    </Form>
                )}
                innerRef={formikRef}
            />
        </Stack>
    );
};

export default CreateIncomeForm;
