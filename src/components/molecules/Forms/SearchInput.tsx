import { Flex, Center, Input, Button, Icon } from '@chakra-ui/react';
import React from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { HiArrowLeft } from 'react-icons/hi';

type SearchInputProps = {
    placeholder?: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const [value, setValue] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasClickedOutside, setHasClickedOutside] = React.useState(false);

    const handleClickOutside: EventListener = (event) => {
        if (
            inputRef.current &&
            buttonRef.current &&
            !inputRef.current.contains(event.target as any) &&
            !buttonRef.current.contains(event.target as any)
        ) {
            setHasClickedOutside(true);
        }
    };

    const handleInputFocus = () => {
        setIsFocused(true);
        document.addEventListener('mousedown', handleClickOutside);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSearchButtonClick = () => {
        if (isFocused) {
            setIsFocused(false);
            setValue('');
            setHasClickedOutside(false);
            document.removeEventListener('mousedown', handleClickOutside);
            return;
        }

        inputRef?.current?.focus();
    };

    React.useEffect(() => {
        if (hasClickedOutside) {
            if (!value) {
                setIsFocused(false);
                document.removeEventListener('mousedown', handleClickOutside);
            }
            setHasClickedOutside(false);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [hasClickedOutside]);

    return (
        <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            width="100%"
            paddingX="2.5"
            paddingY="2"
            bgColor="#F6F6F6"
            borderBottom="1px solid"
            borderBottomColor="grey.70"
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
                color="grey.700"
                bgColor="#FFFFFF"
                borderRadius="none"
                boxShadow="0 3px 4px -1px rgba(0, 0, 0,.06)"
                overflowX="hidden"
                opacity={isFocused ? '1' : '0'}
                transition="all 0.175s linear"
                ref={inputRef}
                value={value}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
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
                        : 'translateY(50%) rotate(-90deg)'
                }
                transition="all 0.175s linear"
                _focus={{
                    boxShadow: 'none',
                }}
                aria-label="Pesquisar"
                ref={buttonRef}
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
                    <Icon
                        as={HiArrowLeft}
                        width="20px"
                        height="20px"
                        color="blue.200"
                    />
                </Center>
                <Center
                    position="absolute"
                    bottom="50%"
                    right="50%"
                    opacity={isFocused ? '0' : '1'}
                    transition="all 0.1s linear"
                    transform="translateX(50%) translateY(50%) rotate(90deg)"
                >
                    <Icon
                        as={BiSearchAlt2}
                        width="20px"
                        height="20px"
                        color="grey"
                    />
                </Center>
            </Button>
        </Flex>
    );
};

export { SearchInput };
