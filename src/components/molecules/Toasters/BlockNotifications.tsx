import React from 'react';
import { Box, HStack, Center, Text, Icon } from '@chakra-ui/react';
import { FaBellSlash } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

type BlockNotificationsProps = {
    onNotification?: React.MouseEventHandler<HTMLDivElement>;
};

const BlockNotifications = ({ onNotification }: BlockNotificationsProps) => {
    const handleBlockClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        alert('Abrir Notificações');
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
            bgColor="blue.200"
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
                    <Icon as={FaBellSlash} width="22px" color="blue.200" />
                </Center>
            </Box>
            <Box>
                <Text
                    fontSize="md"
                    color="grey.900"
                    fontWeight="thin"
                    textAlign="left"
                    userSelect="none"
                >
                    Receba notificações de novas mensagens
                </Text>
                <Text
                    display="flex"
                    alignItems="center"
                    fontSize="sm"
                    fontWeight="thin"
                    textAlign="left"
                    color="grey.900"
                    userSelect="none"
                    _hover={{ textDecoration: 'underline' }}
                >
                    Ativar notificações na área de trabalho{' '}
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

export { BlockNotifications };
