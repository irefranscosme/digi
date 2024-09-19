import ChartMixDollarIcon from '@/components/icons/chart-mix-dollar';
import DashboardIcon from '@/components/icons/dashboard';
import SideNavLink from '@/components/side-nav-link';
import Footer from '@/components/sidebar/footer';
import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <Grid
            templateAreas={`
                "sidebar main"
                "sidebar main"
                "sidebar main"
            `}
            gridTemplateRows={'auto 1fr'}
            gridTemplateColumns={'20% 1fr'}
            height="100%"
        >
            <GridItem
                gridArea="sidebar"
                height="100%"
                backgroundColor="gray.200"
            >
                <Flex justifyContent="space-between" height="inherit">
                    <Grid
                        templateRows={'repeat(3, 1fr)'}
                        gridTemplateRows={'auto 1fr auto'}
                        width="100%"
                        gap="2"
                    >
                        <GridItem py="8" px="4">
                            <Flex
                                width="inherit"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <Image
                                    src="assets/digi.png"
                                    alt="digi.png"
                                    width="6em"
                                />
                            </Flex>
                        </GridItem>
                        <GridItem width="100%">
                            <Flex width="100%" flexDirection="column" gap="1">
                                <SideNavLink
                                    to="/dashboard"
                                    width="100%"
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
                                    hoverIcon={
                                        <ChartMixDollarIcon
                                            color="white"
                                            width="20"
                                            height="20"
                                        />
                                    }
                                    defaultIcon={
                                        <ChartMixDollarIcon
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
                        <GridItem py="8">
                            <Footer />
                        </GridItem>
                    </Grid>
                </Flex>
            </GridItem>
            <GridItem gridArea="main" py="8" px="10">
                {children}
            </GridItem>
        </Grid>
    );
};

export default Layout;
