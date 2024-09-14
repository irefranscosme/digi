import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import NavLink from './components/active-link';

export default function NotFound() {
    return (
        <Flex
            justifyContent="flex-start"
            paddingBlock="20"
            position="relative"
            flexDirection={['column', 'column', 'column', 'row']}
        >
            <Flex
                flexDirection={['row', 'column']}
                gap="4"
                flexBasis={['60%', '60%', '60%', '100%']}
            >
                <Flex flexDirection="column" marginTop="4em">
                    <Text
                        textTransform="uppercase"
                        lineHeight="1.618"
                        letterSpacing="-0.011"
                        fontWeight="semibold"
                        textAlign={['center', 'center', 'start']}
                    >
                        404 | Not Found
                    </Text>
                    <Heading
                        lineHeight="1.272"
                        letterSpacing="-0.014"
                        fontSize="2.058em"
                        textAlign={['center', 'center', 'start']}
                    >
                        Could not find requested resource
                    </Heading>
                </Flex>
                <Flex justifyContent={['center', 'center', 'flex-start']}>
                    <NavLink to="/">
                        <Button colorScheme="blue">Return Home</Button>
                    </NavLink>
                </Flex>
            </Flex>
            <Box>
                <Image src="assets/backgrounds/not-found.png" alt="blob.svg" />
            </Box>
        </Flex>
    );
}
