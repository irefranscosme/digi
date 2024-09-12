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
                'repeat(2, 1fr)',
            ]}
        >
            <GridItem>
                <Flex
                    flexDirection="column"
                    flexBasis="50%"
                    paddingBlock="40"
                    gap="4"
                >
                    <Flex flexDirection="column" gap="2">
                        <Flex gap="1" flexDirection="column">
                            <Text
                                textTransform="uppercase"
                                lineHeight="1.618"
                                letterSpacing="-0.011"
                                fontWeight="semibold"
                            >
                                Welcome to DIGI:
                            </Text>
                            <Heading
                                lineHeight="1.272"
                                letterSpacing="-0.014"
                                fontSize="2.058em"
                            >
                                Your Ultimate Diversification Companion
                            </Heading>
                        </Flex>
                        <Text
                            maxW="lg"
                            lineHeight="1.618"
                            letterSpacing="-0.011"
                            fontSize="1em"
                        >
                            Simplify your financial planning with DIGI where
                            smart diversification meets effortless management.
                        </Text>
                    </Flex>
                    <Flex gap="4">
                        <Button>Diversify Now</Button>
                        <Button>Learn More</Button>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem
                zIndex="-20"
                position={['absolute', 'absolute', 'unset']}
                top={['0', '0', 'auto']}
                opacity={['0.5', '0.5', '1']}
            >
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
