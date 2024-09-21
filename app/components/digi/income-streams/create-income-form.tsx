'use client';

import { createIncomeStream } from '@/actions/create-income-action';
import {
    CreateIncome,
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
import { RefObject } from 'react';

const isIncomeJob = (
    income: IncomeStreamJob | IncomeStreamBusiness | IncomeStreamFreelance | '',
): boolean | IncomeStreamJob => {
    if (typeof income === 'string') return false;
    if (income.type == IncomeTypeEnum.JOB) return income as IncomeStreamJob;
    return false;
};

const CreateIncomeForm = ({
    formikRef,
}: {
    formikRef: RefObject<FormikProps<CreateIncome>>;
}) => {
    return (
        <Stack gap="8">
            <Formik<CreateIncome>
                initialValues={{
                    income: '',
                    monthly_expenses: [],
                }}
                onSubmit={(values) => {
                    console.log(values.income);
                    if (isIncomeJob(values.income)) {
                        createIncomeStream({
                            income: values.income as IncomeStreamJob,
                            monthly_expenses: values.monthly_expenses,
                        });
                    } else {
                        console.log('income is undefined');
                    }
                }}
                render={({ values: { monthly_expenses } }) => (
                    <Form>
                        <Flex gap="8" flexDirection="column">
                            {/* JOB INFORMATION */}
                            <Flex gap="4" flexDirection="column">
                                <Flex gap="2" flexDirection="column">
                                    <FormControl>
                                        <FormLabel>Income type</FormLabel>
                                        <Field as={Select} name="income.type">
                                            <option value={IncomeTypeEnum.JOB}>
                                                Job
                                            </option>
                                            <option
                                                value={IncomeTypeEnum.BUSINESS}
                                            >
                                                Business
                                            </option>
                                            <option
                                                value={IncomeTypeEnum.FREELANCE}
                                            >
                                                Freelance
                                            </option>
                                            <option
                                                value={IncomeTypeEnum.PART_TIME}
                                            >
                                                Part-Time
                                            </option>
                                        </Field>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Job Title</FormLabel>
                                        <Field
                                            as={Input}
                                            type="text"
                                            placeholder="Enter your job title."
                                            name="income.job_title"
                                        />
                                    </FormControl>
                                </Flex>
                                <Flex gap="2">
                                    <FormControl>
                                        <FormLabel>Job Type</FormLabel>
                                        <Field
                                            as={Input}
                                            type="text"
                                            placeholder="Enter job type."
                                            name="income.job_type"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Job Location</FormLabel>
                                        <Field
                                            as={Input}
                                            type="text"
                                            placeholder="Enter job location."
                                            name="income.job_location"
                                        />
                                    </FormControl>
                                </Flex>
                            </Flex>
                            {/* JOB SCHEDULE COST */}
                            <Flex gap="4" flexDirection="column">
                                <Flex gap="2" flexDirection="column">
                                    <FormControl>
                                        <FormLabel>Work Schedule</FormLabel>
                                        <Field
                                            as={Input}
                                            type="text"
                                            placeholder="Enter your work schedule."
                                            name="income.work_schedule"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Travel Cost</FormLabel>
                                        <Field
                                            as={Input}
                                            type="text"
                                            placeholder="Enter amount."
                                            name="income.travel_cost"
                                        />
                                    </FormControl>
                                </Flex>
                            </Flex>
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
