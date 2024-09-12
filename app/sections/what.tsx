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
                'repeat(2, 1fr)',
            ]}
            justifyContent="space-between"
            alignContent="space-between"
            paddingBlock={['20', '20', '0']}
            alignItems={['unset', 'unset', 'center']}
        >
            <GridItem>
                <Flex flexDirection="column" basis="50%" gap="4">
                    <Box>
                        <Heading
                            lineHeight="1.272"
                            letterSpacing="-0.014"
                            fontSize="1.618em"
                        >
                            What is Diversification
                        </Heading>
                        <Text
                            maxW="2xl"
                            lineHeight="1.618"
                            letterSpacing="-0.011"
                        >
                            Spreading your resources such as income,
                            investments, or savings across different areas to
                            reduce risk and increase stability. By not relying
                            on a single source, you protect yourself from
                            potential losses and create more opportunities for
                            growth.
                        </Text>
                    </Box>
                    <Flex flexGrow="1">
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
                                        maxW="lg"
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Income Diversification
                                    </Heading>
                                    <Text
                                        maxW="lg"
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
                                        maxW="lg"
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Investment Diversification
                                    </Heading>
                                    <Text
                                        maxW="lg"
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
                                        maxW="lg"
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Savings Diversification
                                    </Heading>
                                    <Text
                                        maxW="lg"
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
                                        maxW="lg"
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontSize="1.272em"
                                    >
                                        Business Diversification
                                    </Heading>
                                    <Text
                                        maxW="lg"
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
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem
                zIndex="-20"
                position={['absolute', 'absolute', 'unset']}
                bottom={['0', '0', 'auto']}
                left={['0', '0', 'auto']}
                right={['0', '0', 'auto']}
                opacity={['0.2', '0.2', '1']}
            >
                <Flex
                    isolation="isolate"
                    position="relative"
                    maxW="xl"
                    mx="auto"
                    justifyContent="center"
                    alignItems="center"
                    _before={{
                        content: '""',
                        position: 'absolute',
                        inset: '0',
                        zIndex: '20',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'gray.900',
                        mixBlendMode: 'color-dodge',
                        borderBottomRadius: '128px',
                        opacity: [1, 1, 0],
                    }}
                >
                    <Image
                        src="/assets/types-of-diversification.png"
                        alt="types-of-diversification.png"
                        mixBlendMode="multiply"
                        borderBottomRadius="128px"
                        width="100%"
                        position="relative"
                    />
                    <Flex
                        width="20"
                        position="absolute"
                        top="-2.8em"
                        left="-2.8em"
                        zIndex="1"
                    >
                        <Image src="/assets/multiply.png" alt="multiply.png" />
                    </Flex>
                    <Flex
                        width="4em"
                        position="absolute"
                        top="-1.2em"
                        right="-2em"
                        zIndex="1"
                    >
                        <Image src="/assets/equal.png" alt="equal.png" />
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default What;
