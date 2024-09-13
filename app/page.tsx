import { Stack } from '@chakra-ui/react';
import Hero from './sections/hero';
import What from './sections/what';
import How from './sections/how';
import Mission from './sections/mission';

export const metadata = {
    title: 'DIGI',
    description:
        'Simplify your financial planning with DIGI where smart diversification meets effortless management.',
};

export default function Home() {
    return (
        <Stack>
            <Hero />
            <What />
            <How />
            <Mission />
        </Stack>
    );
}
