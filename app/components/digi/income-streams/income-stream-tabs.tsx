'use client';

import MoneySackIcon from '@/components/icons/money-sack';
import {
    Flex,
    Grid,
    GridItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    theme,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import MainIncome from './tab-panels/main-income';
import LaptopMobileIcon from '@/components/icons/laptop-mobile';
import RefundAltIcon from '@/components/icons/refund-alt';

const isActive: Record<string, string> = {
    active: theme.colors.black[500],
    'in-active': theme.colors.gray[200],
};

const IncomeStreamTabs = () => {
    const [tab, setTab] = useState<string>('main-income');
    return (
        <Tabs>
            <Grid gridTemplateRows={'auto 1fr'}>
                <GridItem>
                    <TabList>
                        <Tab onClick={() => setTab('main-income')}>
                            <Flex alignItems="center" gap="4">
                                <MoneySackIcon
                                    color={
                                        isActive[
                                            tab === 'main-income'
                                                ? 'active'
                                                : 'in-active'
                                        ]
                                    }
                                    width="20"
                                    height="20"
                                />
                                <Text
                                    color={
                                        tab === 'main-income'
                                            ? 'black'
                                            : 'gray.500'
                                    }
                                >
                                    Main Income
                                </Text>
                            </Flex>
                        </Tab>
                        <Tab onClick={() => setTab('freelance-part-time')}>
                            <Flex alignItems="center" gap="4">
                                <LaptopMobileIcon
                                    color={
                                        isActive[
                                            tab === 'freelance-part-time'
                                                ? 'active'
                                                : 'in-active'
                                        ]
                                    }
                                    width="20"
                                    height="20"
                                />
                                <Text
                                    color={
                                        tab === 'freelance-part-time'
                                            ? 'black'
                                            : 'gray.500'
                                    }
                                >
                                    Freelance / Part-Time
                                </Text>
                            </Flex>
                        </Tab>
                        <Tab onClick={() => setTab('passive-incomes')}>
                            <Flex alignItems="center" gap="4">
                                <RefundAltIcon
                                    color={
                                        isActive[
                                            tab === 'passive-incomes'
                                                ? 'active'
                                                : 'in-active'
                                        ]
                                    }
                                    width="20"
                                    height="20"
                                />
                                <Text
                                    color={
                                        tab === 'passive-incomes'
                                            ? 'black'
                                            : 'gray.500'
                                    }
                                >
                                    Passive Income
                                </Text>
                            </Flex>
                        </Tab>
                    </TabList>
                </GridItem>
                <GridItem>
                    <TabPanels>
                        <TabPanel px="0" overflowY="auto" height={'100%'}>
                            <MainIncome />
                        </TabPanel>
                        <TabPanel>
                            <Text>Freelance / Part-Time</Text>
                        </TabPanel>
                        <TabPanel>
                            <Text>Passive Income</Text>
                        </TabPanel>
                    </TabPanels>
                </GridItem>
            </Grid>
        </Tabs>
    );
};

export default IncomeStreamTabs;
