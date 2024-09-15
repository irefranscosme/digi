'use client';

import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

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
    const pathname = usePathname();
    const isActive = pathname === to;

    if (isActive) {
        return (
            <ChakraLink
                href={to}
                {...props}
                {...activeProps}
                _hover={{ color: 'selected' }}
                color={color}
            >
                {children}
            </ChakraLink>
        );
    }

    return (
        <ChakraLink href={to} {...props} _hover={{ color: 'selected' }}>
            {children}
        </ChakraLink>
    );
}

export default NavLink;
