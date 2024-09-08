import {
    ComponentStyleConfig,
    extendTheme,
    ThemeConfig,
    ThemeOverride,
} from '@chakra-ui/react';
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

const Button: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 'semibold',
    },
    variants: {
        primary: {
            bg: primary,
            color: 'white',
            borderRadius: '16px 0px 16px 8px',
            fontSize: 'sm',
            _hover: {
                boxShadow: `
                 2px  2px 0px ${tertiary}   /* Bottom-right shadow */
              `,
            },
        },
        secondary: {
            bg: secondary,
            color: 'white',
            borderRadius: '16px 8px 16px 0px',
            fontSize: 'sm',
            _hover: {
                boxShadow: `
                 2px  2px 0px ${tertiary}   /* Bottom-right shadow */
              `,
            },
        },
        login: {
            bg: primary,
            color: 'white',
            borderRadius: '16px 8px 16px 8px',
            fontSize: 'sm',
            _hover: {
                boxShadow: `
                 2px  2px 0px ${tertiary}   /* Bottom-right shadow */
              `,
            },
        },
    },
    defaultProps: {
        size: 'sm',
        variant: 'sm',
        colorScheme: primary,
        bg: primary,
    },
};

const components = {
    Button,
};

const breakpoints = {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
};

const customeTheme: ThemeOverride = {
    breakpoints,
    components,
    colors,
    fonts,
    fontWeights,
};

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    ...customeTheme,
});

export default theme;
