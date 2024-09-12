import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const How = () => {
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
                <Flex isolation="isolate" flexDirection="column">
                    <Flex justifyContent="center" alignItems="center">
                        <Box>
                            <Heading textAlign="center">How it works?</Heading>
                            <Text textAlign="center">
                                Input your salary, create and select your
                                diversification categories, then set goals and
                                review your progress regularly to stay on track
                                toward financial growth and stability.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Stack>
                            <Text>Step 1</Text>
                            <Text>Input your salary</Text>
                            <UnorderedList>
                                <ListItem>
                                    <Text>
                                        Enter your total salary to start the
                                        process of diversification.
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Stack>
                        <Stack>
                            <Text>Step 2</Text>
                            <Text>Choose Your Diversification Categories</Text>
                            <UnorderedList>
                                <ListItem>
                                    <Text>
                                        Create custom categories for your
                                        salary, such as investments, savings, or
                                        side income.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        Select the categories to allocate
                                        portions of your salary accordingly.
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Stack>
                        <Stack>
                            <Text>Step 3</Text>
                            <Text>Set Goals and Review</Text>
                            <UnorderedList>
                                <ListItem>
                                    <Text>
                                        Define specific goals for each category,
                                        such as target savings amounts or
                                        investment growth.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        Review your allocations regularly to
                                        ensure they align with your financial
                                        goals and adjust as needed based on
                                        performance and changes in your
                                        financial situation.
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Stack>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default How;
