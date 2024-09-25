import { IncomeStreamFreelance } from '@/types/create-income';
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

const IncomeStreamFreelanceCard = ({
    income,
}: {
    income: IncomeStreamFreelance;
}) => {
    return (
        <Card overflow="clip" height={'100%'}>
            <CardHeader>
                <Heading size="md">
                    {income.service_offered || 'N/A'} {' - '}
                    <Text display={'inline-block'} textTransform={'capitalize'}>
                        {income.type}
                    </Text>
                </Heading>
            </CardHeader>

            <CardBody overflow="hidden">
                <Flex justifyContent="space-between">
                    <Grid
                        gap="2"
                        templateColumns={[
                            'repeat(1, 1fr)',
                            'repeat(1, 1fr)',
                            'repeat(1, 1fr)',
                            'repeat(2, 1fr)',
                        ]}
                        maxWidth="sm"
                    >
                        <GridItem>
                            <Heading
                                fontSize="1em"
                                lineHeight="1.272"
                                letterSpacing="-0.014em"
                                color="gray.400"
                                fontWeight="medium"
                            >
                                Services/Products Offered
                            </Heading>
                            <Text
                                fontSize="1em"
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                            >
                                {income.service_offered || 'N/A'}
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
                                Skills and Expertise
                            </Heading>
                            <Text
                                fontSize="1em"
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                            >
                                {income.skills.length > 0 ? (
                                    <>
                                        {income.skills.map((skill, index) => (
                                            <Flex key={`${skill}.${index}`}>
                                                <Text>{skill}</Text>
                                            </Flex>
                                        ))}
                                    </>
                                ) : (
                                    'N/A'
                                )}
                            </Text>
                        </GridItem>
                    </Grid>
                    <Box borderRadius="0.4em" position="relative" width="15em">
                        <Image
                            src="assets/backgrounds/suitcase.png"
                            alt="suitcase.png"
                            width="15em"
                            sx={{ position: 'absolute', right: 0, top: '2em' }}
                        />
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default IncomeStreamFreelanceCard;
