'use server';

import React from 'react';
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import CreateButton from './create-button';

const incomeLists = [
    {
        id: 1,
        income_type: 'Job',
        job_title: 'Web Developer',
        job_location: 'On-site',
        employment_type: 'Permanent',
        work_schedule: 'Full-time',
        travel_cost: 60,
        salary: 80000,
        monthly_expense: [
            {
                type: 'housing',
                cost: 4000,
            },
            {
                type: 'utilities',
                cost: 2300,
            },
            {
                type: 'groceries',
                cost: 240000,
            },
            {
                type: 'transportation',
                cost: 60,
            },
        ],
    },
    {
        id: 1,
        income_type: 'Job',
        job_title: 'Web Developer',
        job_location: 'On-site',
        employment_type: 'Permanent',
        work_schedule: 'Full-time',
        travel_cost: 60,
        salary: 80000,
        monthly_expense: [
            {
                type: 'housing',
                cost: 4000,
            },
            {
                type: 'utilities',
                cost: 2300,
            },
            {
                type: 'groceries',
                cost: 240000,
            },
            {
                type: 'transportation',
                cost: 60,
            },
        ],
    },
];

const MainIcome = async () => {
    return (
        <Flex flexDirection="column" gap="4">
            <CreateButton />
            <Grid gap="2" templateColumns="repeat(2, 1fr)">
                {incomeLists.map((income) => (
                    <GridItem key={income.id}>
                        <Card>
                            <CardHeader>
                                <Heading size="md">
                                    {income.job_title} - {income.income_type}
                                </Heading>
                            </CardHeader>

                            <CardBody position="relative" overflow="hidden">
                                <Grid
                                    gap="2"
                                    templateColumns="repeat(2, 1fr)"
                                    maxWidth="sm"
                                >
                                    <GridItem>
                                        <Heading
                                            fontSize="1.129em"
                                            lineHeight="1.272"
                                            letterSpacing="-0.014em"
                                            color="gray.400"
                                            fontWeight="medium"
                                        >
                                            Salary
                                        </Heading>
                                        <Text
                                            fontSize="1em"
                                            lineHeight="1.618"
                                            letterSpacing="-0.011em"
                                        >
                                            {income.salary}
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Heading
                                            fontSize="1.129em"
                                            lineHeight="1.272"
                                            letterSpacing="-0.014em"
                                            color="gray.400"
                                            fontWeight="medium"
                                        >
                                            Employment
                                        </Heading>
                                        <Text
                                            fontSize="1em"
                                            lineHeight="1.618"
                                            letterSpacing="-0.011em"
                                        >
                                            {income.employment_type}
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Heading
                                            fontSize="1.129em"
                                            lineHeight="1.272"
                                            letterSpacing="-0.014em"
                                            color="gray.400"
                                            fontWeight="medium"
                                        >
                                            Job Location
                                        </Heading>
                                        <Text
                                            fontSize="1em"
                                            lineHeight="1.618"
                                            letterSpacing="-0.011em"
                                        >
                                            {income.job_location}
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Heading
                                            fontSize="1.129em"
                                            lineHeight="1.272"
                                            letterSpacing="-0.014em"
                                            color="gray.400"
                                            fontWeight="medium"
                                        >
                                            Work Schedule
                                        </Heading>
                                        <Text
                                            fontSize="1em"
                                            lineHeight="1.618"
                                            letterSpacing="-0.011em"
                                        >
                                            {income.work_schedule}
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Heading
                                            fontSize="1.129em"
                                            lineHeight="1.272"
                                            letterSpacing="-0.014em"
                                            color="gray.400"
                                            fontWeight="medium"
                                        >
                                            Travel Cost
                                        </Heading>
                                        <Text
                                            fontSize="1em"
                                            lineHeight="1.618"
                                            letterSpacing="-0.011em"
                                        >
                                            {income.travel_cost}
                                        </Text>
                                    </GridItem>
                                </Grid>
                                <Box
                                    position="absolute"
                                    bottom="-2em"
                                    right="-7.6em"
                                >
                                    <Image
                                        src="assets/backgrounds/suitcase.png"
                                        alt="suitcase.png"
                                        width="15em"
                                    />
                                </Box>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};

export default MainIcome;
