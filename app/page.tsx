import { Flex } from '@chakra-ui/react';
import Hero from './sections/hero';
import What from './sections/what';
import How from './sections/how';
import Mission from './sections/mission';
import Footer from './sections/footer';

export const metadata = {
    title: 'Digi',
    description:
        'Simplify your financial planning with DIGI where smart diversification meets effortless management.',
};

export default function Home() {
    return (
        <Flex flexDirection="column" gap={[0, 0, 20]}>
            <Hero />
            <What />
            <How />
            <Mission />
            <Footer />
        </Flex>
    );
}
