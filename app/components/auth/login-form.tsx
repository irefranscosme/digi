'use client';

import { createClient } from '@/utils/supabase/client';
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            // Handle successful authentication (e.g., redirect or display a success message)
            router.push('/dashboard');
            // Redirect to a protected page or show a success message
        }

        setIsLoading(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Flex gap="4" flexDirection="column">
                <FormControl isRequired>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Email"
                        backgroundColor="white"
                        color="black"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl isRequired>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Password"
                        backgroundColor="white"
                        color="black"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl mt="4">
                    <Button
                        colorScheme="blue"
                        width="100%"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Login'}
                    </Button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </FormControl>
            </Flex>
        </form>
    );
};

export default LoginForm;
