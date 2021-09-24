import React from 'react';
import { Box } from '@chakra-ui/react';

type ContactListProps = {
    children: React.ReactNode;
};
const ContactList = ({ children }: ContactListProps) => {
    return (
        <Box flexGrow={1} bgColor="white" overflowY="scroll" overflowX="hidden">
            <Box width="100%">{children}</Box>
        </Box>
    );
};

export { ContactList };
