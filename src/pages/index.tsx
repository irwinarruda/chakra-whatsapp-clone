import React from 'react';
import { NextPage } from 'next';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdMessage } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {
    Flex,
    Box,
    ButtonGroup,
    Text,
    Heading,
    Divider,
    keyframes,
} from '@chakra-ui/react';

import { TransparentButton } from '@components/atoms/Buttons/TransparentButton';
import { RoundImage } from '@components/atoms/RoundImage';

import { BlockLowBatery } from '@components/molecules/Toasters/BlockLowBatery';
import { BlockNotifications } from '@components/molecules/Toasters/BlockNotifications';
import { BlockLowInternet } from '@components/molecules/Toasters/BlockLowInternet';
import { SearchInput } from '@components/molecules/Forms/SearchInput';
import { ContactItem } from '@components/molecules/Lists/ContactItem';

import { NoChatMessage } from '@components/templates/NoChatMessage';

const jumpIn = keyframes`
    from {
        transform: scale(1.3) translateZ(10px);
    } to {
        transform: scale(1) translateZ(0px);
    }
`;

const NotificationTypes = {
    default: <BlockNotifications />,
    lowBatery: <BlockLowBatery />,
    lowInternet: <BlockLowInternet />,
};

const Home: NextPage = () => {
    return (
        <Flex
            maxWidth="1396px"
            height={{ base: '100vh', xl: '95vh' }}
            width="100%"
            margin={{ base: '0', xl: '5' }}
            bgColor="grey.70"
            boxShadow="0 1px 1px 0 rgba(0, 0, 0,.06), 0 2px 5px 0 rgba(0, 0, 0,.2);"
            animation={`${jumpIn} 0.3s cubic-bezier(.1,.82,.25,1)`}
        >
            <Box
                flex="1"
                maxWidth="30%"
                height="100%"
                borderRight="1px solid"
                borderColor="grey.150"
            >
                <Flex flexDir="column" height="100%">
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
                                    <AiOutlineLoading3Quarters
                                        size={22}
                                        color="#262626"
                                    />
                                }
                            />
                            <TransparentButton
                                aria-label="Mensagens"
                                icon={<MdMessage size={22} color="#262626" />}
                            />
                            <TransparentButton
                                aria-label="Menu"
                                icon={
                                    <HiOutlineDotsVertical
                                        size={22}
                                        color="#262626"
                                    />
                                }
                            />
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
            </Box>
            <Box flex="1" maxWidth="70%" height="100%">
                <NoChatMessage />
            </Box>
        </Flex>
    );
};

export default Home;
