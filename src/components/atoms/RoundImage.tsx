import React from 'react';
import { Box, BoxProps, Image } from '@chakra-ui/react';

type RoundImageProps = BoxProps & {
    dimensions: string;
    src: string;
    alt?: string;
};

const RoundImage = ({ dimensions, src, alt, ...props }: RoundImageProps) => {
    return (
        <Box {...props}>
            <Box
                width={dimensions}
                height={dimensions}
                borderRadius="full"
                overflow="hidden"
                userSelect="none"
            >
                <Image src={src} alt={alt || ''} />
            </Box>
        </Box>
    );
};

export { RoundImage };
