'use client';

import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    MenuOptionGroup,
    Select,
    SelectField,
    useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

const CreateIncomeDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    return (
        <>
            <Box>
                <Button ref={btnRef} onClick={onOpen}>
                    Create
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    sx={{
                        maxW: '30em', // Adjust the width here
                        width: '100%', // Ensures the drawer stretches to the defined max width
                    }}
                >
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Heading
                            fontSize="1.129em"
                            lineHeight="1.272"
                            letterSpacing="-0.014em"
                            pt="10"
                        >
                            Provide your income details.
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody>
                        <FormControl>
                            <FormLabel>Income type</FormLabel>
                            <Select
                                cursor="pointer"
                                placeholder="Type of your income."
                                bg="white"
                                required
                            >
                                <option value="option1">Job</option>
                                <option value="option2">Business</option>
                                <option value="option3">Freelance</option>
                                <option value="option3">Part-Time</option>
                            </Select>
                        </FormControl>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default CreateIncomeDrawer;
