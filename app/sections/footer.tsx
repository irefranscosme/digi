import {
    Box,
    Button,
    Flex,
    FormControl,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <>
            <Stack
                paddingBlock={['20', '20', '0']}
                justifyContent={'space-between'}
            >
                <Flex width="5em" mx={['auto', 'auto', 'unset']}>
                    <Image src="/assets/digi.png" alt="digi.png" />
                </Flex>
                <Flex gap="20" justifyContent={'space-between'}>
                    <Flex flexDirection="column" gap="4" flexBasis={'30%'}>
                        <Box>
                            <Heading
                                lineHeight="1.272"
                                letterSpacing="-0.017em"
                                fontSize="1.272em"
                            >
                                Send us a message
                            </Heading>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Please fill this form with appropriate message.
                            </Text>
                        </Box>
                        <form>
                            <Flex gap="2" flexDirection="column">
                                <FormControl isRequired>
                                    <Input placeholder="Name" />
                                </FormControl>
                                <FormControl isRequired>
                                    <Input placeholder="Email" />
                                </FormControl>
                                <FormControl isRequired>
                                    <Textarea
                                        placeholder="Enter your message here."
                                        rows={8}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Button>Send message</Button>
                                </FormControl>
                            </Flex>
                        </form>
                    </Flex>
                    <Grid
                        flexBasis={'70%'}
                        templateAreas={[
                            `
                                "quick-links resources"
                                "legal social-media"
                            `,
                            `
                                
                                "quick-links resources"
                                "legal social-media"
                            `,
                            `
                                "quick-links legal resources social-media"
                            `,
                        ]}
                        gap={4}
                    >
                        <GridItem area={'quick-links'}>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Quick Links
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Home
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                What is diversification?
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                How it works?
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Savings
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Diversify
                            </Text>
                        </GridItem>
                        <GridItem area={'legal'}>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Legal
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Privacy Policy
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Terms of Service
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Disclaimer
                            </Text>
                        </GridItem>
                        <GridItem area={'resources'}>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Resources
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                FAQs
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Guides
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Success Stories
                            </Text>
                        </GridItem>
                        <GridItem area={'social-media'}>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Social Media
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Facebook
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Twitter
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                LinkedIn
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                            >
                                Instagram
                            </Text>
                        </GridItem>
                    </Grid>
                </Flex>
            </Stack>
            <Text
                lineHeight="1.618"
                letterSpacing="-0.011em"
                fontSize="1em"
                paddingBlock="10"
                textAlign="center"
            >
                © 2024 Digi | All rights reserved.
            </Text>
        </>
    );
};

export default Footer;
