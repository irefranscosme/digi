'use client';

import { Button, Flex, Heading } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import NavLink from '../active-link';

const Dashboard = () => {
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                <Flex>
                    <Heading>Welcome back, {session.user?.name}</Heading>
                    <Button onClick={() => signOut()}>Logout</Button>
                </Flex>
            ) : (
                <Flex>
                    <Heading>You are not logged in</Heading>
                    <Button colorScheme="blue">
                        <NavLink to="/login" color={'white'}>
                            Login
                        </NavLink>
                    </Button>
                </Flex>
            )}
        </div>
    );
};

export default Dashboard;
