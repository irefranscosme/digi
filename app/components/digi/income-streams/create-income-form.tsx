'use client';

import { CreateIncome } from '@/types/create-income-form-type';
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

const CreateIncomeForm = ({
    formikRef,
}: {
    formikRef: RefObject<FormikProps<CreateIncome>>;
}) => {
    return (
        <Stack gap="8">
            <Formik<CreateIncome>
                initialValues={{
                    income_type: '',
                    job_title: '',
                    job_type: '',
                    job_location: '',
                    work_schedule: '',
                    travel_cost: '',
                    monthly_expenses: [],
                }}
                onSubmit={(values) => console.log(values)}
                render={({ values: { monthly_expenses } }) => (
                    <Form>
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
                                        name="job_title"
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
                                        name="job_type"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Job Location</FormLabel>
                                    <Field
                                        as={Input}
                                        type="text"
                                        placeholder="Enter job location."
                                        name="job_location"
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
                                        name="work_schedule"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Travel Cost</FormLabel>
                                    <Field
                                        as={Input}
                                        type="text"
                                        placeholder="Enter amount."
                                        name="travel_cost"
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
                                    <Flex flexDirection="column" gap="4">
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
                                            <Text>Add your expenses here</Text>
                                        )}
                                    </Flex>
                                </Flex>
                            )}
                        />
                    </Form>
                )}
                innerRef={formikRef}
            />
        </Stack>
    );
};

export default CreateIncomeForm;
