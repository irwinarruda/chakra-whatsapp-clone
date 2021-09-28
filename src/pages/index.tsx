import React from 'react';
import { NextPage } from 'next';
import { Flex, Box, keyframes } from '@chakra-ui/react';

import { useAuth } from '@contexts/AuthContext';

import { BlockLowBatery } from '@components/molecules/Toasters/BlockLowBatery';
import { BlockNotifications } from '@components/molecules/Toasters/BlockNotifications';
import { BlockLowInternet } from '@components/molecules/Toasters/BlockLowInternet';
import { SearchInput } from '@components/molecules/Forms/SearchInput';
import { ContactList } from '@components/molecules/Lists/ContactList';
import { ContactItem } from '@components/molecules/Lists/ContactItem';

import { UserNavBar } from '@components/organisms/Nav/UserNavBar';
import { ChatNavBar } from '@components/organisms/Nav/ChatNavBar';
import { ChatInput } from '@components/organisms/Chat/ChatInput';

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
    const [chat, setChat] = React.useState<boolean>(false);
    const toggleChat = () => {
        setChat((prev) => !prev);
    };
    return (
        <Flex
            maxWidth="1396px"
            height={{ base: '100vh', xl: '95vh' }}
            width="100%"
            margin={{ base: '0', xl: '5' }}
            bgColor="grey.70"
            boxShadow="0 1px 1px 0 rgba(0, 0, 0,.06), 0 2px 5px 0 rgba(0, 0, 0,.2)"
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
                    <UserNavBar />
                    {NotificationTypes['default']}
                    <SearchInput placeholder="Pesquisar ou começar uma nove conversão" />
                    <ContactList>
                        <ContactItem selected onClick={toggleChat} />
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
                    </ContactList>
                </Flex>
            </Box>
            <Box flex="1" position="relative" maxWidth="70%" height="100%">
                {chat ? (
                    <>
                        <Flex
                            flexDirection="column"
                            width="100%"
                            height="100%"
                            bgColor="grey.30"
                        >
                            <ChatNavBar />
                            <Flex height="100%"></Flex>
                            <ChatInput />
                        </Flex>
                        <Flex
                            position="absolute"
                            top="0px"
                            left="0px"
                            width="100%"
                            height="100%"
                            bgImage="/bg-image.png"
                            opacity="0.2"
                            bgRepeat="repeat"
                            bgSize="contain"
                            bgPosition="center"
                            bgColor="yellow.20"
                        ></Flex>
                    </>
                ) : (
                    <NoChatMessage />
                )}
            </Box>
        </Flex>
    );
};

export default Home;
