'use client';

import { createClient } from '@/utils/supabase/client';
import { Button, Image } from '@chakra-ui/react';
import React from 'react';

const GoogleButton = (props: { nextUrl?: string }) => {
    const supabase = createClient();

    const getURL = () => {
        let url =
            process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
            process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
            'http://localhost:3000/';
        // Make sure to include `https://` when not localhost.
        url = url.startsWith('http') ? url : `https://${url}`;
        // Make sure to include a trailing `/`.
        url = url.endsWith('/') ? url : `${url}/`;
        return url;
    };

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
