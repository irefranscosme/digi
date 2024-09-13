import {
    Card,
    CardBody,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

const How = () => {
    return (
        <Flex
            isolation="isolate"
            position="relative"
            flexDirection="column"
            justifyContent={'center'}
            gap="8"
            paddingBlock={['20', '20', '20', '0']}
        >
            <Flex justifyContent="center" alignItems="center">
                <Flex flexDirection="column">
                    <Heading
                        textAlign="center"
                        lineHeight="1.272"
                        letterSpacing="-0.02em"
                        fontSize="1.618em"
                        fontWeight={'bold'}
                    >
                        How it works?
                    </Heading>
                    <Text
                        textAlign="center"
                        flexBasis="50%"
                        minWidth="28em"
                        maxWidth="60em"
                        lineHeight="1.618"
                        letterSpacing="-0.011em"
                        fontSize="1em"
                    >
                        Input your salary, create and select your
                        diversification categories, then set goals and review
                        your progress regularly to stay on track toward
                        financial growth and stability.
                    </Text>
                </Flex>
            </Flex>
            <Grid
                gap="4"
                gridTemplateColumns={['auto', 'auto', 'repeat(3, 1fr)']}
            >
                <GridItem>
                    <Card height={'100%'}>
                        <CardBody>
                            <Flex
                                gap="4"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Heading
                                    lineHeight="1.272em"
                                    letterSpacing="-0.014em"
                                    fontSize="1.129em"
                                    opacity={'0.8'}
                                >
                                    Step 1
                                </Heading>
                                <Image
                                    src="/assets/icons/user-salary.svg"
                                    alt="types-of-diversification.png"
                                    width={25}
                                    height={25}
                                />
                            </Flex>
                            <Flex gap="4" flexDirection="column">
                                <Heading
                                    lineHeight="1.618em"
                                    letterSpacing="-0.011em"
                                    fontSize="1.272em"
                                    fontWeight="bold"
                                >
                                    Input your salary
                                </Heading>
                                <Stack gap="2">
                                    <Text
                                        lineHeight="1.618em"
                                        letterSpacing="-0.011em"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Enter your total salary to start the
                                        process of diversification.
                                    </Text>
                                </Stack>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card height={'100%'}>
                        <CardBody>
                            <Flex
                                gap="4"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Heading
                                    lineHeight="1.272em"
                                    letterSpacing="-0.014em"
                                    fontSize="1.129em"
                                    opacity={'0.8'}
                                >
                                    Step 2
                                </Heading>
                                <Image
                                    src="/assets/icons/choose.svg"
                                    alt="types-of-diversification.png"
                                    width={25}
                                    height={25}
                                />
                            </Flex>
                            <Flex gap="4" flexDirection="column">
                                <Heading
                                    lineHeight="1.618em"
                                    letterSpacing="-0.011em"
                                    fontSize="1.272em"
                                    fontWeight="bold"
                                >
                                    Choose Your Diversification Categories
                                </Heading>
                                <Stack gap="2">
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011em"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Create custom categories for your
                                        salary, such as investments, savings, or
                                        side income.
                                    </Text>
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011em"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Select the categories to allocate
                                        portions of your salary accordingly.
                                    </Text>
                                </Stack>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card height={'100%'}>
                        <CardBody>
                            <Flex
                                gap="4"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Heading
                                    lineHeight="1.272em"
                                    letterSpacing="-0.014em"
                                    fontSize="1.129em"
                                    opacity={'0.8'}
                                >
                                    Step 3
                                </Heading>
                                <Image
                                    src="/assets/icons/thumbs-up-trust.svg"
                                    alt="types-of-diversification.png"
                                    width={25}
                                    height={25}
                                />
                            </Flex>
                            <Flex gap="4" flexDirection="column">
                                <Heading
                                    lineHeight="1.618em"
                                    letterSpacing="-0.011em"
                                    fontSize="1.272em"
                                    fontWeight="bold"
                                >
                                    Set Goals and Review
                                </Heading>

                                <Stack gap="2">
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011em"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Define specific goals for each category,
                                        such as target savings amounts or
                                        investment growth.
                                    </Text>
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011em"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Review your allocations regularly to
                                        ensure they align with your financial
                                        goals and adjust as needed based on
                                        performance and changes in your
                                        financial situation.
                                    </Text>
                                </Stack>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default How;
