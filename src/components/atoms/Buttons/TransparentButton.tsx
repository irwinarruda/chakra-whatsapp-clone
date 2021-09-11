import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

type TransparentButtonProps = ButtonProps;

const TransparentButton = (props: TransparentButtonProps) => {
    return (
        <Button
            padding="0"
            borderRadius="full"
            bgColor="transparent"
            _hover={{ bgColor: 'transparent' }}
            _active={{
                bgColor: 'rgba(0, 0, 0, 0.1)',
                boxShadow: 'none',
            }}
            _focus={{
                bgColor: 'transparent',
                boxShadow: 'none',
            }}
            _focusVisible={{
                bgColor: 'rgba(0, 0, 0, 0.1)',
                boxShadow: 'none',
            }}
            {...props}
        />
    );
};

export { TransparentButton };
