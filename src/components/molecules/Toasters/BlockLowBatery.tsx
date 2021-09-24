import React from 'react';
import { Box, Center, HStack, Text, Icon } from '@chakra-ui/react';
import { MdBatteryAlert } from 'react-icons/md';
import { FiX } from 'react-icons/fi';

type BlockLowBateryProps = {
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

const BlockLowBatery = ({ onClose }: BlockLowBateryProps) => {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleCloseButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
        setIsOpen(false);

        if (onClose) {
            onClose(event);
        }
    };

    return (
        <>
            {isOpen && (
                <HStack
                    paddingY="2.5"
                    paddingX="4"
                    spacing="2.5"
                    bgColor="orange.500"
                >
                    <Box>
                        <Center
                            width="48px"
                            height="48px"
                            borderRadius="full"
                            bgColor="white"
                        >
                            <Icon
                                as={MdBatteryAlert}
                                width="30px"
                                color="red.200"
                            />
                        </Center>
                    </Box>
                    <Box>
                        <Text fontSize="md" color="white" userSelect="none">
                            Telefone com bateria fraca
                        </Text>
                        <Text fontSize="sm" color="white" userSelect="none">
                            Carregue a bateria do seu telefone para continuar
                            usando o WhatsApp
                        </Text>
                    </Box>
                    <Box>
                        <Box
                            as="button"
                            padding="1"
                            onClick={handleCloseButtonClick as any}
                            aria-label="Fechar mensagem de pouca bateria"
                        >
                            <Icon as={FiX} width="20px" color="white" />
                        </Box>
                    </Box>
                </HStack>
            )}
        </>
    );
};

export { BlockLowBatery };
