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
    Text,
} from '@chakra-ui/react';
import { Field, FieldArray, Form, Formik, FormikProps } from 'formik';
import React, { ChangeEvent, RefObject } from 'react';

interface FreelanceFormProps {
    handleSubmit: (incomeStream: CreateIncome<IncomeStreamFreelance>) => void;
    setIncomeType: (incomeType: IncomeTypeEnum) => void;
    formikRef: RefObject<
        FormikProps<
            CreateIncome<
                IncomeStreamJob | IncomeStreamBusiness | IncomeStreamFreelance
            >
        >
    >;
}

const FreelanceForm = ({
    handleSubmit,
    setIncomeType,
    formikRef,
}: FreelanceFormProps) => {
    return (
        <>
            <Formik<CreateIncome<IncomeStreamFreelance>>
                initialValues={{
                    income: {
                        type: IncomeTypeEnum.FREELANCE,
                        service_offered: '',
                        skills: [],
                    },
                    monthly_expenses: [],
                }}
                onSubmit={handleSubmit}
                innerRef={
                    formikRef as RefObject<
                        FormikProps<CreateIncome<IncomeStreamFreelance>>
                    >
                }
                enableReinitialize={true}
            >
                {({ values: { monthly_expenses, income } }) => (
                    <Form>
                        <FormControl mb="4">
                            <FormLabel>Income type</FormLabel>
                            <Field
                                as={Select}
                                name="income.type"
                                onChange={(
                                    e: ChangeEvent<HTMLSelectElement>,
                                ) => {
                                    setIncomeType(
                                        e.target.value as IncomeTypeEnum,
                                    );
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
                            <Flex gap="4" flexDirection="column">
                                <Flex gap="2" flexDirection="column">
                                    <FormControl>
                                        <FormLabel>Service Offered</FormLabel>
                                        <Field
                                            as={Input}
                                            type="text"
                                            placeholder="Enter your business service offered."
                                            name="income.service_offered"
                                        />
                                    </FormControl>
                                </Flex>
                                <Flex gap="2" flexDirection="column">
                                    <FieldArray
                                        name="income.skills"
                                        render={(arrayHelpers) => (
                                            <Flex
                                                flexDirection="column"
                                                gap="4"
                                            >
                                                <Flex
                                                    alignItems="center"
                                                    justifyContent="space-between"
                                                >
                                                    <FormLabel margin="0">
                                                        Skills and Experties
                                                    </FormLabel>
                                                    <Button
                                                        onClick={() => {
                                                            arrayHelpers.push(
                                                                '',
                                                            );
                                                        }}
                                                    >
                                                        Add Skill
                                                    </Button>
                                                </Flex>
                                                <Flex
                                                    flexDirection="column"
                                                    gap="2"
                                                >
                                                    {income.skills &&
                                                    income.skills.length > 0 ? (
                                                        <>
                                                            {income.skills.map(
                                                                (
                                                                    skill,
                                                                    index,
                                                                ) => (
                                                                    <Flex
                                                                        key={
                                                                            index
                                                                        }
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
                                                                                    placeholder={`Enter your skill ${
                                                                                        index +
                                                                                        1
                                                                                    }.`}
                                                                                    name={`income.skills.${index}`}
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
                                                        <Text
                                                            color={'gray.400'}
                                                        >
                                                            List your skills and
                                                            experties here.
                                                        </Text>
                                                    )}
                                                </Flex>
                                            </Flex>
                                        )}
                                    />
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
                                                                            placeholder="Type of expense"
                                                                            name={`monthly_expenses.${index}.label`}
                                                                        />
                                                                        <Field
                                                                            as={
                                                                                Input
                                                                            }
                                                                            type="text"
                                                                            placeholder="Expense amount"
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
                                                    List your monthly expenses
                                                    here.
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
        </>
    );
};

export default FreelanceForm;
