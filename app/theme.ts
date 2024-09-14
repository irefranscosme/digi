import {
    extendTheme,
    ThemeConfig,
    ThemeOverride,
    theme as baseTheme,
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
    blue: {
        ...baseTheme.colors.blue,
        500: primary, // Default blue
    },
    gray: {
        ...baseTheme.colors.gray,
        500: secondary,
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
    colors,
    fonts,
    fontWeights,
    styles: {
        global: {
            ':root': {
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontSmooth: 'never',
            },
            'html, body': {
                height: '100%',
            },
        },
    },
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
