import { Container, Grid, GridItem } from '@chakra-ui/react';
import Header from './sections/header';
import { Providers } from './providers';
import Head from 'next/head';
import Footer from './sections/footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="icon"
                    href="/DIGI-removebg-preview.ico"
                    type="image/ico"
                    sizes="any"
                />
            </Head>
            <body>
                <Providers>
                    <Grid
                        templateAreas={`
                            "header header"
                            "main main"
                            "footer footer"
                        `}
                        gridTemplateRows={'auto 1fr auto'}
                        gridTemplateColumns={'1fr'}
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
