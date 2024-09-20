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
    Heading,
    useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import CreateIncomeForm from './create-income-form';
import { FormikProps } from 'formik';
import { CreateIncome } from '@/types/create-income-form-type';

const CreateIncomeDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const btnRef = useRef<HTMLButtonElement>(null);

    const formikRef = useRef<FormikProps<CreateIncome>>(null);

    const handleSubmit = async () => {
        if (formikRef.current) {
            formikRef.current.handleSubmit();
        }
    };

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
                        <CreateIncomeForm formikRef={formikRef} />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Save
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default CreateIncomeDrawer;
