import React from 'react';
import { Box, Button, Flex, Text, Icon } from '@chakra-ui/react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { RoundImage } from '@components/atoms/RoundImage';

type ContactItemProps = {
    selected?: boolean;
    onClick?: any;
    /* userName: string;
    userImage: string;
    lastMessageDate: string;
    lastMessage: string; */
};

const ContactItem = ({ selected, onClick }: ContactItemProps) => {
    const [isMouseOver, setIsMouseOver] = React.useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };

    return (
        <Flex
            as="button"
            position="relative"
            alignItems="center"
            justifyContent="flex-start"
            width="100%"
            paddingY="3"
            paddingLeft="3.5"
            paddingRight="16"
            overflow="visible"
            bgColor={selected ? 'grey.70' : 'white'}
            _hover={{
                bgColor: selected ? 'grey.70' : '#F5F5F5',
            }}
            _after={{
                content: '""',
                position: 'absolute',
                bottom: '0px',
                right: '0px',
                display: 'block',
                width: '82%',
                height: '1px',
                bgColor: 'grey.70',
            }}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <RoundImage dimensions="46px" src="/user.jpg" alt="User Image" />
            <Box width="100%" marginLeft="3" overflow="hidden">
                <Text
                    as="span"
                    display="block"
                    textAlign="left"
                    fontSize="md"
                    fontWeight="500"
                    color="grey.700"
                    userSelect="none"
                    isTruncated
                >
                    Irwin Arruda Irwin Arruda Irwin Arruda Irwin Arruda Irwin
                    Arruda Irwin Arruda Irwin Arruda
                </Text>
                <Text
                    as="span"
                    display="block"
                    textAlign="left"
                    fontSize="sm"
                    color="grey.400"
                    userSelect="none"
                    isTruncated
                >
                    Última mensagem falada
                </Text>
            </Box>
            <Text
                position="absolute"
                top="3.5"
                right="4"
                fontSize="xs"
                color="grey.400"
                userSelect="none"
            >
                Ontem
            </Text>
            <Button
                variant="unstyled"
                position="absolute"
                bottom="1.5"
                right="1.5"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.1s linear"
                opacity={isMouseOver ? '1' : '0'}
                transform={isMouseOver ? 'translateX(0px)' : 'translateX(20px)'}
                _focus={{ boxShadow: 'none' }}
            >
                <Icon
                    as={RiArrowDownSLine}
                    width="22px"
                    height="22px"
                    color="grey.400"
                />
            </Button>
        </Flex>
    );
};

export { ContactItem };
