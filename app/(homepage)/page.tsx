import { Container, Grid, GridItem, Stack } from '@chakra-ui/react';
import Hero from './sections/hero';
import What from './sections/what';
import How from './sections/how';
import Mission from './sections/mission';
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata = {
    title: 'Dashboard',
    description:
        "Manage and diversify your income with Digi's intuitive dashboard. Track savings, bank accounts, emergency funds, and investments, all in one place. Gain financial control with personalized insights and smarter income diversification strategies.",
};

export default function Home() {
    return (
        <Grid
            templateAreas={`
                            "header header"
                            "main main"
                            "footer footer"
                        `}
            gridTemplateRows={'auto auto 1fr'}
            gridTemplateColumns={'1fr'}
            height={'100%'}
        >
            <GridItem area={'header'} my="auto" paddingTop={'1em'}>
                <Container
                    maxWidth={['auto', 'auto', '140ch']}
                    px={['1em', '1em', '2em']}
                >
                    <Header />
                </Container>
            </GridItem>
            <GridItem area={'main'} my="auto">
                <Container
                    maxWidth={['auto', 'auto', '140ch']}
                    px={['1em', '1em', '2em']}
                >
                    <Stack>
                        <Hero />
                        <What />
                        <How />
                        <Mission />
                    </Stack>
                </Container>
            </GridItem>
            <GridItem
                area={'footer'}
                my="auto"
                backgroundColor={'brand.secondary'}
                height={'100%'}
            >
                <Container
                    maxWidth={['auto', 'auto', '140ch']}
                    px={['1em', '1em', '2em']}
                >
                    <Footer />
                </Container>
            </GridItem>
        </Grid>
    );
}
