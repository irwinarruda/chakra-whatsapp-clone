import { extendTheme } from '@chakra-ui/react';

const whatsappTheme = {
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'grey.150',
                overflow: 'hidden',
            },
            button: {
                cursor: 'pointer',
            },
            '::-webkit-scrollbar-track': {
                bgColor: 'transparent',
            },
            '::-webkit-scrollbar': {
                width: '6px',
                bgColor: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '0px',
                bgColor: '#CCC',
            },
        },
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        white: '#ffffff',
        grey: {
            30: '#f7f7f7',
            60: '#f0f0f0',
            70: '#ededed',
            100: '#e6e6e6',
            150: '#d9d9d9',
            200: '#ccc',
            300: '#b3b3b3',
            400: '#999',
            500: 'grey',
            600: '#666',
            700: '#4a4a4a',
            800: '#303030',
            850: '#262626',
            900: '#1a1a1a',
        },
        blue: {
            50: '#e1f5fe',
            200: '#9DE1FE',
            500: '#34B7F1',
        },
        green: {
            50: '#DCF8C6',
            500: '#25D366',
        },
        teal: {
            400: '#00BFA5',
            500: '#009688',
            600: '#128C7E',
            700: '#075E54',
        },
        yellow: {
            200: '#FED859',
        },
        orange: {
            500: '#FA685E',
        },
        chat: {
            500: '#ECE5DD',
        },
    },
    fonts: {
        heading:
            'Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif',
        body: 'Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif',
        mono: 'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, Courier, monospace',
    },
    radii: {
        none: '0px',
        chat: '7.5px',
        input: '21px',
        full: '100%',
    },
};

export const theme = extendTheme(whatsappTheme);
