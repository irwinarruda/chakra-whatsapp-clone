import React from 'react';
import { AppProps } from 'next/app';
import { Box, Flex, ChakraProvider, useMediaQuery } from '@chakra-ui/react';

import { BgWppContainer } from '@components/templates/BgWppContainer';

import { theme } from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <BgWppContainer>
                <Component {...pageProps} />
            </BgWppContainer>
        </ChakraProvider>
    );
}
export default MyApp;
