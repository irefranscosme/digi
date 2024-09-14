'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SessionProvider>
                <ChakraProvider theme={theme}>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    {children}
                </ChakraProvider>
            </SessionProvider>
        </>
    );
}
