import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import SideNavLink from '../side-nav-link';
import DashboardIcon from '../icons/dashboard';
import ChartMixDollarIcon from '../icons/chart-mix-dollar';
import Footer from '../sidebar/footer';

const SideNavWithoutLabel = () => {
    return (
        <Flex
            justifyContent="space-between"
            height="inherit"
            display={['block', 'block', 'block', 'none']}
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
                <GridItem>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        gap="1"
                    >
                        <SideNavLink
                            to="/dashboard"
                            width="100%"
                            hoverIcon={
                                <DashboardIcon
                                    color="gray"
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
                        />
                        <SideNavLink
                            to="/income-streams"
                            width="100%"
                            hoverIcon={
                                <ChartMixDollarIcon
                                    color="gray"
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
                        />
                    </Flex>
                </GridItem>
                <GridItem py="8">
                    <Footer />
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default SideNavWithoutLabel;
