import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/be-vietnam-pro/300.css'; // Normal weight
import '@fontsource/be-vietnam-pro/400.css'; // Normal weight
import '@fontsource/be-vietnam-pro/500.css'; // Medium weight
import '@fontsource/be-vietnam-pro/600.css'; // Medium weight
import '@fontsource/be-vietnam-pro/700.css'; // Bold weight

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

const fonts = {
    heading: `'Be Vietnam Pro', sans-serif`,
    body: `'Be Vietnam Pro', sans-serif`,
};

const fontWeights = {
    normal: 300,
    medium: 400,
    semibold: 500,
    bold: 600,
    extraBold: 700,
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
                fontSize: 'sm',
            },
            login: {
                bg: primary,
                color: 'white',
                borderRadius: '16px 8px 16px 8px',
                fontSize: 'sm',
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

const theme = extendTheme({
    config,
    breakpoints,
    colors,
    components,
    fonts,
    fontWeights,
});

export default theme;
