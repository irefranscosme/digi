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
        <Flex justifyContent="space-between" alignItems="center" zIndex="1">
            <Box width="7em">
                <Image src="/assets/digi.png" alt="digi.png" />
            </Box>
            <Box display={['none', 'none', 'block']}>
                <UnorderedList
                    styleType="none"
                    flexDirection="row"
                    gap="6"
                    display="flex"
                    alignItems="center"
                >
                    <ListItem cursor="pointer">
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Savings</Text>
                    </ListItem>
                    <ListItem
                        _hover={{
                            color: 'brand.primary',
                            opacity: 1,
                        }}
                    >
                        <Text>Diversify</Text>
                    </ListItem>
                    <ListItem>
                        <Button colorScheme="blue">Login</Button>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    );
};

export default Header;
