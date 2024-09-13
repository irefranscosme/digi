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
        <Stack
            position="relative"
            backgroundColor={'brand.secondary'}
            justifyContent={'center'}
            color={'white'}
        >
            <Stack
                paddingBlock={['20', '20', '20']}
                justifyContent={'space-between'}
                position={'relative'}
            >
                <Flex width="5em" mx={['auto', 'auto', 'unset']}>
                    <Image src="/assets/digi.png" alt="digi.png" />
                </Flex>
                <Flex
                    gap="20"
                    justifyContent={'space-between'}
                    flexDirection={['column', 'column', 'row']}
                >
                    <Flex
                        flexDirection="column"
                        gap="4"
                        flexBasis={['100%', '100%', '50%', '30%']}
                    >
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
                                    <Input
                                        placeholder="Name"
                                        backgroundColor={'white'}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <Input
                                        placeholder="Email"
                                        backgroundColor={'white'}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <Textarea
                                        rows={8}
                                        placeholder="Enter your message here."
                                        backgroundColor={'white'}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Button>Send message</Button>
                                </FormControl>
                            </Flex>
                        </form>
                    </Flex>
                    <Grid
                        flexBasis={['100%', '100%', '50%', '70%']}
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
s                                "quick-links resources"
                                "legal social-media"
                            `,
                            `
                                "quick-links legal resources social-media"
                            `,
                        ]}
                        gap={4}
                    >
                        <GridItem area={'quick-links'}>
                            <Heading
                                lineHeight="1.272"
                                letterSpacing="-0.017em"
                                fontSize="1.272em"
                                mb="0.4em"
                            >
                                Quick Links
                            </Heading>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Home
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                What is diversification?
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                How it works?
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Savings
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Diversify
                            </Text>
                        </GridItem>
                        <GridItem area={'legal'}>
                            <Heading
                                lineHeight="1.272"
                                letterSpacing="-0.017em"
                                fontSize="1.272em"
                                mb="0.4em"
                            >
                                Legal
                            </Heading>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Privacy Policy
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Terms of Service
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Disclaimer
                            </Text>
                        </GridItem>
                        <GridItem area={'resources'}>
                            <Heading
                                lineHeight="1.272"
                                letterSpacing="-0.017em"
                                fontSize="1.272em"
                                mb="0.4em"
                            >
                                Resources
                            </Heading>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                FAQs
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Guides
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Success Stories
                            </Text>
                        </GridItem>
                        <GridItem area={'social-media'}>
                            <Heading
                                lineHeight="1.272"
                                letterSpacing="-0.017em"
                                fontSize="1.272em"
                                mb="0.4em"
                            >
                                Social Media
                            </Heading>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Facebook
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                Twitter
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
                            >
                                LinkedIn
                            </Text>
                            <Text
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                                fontSize="1em"
                                fontWeight="thin"
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
                fontWeight="thin"
            >
                © 2024 Digi | All rights reserved.
            </Text>
        </Stack>
    );
};

export default Footer;
