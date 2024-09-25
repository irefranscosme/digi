'use client';

import { Box } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

const Logout = () => {
    const supabase = createClient();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace('/login');
    };

    return <Box onClick={handleLogout}>Logout</Box>;
};

export default Logout;
