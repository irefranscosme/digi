import {
    Box,
    Button,
    Flex,
    Image,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import NavLink from './nav-link';
import { createSupabaseServerClient } from '@/lib/supabase/server-client';

const Header = async () => {
    const supabase = createSupabaseServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

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
                    <ListItem
                        cursor="pointer"
                        _hover={{
                            color: 'brand.primary',
                            opacity: 1,
                        }}
                    >
                        <NavLink to="/">Home</NavLink>
                    </ListItem>
                    <ListItem
                        cursor="pointer"
                        _hover={{
                            color: 'brand.primary',
                            opacity: 1,
                        }}
                    >
                        <NavLink to="/savings">Savings</NavLink>
                    </ListItem>
                    <ListItem
                        cursor="pointer"
                        _hover={{
                            color: 'brand.primary',
                            opacity: 1,
                        }}
                    >
                        <NavLink to="/diversify">Diversify</NavLink>
                    </ListItem>
                    <ListItem>
                        <Button colorScheme="blue">
                            <NavLink
                                to={!user ? '/login' : '/dashboard'}
                                color={'white'}
                            >
                                {!user ? 'Login' : 'Dashboard'}
                            </NavLink>
                        </Button>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    );
};

export default Header;
