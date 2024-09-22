import GoogleButton from '@/components/auth/google-button';
import LoginForm from '@/components/auth/login-form';
import {
    Container,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Link,
    Text,
} from '@chakra-ui/react';
import React from 'react';

export const metadata = {
    title: 'Login to Digi - Diversify Your Income with Ease',
    description:
        'Access your Digi account and start managing multiple income streams. Log in to discover personalized strategies, track your earnings, and take control of your financial future.',
};

const Page = () => {
    return (
        <Grid
            templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
            ]}
            templateRows="repeat(1, 1fr)"
            height="100%"
        >
            <GridItem display={['none', 'none', 'none', 'block']}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    bg="brand.primary"
                ></Flex>
            </GridItem>
            <GridItem>
                <Grid
                    templateAreas={`
                            "brand brand"
                            "main main"
                            "footer footer"
                        `}
                    gridTemplateRows={'auto 1fr auto'}
                    gridTemplateColumns={'1fr'}
                    height="100%"
                >
                    <GridItem gridArea="brand">
                        <Flex
                            width={'inherit'}
                            justifyContent={'flex-end'}
                            alignItems={'flex-end'}
                            padding="4"
                        >
                            <Image
                                src="assets/digi.png"
                                alt="digi.png"
                                width={'6em'}
                            />
                        </Flex>
                    </GridItem>
                    <GridItem gridArea="main">
                        <Flex
                            alignItems="center"
                            justifyContent={'center'}
                            height="100%"
                        >
                            <Container maxWidth="lg">
                                <Flex flexDirection="column" gap="8">
                                    <Flex flexDirection="column" gap="4">
                                        <Heading
                                            lineHeight="1.272"
                                            letterSpacing="-0.02em"
                                            fontSize="1.618em"
                                            fontWeight="bold"
                                        >
                                            Log in
                                        </Heading>
                                        <Text
                                            textAlign="center"
                                            lineHeight="1.618"
                                            letterSpacing="-0.011em"
                                            fontSize="1em"
                                        >
                                            Diversify your Income with Ease
                                        </Text>
                                    </Flex>
                                    <Flex flexDirection="column">
                                        <LoginForm />
                                        <Flex
                                            paddingBlock="4"
                                            alignItems="center"
                                        >
                                            <Divider />
                                            <Text
                                                textAlign="center"
                                                pl="4"
                                                pr="4"
                                            >
                                                OR
                                            </Text>
                                            <Divider />
                                        </Flex>
                                        <GoogleButton />
                                    </Flex>
                                </Flex>
                            </Container>
                        </Flex>
                    </GridItem>
                    <GridItem gridArea="footer">
                        <Flex gap="1" justifyContent={'center'} padding="4">
                            <Text>New to Digi?</Text>
                            <Link href="/register" color="brand.primary">
                                Get started
                            </Link>
                        </Flex>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
};

export default Page;
