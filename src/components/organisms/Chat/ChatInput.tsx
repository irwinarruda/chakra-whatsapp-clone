import React from 'react';
import { Box, ButtonGroup, HStack, Icon, Input } from '@chakra-ui/react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';

import { TransparentButton } from '@components/atoms/Buttons/TransparentButton';

const ChatInput = () => {
    return (
        <HStack
            position="relative"
            zIndex="banner"
            spacing="3"
            alignItems="center"
            height="60px"
            paddingY="2.5"
            paddingX="4"
            bgColor="grey.60"
        >
            <ButtonGroup spacing="1">
                <TransparentButton
                    aria-label="Menu"
                    icon={
                        <Icon
                            as={GrEmoji}
                            width="26px"
                            height="26px"
                            color="grey.850"
                        />
                    }
                />
                <TransparentButton
                    aria-label="Menu"
                    icon={
                        <Icon
                            as={AiOutlinePaperClip}
                            width="26px"
                            height="26px"
                            color="grey.850"
                        />
                    }
                />
            </ButtonGroup>
            <Box width="100%">
                <Input variant="filled" placeholder="Digite uma mensagem" />
            </Box>
            <Box>
                <TransparentButton
                    aria-label="Menu"
                    icon={
                        <Icon
                            as={FaMicrophone}
                            width="24px"
                            height="24px"
                            color="grey.850"
                        />
                    }
                />
            </Box>
        </HStack>
    );
};

export { ChatInput };
