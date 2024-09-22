'use client';

import { createSupabaseBrowserClient } from '@/lib/supabase/browser-client';
import { Button, Image } from '@chakra-ui/react';
import React from 'react';

const GoogleButton = (props: { nextUrl?: string }) => {
    const supabase = createSupabaseBrowserClient();

    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/auth/callback?next=${
                    props.nextUrl || ''
                }`,
            },
        });
    };

    return (
        <Button
            width="100%"
            leftIcon={
                <Image
                    src="assets/icons/google.png"
                    width="1.2em"
                    alt="google.png"
                />
            }
            onClick={handleLogin}
        >
            Continue with Google
        </Button>
    );
};

export default GoogleButton;
