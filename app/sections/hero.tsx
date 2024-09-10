import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
    return (
        <Flex
            justifyContent="space-between"
            isolation="isolate"
            position="relative"
            zIndex="-10"
        >
            <Flex
                flexDirection="column"
                maxW="4xl"
                flexBasis="50%"
                paddingBlock="40"
            >
                <Box>
                    <Heading>
                        Welcome to DIGI: Your Ultimate Diversification Companion
                    </Heading>
                    <Text>
                        DIGI helps you optimize your salary by automatically
                        distributing it across various banks and investments.
                        Our app ensures your emergency funds and savings are
                        well-diversified, reducing risk and maximizing growth.
                        Simplify your financial planning with DIGI where smart
                        diversification meets effortless management.
                    </Text>
                </Box>
                <Flex>
                    <Button>Diversify Now</Button>
                    <Button>Learn More</Button>
                </Flex>
            </Flex>
            <Box position="absolute" right="0" bottom="0" zIndex="-10">
                <Image
                    src="/assets/hero.png"
                    alt="hero.png"
                    objectFit="contain"
                    minHeight="20em"
                />
            </Box>
        </Flex>
    );
};

export default Hero;
