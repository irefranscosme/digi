import { Container } from '@chakra-ui/react';
import Header from './layouts/header';
import { Providers } from './providers';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Container maxW="container.xl" paddingBlock="4">
                        <Header />
                        {children}
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
