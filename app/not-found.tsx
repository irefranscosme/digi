import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import NavLink from './components/active-link';
import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
    title: '404 | Not Found',
};

export default function NotFound() {
    return (
        <Grid
            templateAreas={`
                        "header header"
                        "main main"
                        "footer footer"
                    `}
            gridTemplateRows={'auto auto 1fr'}
            gridTemplateColumns={'1fr'}
            height={'100%'}
        >
            <GridItem area={'header'} my="auto" paddingTop={'1em'}>
                <Container
                    maxWidth={['auto', 'auto', '140ch']}
                    px={['1em', '1em', '2em']}
                >
                    <Header />
                </Container>
            </GridItem>
            <GridItem area={'main'} my="auto">
                <Container
                    maxWidth={['auto', 'auto', '140ch']}
                    px={['1em', '1em', '2em']}
                >
                    <Stack>
                        <Flex
                            justifyContent="flex-start"
                            paddingBlock="20"
                            position="relative"
                            flexDirection={[
                                'column',
                                'column',
                                'column',
                                'row',
                            ]}
                        >
                            <Flex
                                flexDirection={['row', 'column']}
                                gap="4"
                                flexBasis={['60%', '60%', '60%', '100%']}
                            >
                                <Flex flexDirection="column" marginTop="4em">
                                    <Text
                                        textTransform="uppercase"
                                        lineHeight="1.618"
                                        letterSpacing="-0.011"
                                        fontWeight="semibold"
                                        textAlign={[
                                            'center',
                                            'center',
                                            'start',
                                        ]}
                                    >
                                        404 | Not Found
                                    </Text>
                                    <Heading
                                        lineHeight="1.272"
                                        letterSpacing="-0.014"
                                        fontSize="2.058em"
                                        textAlign={[
                                            'center',
                                            'center',
                                            'start',
                                        ]}
                                    >
                                        Could not find requested resource
                                    </Heading>
                                </Flex>
                                <Flex
                                    justifyContent={[
                                        'center',
                                        'center',
                                        'flex-start',
                                    ]}
                                >
                                    <NavLink to="/">
                                        <Button colorScheme="blue">
                                            Return Home
                                        </Button>
                                    </NavLink>
                                </Flex>
                            </Flex>
                            <Box>
                                <Image
                                    src="assets/backgrounds/not-found.png"
                                    alt="blob.svg"
                                />
                            </Box>
                        </Flex>
                    </Stack>
                </Container>
            </GridItem>
            <GridItem
                area={'footer'}
                my="auto"
                backgroundColor={'brand.secondary'}
                height={'100%'}
            >
                <Container
                    maxWidth={['auto', 'auto', '140ch']}
                    px={['1em', '1em', '2em']}
                >
                    <Footer />
                </Container>
            </GridItem>
        </Grid>
    );
}
