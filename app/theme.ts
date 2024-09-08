import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const primary = '#347DEB';
const secondary = '#4D596B';
const tertiary = '#EBC334';

const colors = {
    brand: {
        primary: primary,
        secondary: secondary,
        tertiary: tertiary,
    },
};

const components = {
    Button: {
        baseStyle: {
            fontWeight: 'semibold',
        },
        variants: {
            primary: {
                bg: primary,
                color: 'white',
                borderRadius: '16px 0px 16px 8px',
                fontSize: 'sm',
            },
            secondary: {
                bg: secondary,
                color: 'white',
                borderRadius: '16px 8px 16px 0px',
            },
            login: {
                bg: primary,
                color: 'white',
                borderRadius: '16px 8px 16px 8px',
            },
        },
        defaultProps: {
            size: 'sm',
            variant: 'sm',
            colorScheme: primary,
            bg: primary,
        },
    },
};

const breakpoints = {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
};

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const theme = extendTheme({ config, breakpoints, colors, components });

export default theme;
