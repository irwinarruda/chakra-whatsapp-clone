import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

type BgWppContainerProps = {
    children: React.ReactNode;
};

const BgWppContainer = ({ children }: BgWppContainerProps) => {
    return (
        <Box
            width="100%"
            position="relative"
            _after={{
                content: '""',
                position: 'fixed',
                zIndex: 'base',
                top: '0px',
                display: 'block',
                height: '127px',
                width: '100%',
                bgColor: 'teal.500',
            }}
        >
            <Flex
                width="100%"
                height="100vh"
                justifyContent="center"
                alignItems="center"
                position="relative"
                zIndex="docked"
            >
                {children}
            </Flex>
        </Box>
    );
};

export { BgWppContainer };
