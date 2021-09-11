import { Flex, Center, Input, Button } from '@chakra-ui/react';
import React from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { HiArrowLeft } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';

type SearchInputProps = {
    placeholder?: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [value, setValue] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        if (!value) {
            setIsFocused(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSearchButtonClick = () => {
        if (!isFocused) {
            setIsFocused(false);
            setValue('');
            return;
        }
    };

    return (
        <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            width="100%"
            paddingX="2.5"
            paddingY="2"
            bgColor="#F6F6F6"
            transition="all 0.175s linear"
            _after={{
                content: `"${placeholder}"`,
                display: 'block',
                width: '100%',
                height: '36px',
                paddingLeft: '60px',
                lineHeight: '34px',
                color: 'grey.300',
                bgColor: '#FFFFFF',
                borderRadius: '500px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        >
            <Input
                variant="unstyled"
                position="absolute"
                top="0px"
                left="0px"
                width="100%"
                height="100%"
                paddingY="0"
                paddingLeft="70px"
                lineHeight="50px"
                fontSize="md"
                bgColor="#FFFFFF"
                borderRadius="none"
                opacity={isFocused ? '1' : '0'}
                transition="all 0.175s linear"
                ref={inputRef}
                value={value}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <Button
                type="button"
                variant="unstyled"
                position="absolute"
                bottom="50%"
                left="16px"
                zIndex="docked"
                width="24px"
                transform={
                    isFocused
                        ? 'translateY(50%) rotate(0deg)'
                        : 'translateY(50%) rotate(-180deg)'
                }
                transition="all 0.175s linear"
                _focus={{
                    boxShadow: 'none',
                }}
                onClick={handleSearchButtonClick}
            >
                <Center
                    position="absolute"
                    bottom="50%"
                    right="50%"
                    opacity={isFocused ? '1' : '0'}
                    transition="all 0.1s linear"
                    transform="translateX(50%) translateY(50%)"
                >
                    <HiArrowLeft color="#9DE1FE" size={22} />
                </Center>
                <Center
                    position="absolute"
                    bottom="50%"
                    right="50%"
                    opacity={isFocused ? '0' : '1'}
                    transition="all 0.1s linear"
                    transform="translateX(50%) translateY(50%) rotate(180deg)"
                >
                    <BiSearchAlt2 color="grey" size={18} />
                </Center>
            </Button>
        </Flex>
    );
};

export { SearchInput };
