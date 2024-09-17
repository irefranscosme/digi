'use client';

import { Button, Image } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import React from 'react';

const Google = () => {
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
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
            Continue with Google
        </Button>
    );
};

export default Google;
