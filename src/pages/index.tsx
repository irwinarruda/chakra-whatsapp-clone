import React from 'react';
import { NextPage } from 'next';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdMessage } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Flex, Box, ButtonGroup } from '@chakra-ui/react';

import { TransparentButton } from '@components/atoms/Buttons/TransparentButton';
import { RoundImage } from '@components/atoms/RoundImage';

import { BlockLowBatery } from '@components/molecules/Toasters/BlockLowBatery';
import { BlockNotifications } from '@components/molecules/Toasters/BlockNotifications';
import { BlockLowInternet } from '@components/molecules/Toasters/BlockLowInternet';
import { SearchInput } from '@components/molecules/Forms/SearchInput';
import { ContactItem } from '@components/molecules/Lists/ContactItem';

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
            height={{ base: '100vh', xl: '95vh' }}
            width="100%"
            margin={{ base: '0', xl: '5' }}
            bgColor="grey.70"
            boxShadow="0 1px 1px 0 rgba(0, 0, 0,.06), 0 2px 5px 0 rgba(0, 0, 0,.2);"
        >
            <Flex flexDir="column" maxWidth="30%" height="100%">
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
                <Box
                    flexGrow={1}
                    bgColor="white"
                    overflowY="scroll"
                    overflowX="hidden"
                >
                    <Box width="100%">
                        <ContactItem selected />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                    </Box>
                </Box>
            </Flex>
            <Flex maxWidth="70%"></Flex>
        </Flex>
    );
};

export default Home;
