import React from 'react';
import { NextPage } from 'next';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdMessage } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Flex, Box, Image, ButtonGroup } from '@chakra-ui/react';

import { TransparentButton } from '@components/atoms/Buttons/TransparentButton';
import { BlockLowBatery } from '@components/molecules/Toasters/BlockLowBatery';
import { BlockNotifications } from '@components/molecules/Toasters/BlockNotifications';
import { BlockLowInternet } from '@components/molecules/Toasters/BlockLowInternet';

import { SearchInput } from '@components/atoms/Inputs/SearchInput';

const NotificationTypes = {
    default: <BlockNotifications />,
    lowBatery: <BlockLowBatery />,
    lowInternet: <BlockLowInternet />,
};

const Home: NextPage = () => {
    return (
        <Flex
            alignItems="flex-start"
            maxWidth="1396px"
            width="100%"
            height={{ base: '100vh', xl: '90vh' }}
            margin={{ base: '0', xl: '5' }}
            bgColor="grey.70"
            boxShadow="0 1px 1px 0 rgba(0, 0, 0,.06), 0 2px 5px 0 rgba(0, 0, 0,.2);"
        >
            <Box flex="30%">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    paddingY="2.5"
                    paddingX="4"
                >
                    <Box
                        as="button"
                        width="40px"
                        height="40px"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image src="/user.jpg" alt="User Image" />
                    </Box>
                    <ButtonGroup spacing="2.5" alignItems="center">
                        <TransparentButton>
                            <AiOutlineLoading3Quarters
                                size={22}
                                color="#262626"
                            />
                        </TransparentButton>
                        <TransparentButton>
                            <MdMessage size={22} color="#262626" />
                        </TransparentButton>
                        <TransparentButton>
                            <HiOutlineDotsVertical size={22} color="#262626" />
                        </TransparentButton>
                    </ButtonGroup>
                </Flex>
                {NotificationTypes['default']}
                <SearchInput placeholder="Pesquisar ou começar uma nove conversão" />
            </Box>
            <Flex flex="70%"></Flex>
        </Flex>
    );
};

export default Home;
