import {
    Box,
    Flex,
    FormControl,
    Image,
    Input,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Stack>
            <Box width="5em">
                <Image src="/assets/digi.png" alt="digi.png" />
            </Box>
            <Flex>
                <Stack>
                    <Text>Quick Links</Text>
                    <Text>Home</Text>
                    <Text>What is diversification?</Text>
                    <Text>How it works?</Text>
                    <Text>Savings</Text>
                    <Text>Diversify</Text>
                </Stack>
                <Stack>
                    <Text>Legal</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Service</Text>
                    <Text>Disclaimer</Text>
                </Stack>
                <Stack>
                    <Text>Resources</Text>
                    <Text>FAQs</Text>
                    <Text>Guides</Text>
                    <Text>Success Stories</Text>
                </Stack>
                <Stack>
                    <Text>Social Media</Text>
                    <Text>Facebook</Text>
                    <Text>Twitter</Text>
                    <Text>LinkedIn</Text>
                    <Text>Instagram</Text>
                </Stack>
                <Stack>
                    <Text>Send us a message</Text>
                    <Text>Please fill this form with appropriate message.</Text>
                    <form>
                        <FormControl isRequired>
                            <Input placeholder="Name" />
                        </FormControl>
                        <FormControl isRequired>
                            <Input placeholder="Email" />
                        </FormControl>
                        <FormControl isRequired>
                            <Textarea placeholder="Here is a sample placeholder" />
                        </FormControl>
                    </form>
                </Stack>
            </Flex>
        </Stack>
    );
};

export default Footer;
