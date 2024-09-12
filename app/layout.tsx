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
                    <Container
                        maxWidth={['auto', 'auto', '140ch']}
                        px={['1em', '1em', '2em']}
                    >
                        <Grid
                            templateAreas={`
                            "header"
                            "main"
                            "footer"
                        `}
                            gridTemplateRows={'auto 1fr auto'}
                            gridTemplateColumns={'1fr'}
                            // border={'1px solid'}
                        >
                            <GridItem
                                area={'header'}
                                my="auto"
                                paddingTop={'1em'}
                                // border={'1px solid red'}
                            >
                                <Header />
                            </GridItem>
                            <GridItem
                                area={'main'}
                                my="auto"
                                // border={'1px solid red'}
                            >
                                {children}
                            </GridItem>
                            <GridItem
                                area={'footer'}
                                my="auto"
                                // border={'1px solid red'}
                            >
                                <Footer />
                            </GridItem>
                        </Grid>
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
