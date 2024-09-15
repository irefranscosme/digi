import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';
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
        50: '#9abef5',
        100: '#85b1f3',
        200: '#71a4f1',
        300: '#5d97ef',
        400: '#488aed',
        500: primary,
        600: '#2f71d4',
        700: '#2a64bc',
        800: '#2458a5',
        900: '#1f4b8d',
    },
    gray: {
        50: '#a6acb5',
        100: '#949ba6',
        200: '#828b97',
        300: '#717a89',
        400: '#5f6a7a',
        500: secondary,
        600: '#455060',
        700: '#3e4756',
        800: '#363e4b',
        900: '#2e3540',
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
