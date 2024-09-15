'use client';

import { Box } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import React from 'react';

const Logout = () => {
    return <Box onClick={() => signOut()}>Logout</Box>;
};

export default Logout;
