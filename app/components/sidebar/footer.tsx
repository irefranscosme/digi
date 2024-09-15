import {
    Avatar,
    AvatarBadge,
    Box,
    Button,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import MenuDotIcon from '../icons/menu-dot';
import { Session } from 'next-auth';
import Logout from '../auth/logout';

const Footer = ({ session }: { session: Session }) => {
    return (
        <Flex direction="row" gap="2" flexGrow="1">
            <Avatar
                src={session?.user?.image || undefined}
                size="md"
                sx={{
                    border: '1px solid',
                    borderColor: 'gray.50',
                }}
            >
                <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
            <Flex flexDirection="column" flexGrow="1">
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading
                        fontSize="1em"
                        lineHeight="1.618"
                        letterSpacing="-0.011em"
                        fontWeight="400"
                    >
                        {session?.user?.name}
                    </Heading>
                    <Box cursor="pointer">
                        <Menu>
                            <MenuButton px="2" py="1.2">
                                <MenuDotIcon
                                    color="black"
                                    width="18"
                                    height="18"
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem _hover={{ color: 'white' }}>
                                    View profile
                                </MenuItem>
                                <MenuItem _hover={{ color: 'white' }}>
                                    Settings
                                </MenuItem>
                                <MenuItem _hover={{ color: 'white' }}>
                                    <Logout />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
                <Text
                    fontSize="0.885em"
                    lineHeight="1.272em"
                    letterSpacing="-0.007em"
                    opacity={0.8}
                >
                    {session?.user?.email}
                </Text>
            </Flex>
        </Flex>
    );
};

export default Footer;
