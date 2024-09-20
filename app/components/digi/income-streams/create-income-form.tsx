'use client';

import { db } from '@/db';
import {
    IncomeStreamBusiness,
    IncomeStreamFreelance,
    IncomeStreamJob,
    incomeStreams,
} from '@/db/schema';
import { CreateIncome, IncomeType } from '@/types/create-income';
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

type IncomeStream = typeof incomeStreams.$inferInsert;

const CreateIncomeForm = ({
    formikRef,
}: {
    formikRef: RefObject<FormikProps<CreateIncome>>;
}) => {
    const createIncomeStream = async (incomeStream: IncomeStream) => {
        // return await db.insert(incomeStreams).values({
        //     income: incomeStream.income,
        //     monthly_expenses: incomeStream.monthly_expenses,
        // });
        console.log(incomeStream);
    };

    return (
        <Stack gap="8">
            <Formik<CreateIncome>
                initialValues={{
                    income_type: '',
                    income: '',
                    monthly_expenses: [],
                }}
                onSubmit={(values) => {
                    createIncomeStream({
                        income: values.income as IncomeStreamBusiness,
                        monthly_expenses: values.monthly_expenses,
                    });
                }}
                render={({ values: { monthly_expenses } }) => (
                    <Form>
                        <Flex gap="8" flexDirection="column">
                            {/* JOB INFORMATION */}
                            <Flex gap="4" flexDirection="column">
                                <Flex gap="2" flexDirection="column">
                                    <FormControl>
                                        <FormLabel>Income type</FormLabel>
                                        <Field as={Select} name="income_type">
                                            <option value="job">Job</option>
                                            <option value="business">
                                                Business
                                            </option>
                                            <option value="freelance">
                                                Freelance
                                            </option>
                                            <option value="part-time">
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
