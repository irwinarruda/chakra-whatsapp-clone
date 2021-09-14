import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

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
            20: '#F8F9FB',
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
            550: '#0AAD48',
            600: '#0aa545',
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
        forms: '3px',
        chat: '7.5px',
        input: '21px',
        full: '100%',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'normal',
                borderRadius: 'forms',
                bg: 'green.500',
                color: 'white',
            },
            variants: {
                solid: (props: any) => ({
                    bg: props.colorMode === 'dark' ? 'teal.500' : 'green.600',
                    transition: 'all 0.1s linear',
                    _hover: {
                        bg:
                            props.colorMode === 'dark'
                                ? 'teal.500'
                                : 'green.550',
                        boxShadow:
                            '0 1px 1px 0 rgba(0, 0, 0, 0.06),0 2px 5px 0 rgba(0, 0, 0, 0.2);',
                    },
                    _active: {
                        bg:
                            props.colorMode === 'dark'
                                ? 'teal.500'
                                : 'green.550',
                    },
                    _focus: {
                        bg:
                            props.colorMode === 'dark'
                                ? 'teal.500'
                                : 'green.550',
                        boxShadow:
                            '0 1px 1px 0 rgba(0, 0, 0, 0.06),0 2px 5px 0 rgba(0, 0, 0, 0.2);',
                    },
                }),
                outline: (props: any) => ({
                    color: 'green.600',
                    bg: 'none',
                    borderColor:
                        props.colorMode === 'dark' ? 'teal.500' : 'grey.100',
                    transition: 'all 0.1s linear',
                    _hover: {
                        bg: 'none',
                        boxShadow:
                            '0 1px 1px 0 rgba(0, 0, 0, 0.06),0 2px 5px 0 rgba(0, 0, 0, 0.2);',
                    },
                    _active: {
                        bg: 'none',
                    },
                    _focus: {
                        bg: 'none',
                        boxShadow:
                            '0 1px 1px 0 rgba(0, 0, 0, 0.06),0 2px 5px 0 rgba(0, 0, 0, 0.2);',
                    },
                }),
                roundIcon: () => ({
                    padding: '0',
                    borderRadius: 'full',
                    bgColor: 'transparent',
                    _hover: { bgColor: 'transparent' },
                    _active: {
                        bgColor: 'rgba(0, 0, 0, 0.1)',
                        boxShadow: 'none',
                    },
                    _focus: {
                        bgColor: 'transparent',
                        boxShadow: 'none',
                    },
                    _focusVisible: {
                        bgColor: 'rgba(0, 0, 0, 0.1)',
                        boxShadow: 'none',
                    },
                }),
            },
        },
    },
};

export const theme = extendTheme(whatsappTheme);
