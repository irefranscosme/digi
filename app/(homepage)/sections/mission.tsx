import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Mission = () => {
    return (
        <Flex
            isolation="isolate"
            position="relative"
            flexDirection="column"
            justifyContent={'center'}
            gap="8"
            paddingBlock={['20', '20', '20', '20']}
            alignItems={'center'}
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                minWidth="28em"
                maxWidth="60em"
            >
                <Flex gap="4" position="relative" flexDirection={'column'}>
                    <Heading
                        textAlign="center"
                        lineHeight="1.272"
                        letterSpacing="-0.014"
                        fontSize="1.618em"
                    >
                        <span>
                            <Image
                                src="assets/icons/quote-left.svg"
                                alt="quote-left.svg"
                                width={6}
                                height={6}
                                sx={{
                                    WebkitTransform: 'scaleX(-1)',
                                    transform: 'scaleX(-1)',
                                }}
                                display={'inline-block'}
                                pb={'0.2em'}
                            />
                        </span>{' '}
                        To help individuals achieve financial stability by
                        providing simple tools and strategies for diversifying
                        income, savings, and investments.{' '}
                        <span>
                            <Image
                                src="assets/icons/quote-right.svg"
                                alt="quote-right.svg"
                                width={6}
                                height={6}
                                display={'inline-block'}
                                pb={'0.2em'}
                            />
                        </span>
                    </Heading>
                    <Text
                        textAlign="center"
                        lineHeight="1.618em"
                        letterSpacing="-0.011em"
                        fontSize="1em"
                    >
                        Mission
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Mission;
