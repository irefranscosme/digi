import DashboardIcon from '@/components/icons/dashboard';
import MoneyIcomeIcon from '@/components/icons/money-income';
import SideNavLink from '@/components/side-nav-link';
import {
    Avatar,
    Flex,
    Grid,
    GridItem,
    Image,
    Spinner,
    Stack,
} from '@chakra-ui/react';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
    const session = await getServerSession();
    if (!session) {
        return (
            <Stack direction="row" spacing={4}>
                <Spinner size="xl" />
            </Stack>
        );
    }

    return (
        <Grid
            templateAreas={`
                "sidebar header"
                "sidebar main"
                "sidebar main"
            `}
            gridTemplateRows={'auto 1fr'}
            gridTemplateColumns={'20% 1fr'}
            height="100%"
        >
            <GridItem gridArea="sidebar" height="100%">
                <Flex justifyContent="space-between" height="inherit">
                    <Grid
                        templateRows={'repeat(3, 1fr)'}
                        gridTemplateRows={'auto 1fr auto'}
                        width="100%"
                    >
                        <GridItem>
                            <Flex
                                width="inherit"
                                justifyContent="flex-start"
                                alignItems="center"
                                padding="4"
                            >
                                <Image
                                    src="assets/digi.png"
                                    alt="digi.png"
                                    width="6em"
                                />
                            </Flex>
                        </GridItem>
                        <GridItem width="100%" px="4">
                            <Flex width="100%" flexDirection="column" gap="2">
                                <SideNavLink
                                    to="/dashboard"
                                    width="100%"
                                    px="4"
                                    hoverIcon={
                                        <DashboardIcon
                                            color="white"
                                            width="20"
                                            height="20"
                                        />
                                    }
                                    defaultIcon={
                                        <DashboardIcon
                                            color="black"
                                            width="20"
                                            height="20"
                                        />
                                    }
                                >
                                    Dashboard
                                </SideNavLink>
                                <SideNavLink
                                    to="/income-streams"
                                    width="100%"
                                    px="4"
                                    hoverIcon={
                                        <MoneyIcomeIcon
                                            color="white"
                                            width="20"
                                            height="20"
                                        />
                                    }
                                    defaultIcon={
                                        <MoneyIcomeIcon
                                            color="black"
                                            width="20"
                                            height="20"
                                        />
                                    }
                                >
                                    Income Streams
                                </SideNavLink>
                            </Flex>
                        </GridItem>
                        <GridItem>Footer</GridItem>
                    </Grid>
                </Flex>
            </GridItem>
            <GridItem gridArea="header">
                <Flex py="2" px="3">
                    <Stack>
                        <Avatar
                            src={session?.user?.image || undefined}
                            size="sm"
                            sx={{
                                border: '1px',
                                borderColor: 'gray.200',
                            }}
                        />
                    </Stack>
                </Flex>
            </GridItem>
            <GridItem gridArea="main">{children}</GridItem>
        </Grid>
    );
};

export default Layout;
