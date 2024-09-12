import { Container } from '@chakra-ui/react';
import Header from './sections/header';
import { Providers } from './providers';
import Head from 'next/head';

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
                        maxW="150ch"
                        paddingBlock="4"
                        position="relative"
                    >
                        <Header />
                        {children}
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
