import {
    Box,
    Flex,
    Heading,
    Image,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const What = () => {
    return (
        <Flex
            isolation="isolate"
            flexDirection="row"
            justifyContent="space-between"
        >
            <Flex flexDirection="column" basis="50%" gap="4">
                <Box>
                    <Heading>What is Diversification</Heading>
                    <Text>
                        Spreading your resources such as income, investments, or
                        savings across different areas to reduce risk and
                        increase stability. By not relying on a single source,
                        you protect yourself from potential losses and create
                        more opportunities for growth.
                    </Text>
                </Box>
                <Flex flexGrow="1">
                    <UnorderedList
                        display="flex"
                        flexDirection="column"
                        flexGrow="1"
                        gap="2"
                    >
                        <ListItem
                            opacity="0.8"
                            position="relative"
                            cursor="pointer"
                        >
                            <Text fontSize="lg">Income Diversification</Text>
                            <Text>
                                Earning from multiple sources, such as side
                                jobs, freelance work, or passive income.
                            </Text>
                        </ListItem>
                        <ListItem
                            opacity="0.8"
                            position="relative"
                            cursor="pointer"
                        >
                            <Text fontSize="lg">
                                Investment Diversification
                            </Text>
                            <Text>
                                Spreading investments across different assets
                                like stocks, bonds, real estate, and mutual
                                funds.
                            </Text>
                        </ListItem>
                        <ListItem
                            position="relative"
                            opacity="0.8"
                            cursor="pointer"
                        >
                            <Text fontSize="lg">Savings Diversification</Text>
                            <Text>
                                Allocating savings into various accounts and
                                products, such as emergency funds, retirement
                                accounts, short-term savings, and health savings
                                to balance risk and growth.
                            </Text>
                        </ListItem>
                        <ListItem
                            opacity="0.8"
                            position="relative"
                            cursor="pointer"
                        >
                            <Text fontSize="lg">Business Diversification</Text>
                            <Text>
                                Expanding business offerings or markets to
                                reduce dependency on a single product or
                                service.
                            </Text>
                        </ListItem>
                    </UnorderedList>
                </Flex>
            </Flex>

            <Box
                flexBasis="50%"
                isolation="isolate"
                position="relative"
                maxW="xl"
            >
                <Image
                    src="/assets/types-of-diversification.png"
                    alt="types-of-diversification.png"
                    objectFit="cover"
                    borderBottomRadius="128px"
                />
                <Flex
                    width="20"
                    position="absolute"
                    top="-2.8em"
                    left="-2.8em"
                    zIndex="1"
                >
                    <Image
                        src="/assets/multiply.png"
                        alt="types-of-diversification.png"
                    />
                </Flex>
                <Flex
                    width="4em"
                    position="absolute"
                    top="-1.2em"
                    right="-2em"
                    zIndex="1"
                >
                    <Image
                        src="/assets/equal.png"
                        alt="types-of-diversification.png"
                    />
                </Flex>
            </Box>
        </Flex>
    );
};

export default What;
