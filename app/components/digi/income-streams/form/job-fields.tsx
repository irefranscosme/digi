import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'formik';
import React from 'react';

const JobFields = () => {
    return (
        <>
            {/* JOB INFORMATION */}
            <Flex gap="4" flexDirection="column">
                <Flex gap="2" flexDirection="column">
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
        </>
    );
};

export default JobFields;
