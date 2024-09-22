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
                                        tab === 'main-income'
                                            ? theme.colors.blue[500]
                                            : 'black'
                                    }
                                    width="20"
                                    height="20"
                                />
                                <Text>Main Income</Text>
                            </Flex>
                        </Tab>
                        <Tab onClick={() => setTab('freelance-part-time')}>
                            <Flex alignItems="center" gap="4">
                                <LaptopMobileIcon
                                    color={
                                        tab === 'freelance-part-time'
                                            ? theme.colors.blue[500]
                                            : 'black'
                                    }
                                    width="20"
                                    height="20"
                                />
                                <Text>Freelance / Part-Time</Text>
                            </Flex>
                        </Tab>
                        <Tab onClick={() => setTab('passive-incomes')}>
                            <Flex alignItems="center" gap="4">
                                <RefundAltIcon
                                    color={
                                        tab === 'passive-incomes'
                                            ? theme.colors.blue[500]
                                            : 'black'
                                    }
                                    width="20"
                                    height="20"
                                />
                                <Text>Passive Income</Text>
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
