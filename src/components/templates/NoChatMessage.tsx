import React from 'react';
import { Box, Divider, Flex, Text, Heading, Icon } from '@chakra-ui/react';
import { MdComputer } from 'react-icons/md';

import { RoundImage } from '@components/atoms/RoundImage';

const NoChatMessage = () => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            bgColor="grey.30"
        >
            <Box maxWidth="460px" width="100%">
                <RoundImage src="/wpp-intro.jpg" dimensions="355px" />
                <Heading
                    as="h1"
                    maxWidth="460px"
                    margin="0 auto"
                    marginTop="8"
                    textAlign="center"
                    fontWeight="light"
                    color="grey.500"
                    lineHeight="1"
                    __css={{
                        textRendering: 'optimizeLegibility',
                        fontFeatureSettings: 'kern',
                    }}
                >
                    Mantenha seu celular conectado
                </Heading>
                <Text
                    as="p"
                    marginTop="8"
                    fontSize="sm"
                    lineHeight="20px"
                    color="rgba(0,0,0,0.45)"
                    textAlign="center"
                >
                    O WhatsApp conecta ao seu celular para sincronizar suas
                    mensagens. Para reduzir o uso de dados, conecte seu celular
                    a uma rede Wi-Fi.
                </Text>
                <Divider color="rgba(0,0,0,0.45)" marginTop="8" />
                <Text
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="rgba(0,0,0,0.45)"
                    marginTop="8"
                    fontSize="sm"
                    lineHeight="20px"
                >
                    <Icon as={MdComputer} marginRight="5px" />O WhatsApp está
                    disponível para Windows.{' '}
                    <Text as="a" href="/" marginLeft="5px" color="green.600">
                        Baixe aqui
                    </Text>
                </Text>
            </Box>
        </Flex>
    );
};

export { NoChatMessage };
