import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
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
        >
            <GridItem>
                <Flex flexDirection="column" gap="4">
                    <Flex flexDirection="column" gap="2">
                        <Flex gap="1" flexDirection="column">
                            <Text
                                textTransform="uppercase"
                                lineHeight="1.618"
                                letterSpacing="-0.011"
                                fontWeight="semibold"
                                textAlign={['center', 'center', 'start']}
                            >
                                Welcome to DIGI:
                            </Text>
                            <Heading
                                lineHeight="1.272"
                                letterSpacing="-0.014"
                                fontSize="2.058em"
                                textAlign={['center', 'center', 'start']}
                            >
                                Your Ultimate Diversification Companion
                            </Heading>
                        </Flex>
                        <Text
                            lineHeight="1.618"
                            letterSpacing="-0.011"
                            fontSize="1em"
                            textAlign={['center', 'center', 'start']}
                        >
                            Simplify your financial planning with DIGI where
                            smart diversification meets effortless management.
                        </Text>
                    </Flex>
                    <Flex
                        gap="4"
                        justifyContent={['center', 'center', 'start']}
                    >
                        <Button colorScheme="blue">Diversify Now</Button>
                        <Button colorScheme="gray">Learn More</Button>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem>
                <Box>
                    <Image
                        src="/assets/hero.png"
                        alt="hero.png"
                        objectFit="contain"
                        minHeight="20em"
                        mixBlendMode="multiply"
                    />
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Hero;
