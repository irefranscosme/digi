'use client';

import MoneySackIcon from '@/components/icons/money-sack';
import {
    Flex,
    Spinner,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    theme,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const MainIncome = dynamic(
    () => import('@/components/digi/income-streams/main-income'),
    { ssr: false, loading: () => <Spinner /> },
);

const IncomeStreamTabs = () => {
    const [tab, setTab] = useState<string>('main-income');
    return (
        <Tabs>
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
                        <MoneySackIcon
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
            </TabList>
            <TabPanels>
                <TabPanel px="0">
                    <MainIncome />
                </TabPanel>
                <TabPanel>
                    <Text>Freelance / Part-Time</Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default IncomeStreamTabs;
