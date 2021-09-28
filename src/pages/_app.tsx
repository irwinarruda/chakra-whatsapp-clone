import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { BgWppContainer } from '@components/templates/BgWppContainer';
import { AuthProvider } from '@contexts/AuthContext';

import { theme } from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <BgWppContainer>
                    <Component {...pageProps} />
                </BgWppContainer>
            </AuthProvider>
        </ChakraProvider>
    );
}
export default MyApp;
