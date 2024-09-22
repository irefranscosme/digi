import SideNavWithLabel from '@/components/digi/sidenav-with-label';
import SideNavWithoutLabel from '@/components/digi/sidenav-without-label';
import { Grid, GridItem } from '@chakra-ui/react';
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
            gridTemplateColumns={['5em 1fr', '5em 1fr', '5em 1fr', '20em 1fr']}
            height="100%"
        >
            <GridItem
                gridArea="sidebar"
                height="100%"
                backgroundColor="gray.200"
            >
                <SideNavWithLabel />
                <SideNavWithoutLabel />
            </GridItem>
            <GridItem
                gridArea="main"
                py="8"
                px={['4', '4', '4', '10']}
                overflowY="scroll"
            >
                {children}
            </GridItem>
        </Grid>
    );
};

export default Layout;
