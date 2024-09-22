import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import SideNavLink from '../side-nav-link';
import DashboardIcon from '../icons/dashboard';
import ChartMixDollarIcon from '../icons/chart-mix-dollar';
import Footer from '../sidebar/footer';

const SideNavWithLabel = () => {
    return (
        <Flex
            justifyContent="space-between"
            height="inherit"
            display={['none', 'none', 'none', 'block']}
        >
            <Grid
                templateRows={'repeat(3, 1fr)'}
                gridTemplateRows={'auto 1fr auto'}
                width="100%"
                gap="2"
                height="inherit"
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
    );
};

export default SideNavWithLabel;
