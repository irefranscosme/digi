import { Box, Container, Image } from '@chakra-ui/react';
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
                    <Container
                        maxW="container.xl"
                        paddingBlock="4"
                        position="relative"
                    >
                        <Box
                            position="absolute"
                            top="-240"
                            right="-240"
                            zIndex="-20"
                        >
                            <Image
                                src="/assets/hero.png"
                                alt="hero.png"
                                width="1080"
                                height="1080"
                            />
                        </Box>
                        <Header />
                        {children}
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
