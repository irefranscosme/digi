'use client';

import { Link as ChakraLink, Flex, LinkProps } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

interface NavLinkProps extends LinkProps {
    children?: string | React.ReactNode;
    to: string;
    activeProps?: LinkProps;
    color?: string;
    hoverIcon: ReactNode;
    defaultIcon: ReactNode;
}

function SideNavLink({
    to,
    activeProps,
    children,
    color = 'black',
    hoverIcon,
    defaultIcon,
    ...props
}: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === to;
    const [isHovered, setIsHovered] = useState(false);

    if (isActive) {
        return (
            <ChakraLink
                href={to}
                as={Link}
                {...props}
                {...activeProps}
                _hover={{ color: 'white', fill: 'white' }}
                color="white"
                borderRadius="8"
                paddingBlock="2"
                backgroundColor="blue.500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Flex flexDirection="row" gap="4" alignItems="center">
                    {isActive ? hoverIcon : defaultIcon}
                    {children}
                </Flex>
            </ChakraLink>
        );
    }

    return (
        <ChakraLink
            href={to}
            as={Link}
            {...props}
            _hover={{ color: 'white', backgroundColor: 'blue.500' }}
            color={color}
            paddingBlock="2"
            borderRadius="8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Flex flexDirection="row" gap="4" alignItems="center">
                {isHovered ? hoverIcon : defaultIcon}
                {children}
            </Flex>
        </ChakraLink>
    );
}

export default SideNavLink;
