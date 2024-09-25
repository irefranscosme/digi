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
import {
    CreateIncome,
    IncomeStream,
    IncomeStreamBusiness,
    IncomeStreamFreelance,
    IncomeStreamJob,
} from '@/types/create-income';

interface CreateIncomeDrawerProps {
    setOptimisticIncomeStreams: (value: IncomeStream) => void;
    insertIncomeStream: (incomeStream: IncomeStream) => void;
    isLoading: boolean;
}

const CreateIncomeDrawer = ({
    setOptimisticIncomeStreams,
    insertIncomeStream,
    isLoading,
}: CreateIncomeDrawerProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const btnRef = useRef<HTMLButtonElement>(null);
    const formikRef =
        useRef<
            FormikProps<
                CreateIncome<
                    | IncomeStreamJob
                    | IncomeStreamBusiness
                    | IncomeStreamFreelance
                >
            >
        >(null);

    const handleSubmit = async () => {
        if (formikRef.current) {
            formikRef.current.handleSubmit();
        }
    };

    return (
        <>
            <Box mt="2">
                <Button ref={btnRef} onClick={onOpen} colorScheme="blue">
                    Create Main Income
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
                        <CreateIncomeForm
                            formikRef={formikRef}
                            setOptimisticIncomeStreams={
                                setOptimisticIncomeStreams
                            }
                            insertIncomeStream={insertIncomeStream}
                        />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={handleSubmit}
                            type="submit"
                            isLoading={isLoading}
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
