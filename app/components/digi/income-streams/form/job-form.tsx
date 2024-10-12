import {
    IncomeStream,
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
    Text,
} from '@chakra-ui/react';
import { Field, FieldArray, Form, Formik, FormikProps } from 'formik';
import React, { ChangeEvent, RefObject } from 'react';

interface JobFormProps {
    handleSubmit: (incomeStream: IncomeStream) => void;
    setIncomeType: (incomeType: IncomeTypeEnum) => void;
    incomeStreamJob?: IncomeStreamJob;
    incomeStream?: IncomeStream;
    formikRef?: RefObject<FormikProps<IncomeStream & IncomeStreamJob>>;
}

const JobForm = ({
    handleSubmit,
    setIncomeType,
    incomeStreamJob,
    incomeStream,
    formikRef,
}: JobFormProps) => {
    const initialValues: IncomeStream & IncomeStreamJob = {
        id: incomeStreamJob?.id,
        type: incomeStream?.type || IncomeTypeEnum.JOB,
        monthly_expenses: incomeStream?.monthly_expenses || [],
        employment_type: incomeStreamJob?.employment_type || '',
        job_location: incomeStreamJob?.job_location || '',
        job_title: incomeStreamJob?.job_title || '',
        work_schedule: incomeStreamJob?.work_schedule || '',
    };

    return (
        <Formik<IncomeStream & IncomeStreamJob>
            initialValues={initialValues}
            onSubmit={() => handleSubmit(initialValues)}
            enableReinitialize={true}
            innerRef={formikRef}
        >
            {({ values: { monthly_expenses } }) => (
                <Form>
                    <FormControl mb="4">
                        <FormLabel>Income type</FormLabel>
                        <Field
                            as={Select}
                            name="type"
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setIncomeType(e.target.value as IncomeTypeEnum);
                            }}
                        >
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
                        {/* JOB INFORMATION */}
                        <Flex gap="4" flexDirection="column">
                            <Flex gap="2" flexDirection="column">
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
                            {/* TODO: dropdown choices for employment type. */}
                            <Flex>
                                <FormControl>
                                    <FormLabel>Employment Type</FormLabel>
                                    <Field
                                        as={Input}
                                        type="text"
                                        placeholder="Enter your employment type."
                                        name="employment_type"
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
                                            <Text color={'gray.400'}>
                                                List your monthly expenses here.
                                            </Text>
                                        )}
                                    </Flex>
                                </Flex>
                            )}
                        />
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

export default JobForm;
