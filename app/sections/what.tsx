import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

const What = () => {
    return (
        <Grid
            isolation="isolate"
            position="relative"
            templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
            ]}
            paddingBlock={['20', '20', '20', '0']}
            alignItems={['unset', 'unset', 'center']}
            gap="8"
        >
            <GridItem>
                <Flex flexDirection="column" gap="4">
                    <Box>
                        <Text
                            textTransform="uppercase"
                            lineHeight="1.618"
                            letterSpacing="-0.011"
                            fontWeight="semibold"
                            textAlign={['center', 'center', 'start']}
                        >
                            What is?
                        </Text>
                        <Heading
                            color={'brand.primary'}
                            lineHeight="1.272"
                            letterSpacing={['0.1em', '0.2em', '0.3em', '0.4em']}
                            fontSize="2.058em"
                            textAlign={['center', 'center', 'start']}
                            textTransform={'uppercase'}
                            fontWeight={'extraBold'}
                        >
                            Diversification?
                        </Heading>
                        <Text
                            // maxW={['auto', 'auto', 'auto', '2xl']}
                            lineHeight="1.618"
                            letterSpacing="-0.011"
                            textAlign={['center', 'center', 'start']}
                        >
                            Spreading your resources such as income,
                            investments, or savings across different areas to
                            reduce risk and increase stability.
                        </Text>
                    </Box>
                    <Flex
                        flexGrow="1"
                        justifyContent={[
                            'center',
                            'center',
                            'space-between',
                            'start',
                        ]}
                        alignItems={'center'}
                        gap={[20, 20, 30, 40]}
                    >
                        <Stack>
                            <Flex gap="4" alignItems="start">
                                <Image
                                    src="/assets/icons/money-wings.svg"
                                    alt="types-of-diversification.png"
                                    width={25}
                                    height={25}
                                    mt="0.5em"
                                />
                                <Box>
                                    <Heading
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Income Diversification
                                    </Heading>
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Earning from multiple sources, such as
                                        side jobs, freelance work, or passive
                                        income.
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex gap="4" alignItems="start">
                                <Image
                                    src="/assets/icons/growth-chart-invest.svg"
                                    alt="types-of-diversification.png"
                                    width={25}
                                    height={25}
                                    mt="0.5em"
                                />
                                <Box>
                                    <Heading
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Investment Diversification
                                    </Heading>
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Spreading investments across different
                                        assets like stocks, bonds, real estate,
                                        and mutual funds.
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex gap="4" alignItems="start">
                                <Image
                                    src="/assets/icons/piggy-bank.svg"
                                    alt="types-of-diversification.png"
                                    width={25}
                                    height={25}
                                    mt="0.5em"
                                />
                                <Box>
                                    <Heading
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Savings Diversification
                                    </Heading>
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Allocating savings into various accounts
                                        and products, such as emergency funds,
                                        retirement accounts, short-term savings,
                                        and health savings to balance risk and
                                        growth.
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex gap="4" alignItems="start">
                                <Image
                                    src="/assets/icons/store-alt.svg"
                                    alt="types-of-diversification.png"
                                    width={25}
                                    height={25}
                                    mt="0.5em"
                                />
                                <Box>
                                    <Heading
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Business Diversification
                                    </Heading>
                                    <Text
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1em"
                                        mt="-0.2em"
                                    >
                                        Expanding business offerings or markets
                                        to reduce dependency on a single product
                                        or service.
                                    </Text>
                                </Box>
                            </Flex>
                        </Stack>
                        <Flex
                            isolation="isolate"
                            position="relative"
                            display={['none', 'none', 'block', 'none']}
                            alignSelf={'flex-start'}
                        >
                            <Flex
                                alignItems={'center'}
                                minW={['22em', '22em', '22em', '22em']}
                            >
                                <Image
                                    src="/assets/types-of-diversification.png"
                                    alt="types-of-diversification.png"
                                    borderBottomRadius="128px"
                                    position="relative"
                                />
                                <Flex
                                    width="4em"
                                    position="absolute"
                                    top="-2.1em"
                                    left="-2.1em"
                                    zIndex="1"
                                >
                                    <Image
                                        src="/assets/multiply.png"
                                        alt="multiply.png"
                                    />
                                </Flex>
                                <Flex
                                    width="3em"
                                    position="absolute"
                                    top="-1.2em"
                                    right="-1.2em"
                                    zIndex="1"
                                >
                                    <Image
                                        src="/assets/equal.png"
                                        alt="equal.png"
                                    />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem
                zIndex="-20"
                display={['block', 'block', 'none', 'block']}
                px={['1em', 'auto', 'auto']}
            >
                <Flex
                    isolation="isolate"
                    justifyContent={['center', 'center', 'flex-end']}
                >
                    <Flex
                        position="relative"
                        // minWidth="24em"
                        maxWidth={['auto', '30em']}
                    >
                        <Image
                            src="/assets/types-of-diversification.png"
                            alt="types-of-diversification.png"
                            borderBottomRadius="128px"
                            // padding={['20em', 'unset', 'unset']}
                        />
                        <Flex
                            width="4em"
                            position="absolute"
                            top="-2.1em"
                            left="-2.1em"
                            zIndex="1"
                        >
                            <Image
                                src="/assets/multiply.png"
                                alt="multiply.png"
                            />
                        </Flex>
                        <Flex
                            width="3em"
                            position="absolute"
                            top="-1.2em"
                            right="-1.2em"
                            zIndex="1"
                        >
                            <Image src="/assets/equal.png" alt="equal.png" />
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default What;
