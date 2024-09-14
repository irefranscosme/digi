'use client';

import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface NavLinkProps extends LinkProps {
    children?: string | React.ReactNode;
    to: string;
    activeProps?: LinkProps;
    color?: string;
}

function NavLink({
    to,
    activeProps,
    children,
    color = 'brand.primary',
    ...props
}: NavLinkProps) {
    const [isMounted, setIsMounted] = useState(false); // To track if we're on the client
    const pathname = usePathname();
    const isActive = pathname === to;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    if (isActive) {
        return (
            <Link href={to}>
                <ChakraLink
                    {...props}
                    {...activeProps}
                    _hover={{ color: 'selected' }}
                    color={color}
                >
                    {children}
                </ChakraLink>
            </Link>
        );
    }

    return (
        <Link href={to}>
            <ChakraLink {...props} _hover={{ color: 'selected' }}>
                {children}
            </ChakraLink>
        </Link>
    );
}

export default NavLink;
