import React from 'react';
import { ButtonGroup, Flex, Icon } from '@chakra-ui/react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';

import { TransparentButton } from '@components/atoms/Buttons/TransparentButton';
import { RoundImage } from '@components/atoms/RoundImage';

const UserNavBar = () => {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            paddingY="2.5"
            paddingX="4"
        >
            <RoundImage
                dimensions="40px"
                src="/user.jpg"
                alt="User Image"
                as="button"
            />
            <ButtonGroup spacing="2.5">
                <TransparentButton
                    aria-label="Stories"
                    icon={
                        <Icon
                            as={AiOutlineLoading3Quarters}
                            width="22px"
                            color="grey.850"
                        />
                    }
                />
                <TransparentButton
                    aria-label="Mensagens"
                    icon={<Icon as={MdMessage} width="22px" color="grey.850" />}
                />
                <TransparentButton
                    aria-label="Menu"
                    icon={
                        <Icon
                            as={HiOutlineDotsVertical}
                            width="22px"
                            color="grey.850"
                        />
                    }
                />
            </ButtonGroup>
        </Flex>
    );
};

export { UserNavBar };
