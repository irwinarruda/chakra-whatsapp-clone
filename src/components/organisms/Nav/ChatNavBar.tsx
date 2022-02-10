import React from 'react';
import { Flex, Text, ButtonGroup, Icon } from '@chakra-ui/react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiOutlineDotsVertical } from 'react-icons/hi';

import { RoundImage } from '@components/atoms/RoundImage';
import { TransparentButton } from '@components/atoms/Buttons/TransparentButton';

const ChatNavBar = () => {
    return (
        <Flex
            position="relative"
            zIndex="banner"
            justifyContent="space-between"
            width="100%"
            height="61px"
            paddingY="2.5"
            paddingX="4"
            bgColor="grey.70"
            borderBottom="1px solid"
            borderColor="grey.150"
        >
            <Flex overflowY="visible" overflowX="hidden">
                <RoundImage src="/user.jpg" dimensions="40px" />
                <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    flexDirection="column"
                    width="100%"
                    marginLeft="4"
                    overflow="hidden"
                >
                    <Text
                        as="span"
                        display="block"
                        textAlign="left"
                        fontSize="0.930rem"
                        fontWeight="500"
                        color="grey.700"
                        userSelect="none"
                        isTruncated
                    >
                        Irwin Arruda Irwin Arruda Irwin Arruda Irwin Arruda
                        Irwin Arruda Irwin Arruda Irwin Arruda
                    </Text>
                    <Text
                        as="span"
                        display="block"
                        marginTop="-1px"
                        textAlign="left"
                        fontSize="0.800rem"
                        lineHeight="20px"
                        color="grey.400"
                        userSelect="none"
                        isTruncated
                    >
                        Última mensagem falada
                    </Text>
                </Flex>
            </Flex>
            <ButtonGroup spacing="1">
                <TransparentButton
                    aria-label="Menu"
                    icon={
                        <Icon
                            as={BiSearchAlt2}
                            width="20px"
                            height="20px"
                            color="grey.850"
                        />
                    }
                />
                <TransparentButton
                    aria-label="Menu"
                    icon={
                        <Icon
                            as={HiOutlineDotsVertical}
                            width="20px"
                            height="20px"
                            color="grey.850"
                        />
                    }
                />
            </ButtonGroup>
        </Flex>
    );
};

export { ChatNavBar };
