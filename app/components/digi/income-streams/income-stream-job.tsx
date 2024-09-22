import { type IncomeStreamJob } from '@/types/create-income';
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
import React from 'react';

const IncomeStreamJob = ({ income }: { income: IncomeStreamJob }) => {
    return (
        <Card overflow="clip">
            <CardHeader>
                <Heading size="md">
                    {income.job_title} - {income.type}
                </Heading>
            </CardHeader>

            <CardBody overflow="hidden">
                <Flex justifyContent="space-between">
                    <Grid
                        gap="2"
                        templateColumns="repeat(2, 1fr)"
                        maxWidth="sm"
                        flexGrow={1}
                    >
                        <GridItem>
                            <Heading
                                fontSize="1em"
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
                                fontSize="1em"
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
                    </Grid>
                    <Box
                        position="absolute"
                        top="4em"
                        right="-7.6em"
                        overflow="hidden"
                        borderRadius="0.4em"
                        height="100%"
                    >
                        <Image
                            src="assets/backgrounds/suitcase.png"
                            alt="suitcase.png"
                            width="15em"
                        />
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default IncomeStreamJob;
