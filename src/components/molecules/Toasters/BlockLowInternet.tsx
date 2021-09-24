import React from 'react';
import { Box, HStack, Center, Text, Icon } from '@chakra-ui/react';
import {
    MdKeyboardArrowRight,
    MdSignalCellularConnectedNoInternet1Bar,
} from 'react-icons/md';

type BlockLowInternetProps = {
    onNotification?: React.MouseEventHandler<HTMLDivElement>;
};

const BlockLowInternet = ({ onNotification }: BlockLowInternetProps) => {
    const handleBlockClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        alert('Abrir Saiba Mais');
        if (onNotification) {
            onNotification(event);
        }
    };
    return (
        <HStack
            paddingY="4"
            paddingX="4"
            width="100%"
            spacing="2.5"
            bgColor="yellow.200"
            cursor="pointer"
            as="button"
            onClick={handleBlockClick}
        >
            <Box>
                <Center
                    width="48px"
                    height="48px"
                    borderRadius="full"
                    bgColor="white"
                >
                    <Icon
                        as={MdSignalCellularConnectedNoInternet1Bar}
                        width="24px"
                        color="yellow.200"
                    />
                </Center>
            </Box>
            <Box>
                <Text
                    fontSize="md"
                    color="grey.900"
                    fontWeight="thin"
                    userSelect="none"
                    textAlign="left"
                >
                    Telefone desconectado
                </Text>
                <Text
                    fontSize="sm"
                    fontWeight="thin"
                    color="grey.900"
                    userSelect="none"
                    textAlign="left"
                    lineHeight="18px"
                >
                    Certifique-se de que seu celular está conectado à internet.{' '}
                </Text>
                <Text
                    display="flex"
                    alignItems="center"
                    fontSize="sm"
                    fontWeight="thin"
                    color="grey.900"
                    userSelect="none"
                    _hover={{ textDecoration: 'underline' }}
                >
                    Saiba mais{' '}
                    <Icon
                        as={MdKeyboardArrowRight}
                        display="flex"
                        alignItems="center"
                        marginBottom="-3px"
                        width="18px"
                        color="grey.800"
                    />
                </Text>
            </Box>
        </HStack>
    );
};

export { BlockLowInternet };
