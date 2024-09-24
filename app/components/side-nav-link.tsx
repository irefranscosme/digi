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
                color="black"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Flex
                    flexDirection="row"
                    gap="4"
                    alignItems="center"
                    position="relative"
                    bg={'gray.200'}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        right: '0',
                        color: 'blue',
                        width: '0.2em',
                        height: '50%',
                        backgroundColor: 'blue.500',
                    }}
                    paddingBlock="2"
                    px="4"
                    justifyContent={['center', 'center', 'center', 'start']}
                >
                    {isActive ? defaultIcon : hoverIcon}
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
            _hover={{ color: 'black', backgroundColor: 'gray.200' }}
            color={'gray.400'}
            paddingBlock="2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Flex
                flexDirection="row"
                gap="4"
                alignItems="center"
                px="4"
                justifyContent={['center', 'center', 'center', 'start']}
            >
                {isHovered ? defaultIcon : hoverIcon}
                {children}
            </Flex>
        </ChakraLink>
    );
}

export default SideNavLink;
