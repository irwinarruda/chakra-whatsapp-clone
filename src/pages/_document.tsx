import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta name="theme-color" content="#25D366" />
                    <meta
                        name="description"
                        content="WhatsApp clone with Firebase and Chakra UI"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
