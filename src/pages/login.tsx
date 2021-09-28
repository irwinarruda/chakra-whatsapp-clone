import React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import {
    Flex,
    Button,
    ButtonGroup,
    Text,
    Heading,
    keyframes,
} from '@chakra-ui/react';

import { useAuth } from '@contexts/AuthContext';

const jumpIn = keyframes`
    from {
        transform: scale(1.3) translateZ(10px);
    } to {
        transform: scale(1) translateZ(0px);
    }
`;

const Login: NextPage = () => {
    const { signInWithGoogle, signOutWithGoogle, user } = useAuth();

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxWidth="500px"
            minHeight="300px"
            bgColor="grey.30"
            boxShadow="0 1px 1px 0 rgba(0, 0, 0,.06), 0 2px 5px 0 rgba(0, 0, 0,.2)"
            animation={`${jumpIn} 0.3s cubic-bezier(.1,.82,.25,1)`}
        >
            <Text fontWeight="400" color="grey.500">
                Status: {user ? 'Logado' : 'Sem login'}
            </Text>
            <Heading color="grey.500" fontWeight="500" fontSize="2xl">
                Faça Login ou Logout na aplicação
            </Heading>
            <ButtonGroup marginTop="20px">
                <Button
                    onClick={async () => {
                        await signInWithGoogle();
                        Router.push('/');
                    }}
                >
                    Login
                </Button>
                <Button variant="outline" onClick={signOutWithGoogle}>
                    Logout
                </Button>
            </ButtonGroup>
        </Flex>
    );
};

export default Login;
