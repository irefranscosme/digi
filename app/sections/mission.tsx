import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Mission = () => {
    return (
        <Flex isolation="isolate" flexDirection="column">
            <Flex justifyContent="center" alignItems="center">
                <Box>
                    <Heading textAlign="center">
                        To help individuals achieve financial stability by
                        providing simple tools and strategies for diversifying
                        income, savings, and investments.
                    </Heading>
                    <Text textAlign="center">Mission</Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Mission;
