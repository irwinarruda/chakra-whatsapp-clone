import React from 'react';

import { IconButton, IconButtonProps } from '@chakra-ui/react';

type TransparentButtonProps = IconButtonProps;

const TransparentButton = (props: TransparentButtonProps) => {
    return <IconButton {...props} variant="roundIcon" />;
};

export { TransparentButton };
