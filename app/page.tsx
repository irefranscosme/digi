import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <Flex
                isolation="isolate"
                paddingBlock="20"
                maxW="xl"
                flexDirection="column"
                gap="4"
            >
                <Flex gap="1" flexDirection="column">
                    <Heading color="brand.secondary">
                        Welcome to DIGI: Your Ultimate Diversification Companion
                    </Heading>
                    <Text color="brand.secondary">
                        DIGI helps you optimize your salary by automatically
                        distributing it across various banks and investments.
                        Our app ensures your emergency funds and savings are
                        well-diversified, reducing risk and maximizing growth.
                        Simplify your financial planning with DIGI where smart
                        diversification meets effortless management.
                    </Text>
                </Flex>
                <Flex gap="2">
                    <Button variant="secondary" size="md" fontWeight="medium">
                        Learn More
                    </Button>
                    <Button variant="primary" size="md" fontWeight="medium">
                        Diversify Now
                    </Button>
                </Flex>
            </Flex>
        </>
    );
}
