import {
    Box,
    Button,
    Flex,
    Image,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const Header = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center">
            <Box width="7em">
                <Image src="/assets/digi.png" alt="digi.png" />
            </Box>
            <Box>
                <UnorderedList
                    styleType="none"
                    flexDirection="row"
                    gap="3"
                    fontSize="lg"
                    display="flex"
                    alignItems="center"
                >
                    <ListItem cursor="pointer">
                        <Text color="brand.primary" fontWeight="semibold">
                            Home
                        </Text>
                    </ListItem>
                    <ListItem
                        cursor="pointer"
                        fontWeight="semibold"
                        opacity="0.8"
                        color="brand.secondary"
                    >
                        <Text>Savings</Text>
                    </ListItem>
                    <ListItem
                        cursor="pointer"
                        fontWeight="semibold"
                        opacity="0.8"
                        color="brand.secondary"
                    >
                        <Text>Diversify</Text>
                    </ListItem>
                    <ListItem>
                        <Button variant="login" size="md" fontSize="md">
                            Login
                        </Button>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    );
};

export default Header;
