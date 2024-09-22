'use client';

import { createSupabaseBrowserClient } from '@/lib/supabase/browser-client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const Logout = () => {
    const supabase = createSupabaseBrowserClient();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace('/login');
    };

    return <Box onClick={handleLogout}>Logout</Box>;
};

export default Logout;
