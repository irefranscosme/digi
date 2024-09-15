'use client';

import { Box, Link as ChakraLink, Flex, LinkProps } from '@chakra-ui/react';
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
                _hover={{ fill: 'white' }}
                color="white"
                // backgroundColor="blue.50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Flex
                    flexDirection="row"
                    gap="4"
                    alignItems="center"
                    position="relative"
                    bg={'blue.500'}
                    _before={{
                        content: '""', // or use an emoji or special character
                        position: 'absolute',
                        left: '0', // adjust positioning as needed
                        color: 'blue', // or any color
                        width: '0.2em',
                        height: '50%',
                        backgroundColor: 'white',
                    }}
                    paddingBlock="2"
                    px="4"
                >
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Flex flexDirection="row" gap="4" alignItems="center" px="4">
                {isHovered ? hoverIcon : defaultIcon}
                {children}
            </Flex>
        </ChakraLink>
    );
}

export default SideNavLink;
