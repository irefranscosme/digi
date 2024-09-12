import {
    Flex,
    FormControl,
    Grid,
    GridItem,
    Image,
    Input,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Stack paddingBlock={['20', '20', '0']}>
            <Flex width="5em" mx={['auto', 'auto', 'unset']}>
                <Image src="/assets/digi.png" alt="digi.png" />
            </Flex>
            <Grid
                templateAreas={[
                    `
                        "send-message send-message"
                        "quick-links resources"
                        "legal social-media"
                    `,
                    `
                        "send-message send-message"
                        "quick-links resources"
                        "legal social-media"
                    `,
                    `
                        "send-message quick-links legal resources social-media"
                    `,
                ]}
                gap={4}
            >
                <GridItem area={'send-message'}>
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
                </GridItem>
                <GridItem area={'quick-links'}>
                    <Text>Quick Links</Text>
                    <Text>Home</Text>
                    <Text>What is diversification?</Text>
                    <Text>How it works?</Text>
                    <Text>Savings</Text>
                    <Text>Diversify</Text>
                </GridItem>
                <GridItem area={'legal'}>
                    <Text>Legal</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Service</Text>
                    <Text>Disclaimer</Text>
                </GridItem>
                <GridItem area={'resources'}>
                    <Text>Resources</Text>
                    <Text>FAQs</Text>
                    <Text>Guides</Text>
                    <Text>Success Stories</Text>
                </GridItem>
                <GridItem area={'social-media'}>
                    <Text>Social Media</Text>
                    <Text>Facebook</Text>
                    <Text>Twitter</Text>
                    <Text>LinkedIn</Text>
                    <Text>Instagram</Text>
                </GridItem>
            </Grid>
        </Stack>
    );
};

export default Footer;
