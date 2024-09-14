import { Container, Grid, GridItem } from '@chakra-ui/react';
import Header from './sections/header';
import { Providers } from './providers';
import Footer from './sections/footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
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
                                {children}
                            </Container>
                        </GridItem>
                        <GridItem
                            area={'footer'}
                            my="auto"
                            backgroundColor={'brand.secondary'}
                            border={'1px solid'}
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
                </Providers>
            </body>
        </html>
    );
}
