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
} from '@chakra-ui/react';
import { ReactNode, useRef, useState } from 'react';
import { FormikProps } from 'formik';
import {
    IncomeStream,
    IncomeStreamBusiness,
    IncomeStreamFreelance,
    IncomeStreamJob,
    IncomeTypeEnum,
} from '@/types/create-income';
import JobForm from './form/job-form';

interface CreateIncomeDrawerProps {
    setOptimisticIncomeStreams: (value: IncomeStream) => void;
    insertIncomeStream: (incomeStream: IncomeStream) => void;
    isLoading: boolean;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    incomeStream?: IncomeStream;
    incomeStreamJob?: IncomeStreamJob;
}

const CreateIncomeDrawer = ({
    setOptimisticIncomeStreams,
    insertIncomeStream,
    isLoading,
    isOpen,
    onOpen,
    onClose,
    incomeStream,
    incomeStreamJob,
}: CreateIncomeDrawerProps) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [incomeType, setIncomeType] = useState<IncomeTypeEnum>(
        IncomeTypeEnum.JOB,
    );
    const jobFormRef =
        useRef<FormikProps<IncomeStream & IncomeStreamJob>>(null);
    const businessFormRef =
        useRef<FormikProps<IncomeStream & IncomeStreamBusiness>>(null);
    const freelanceFormRef =
        useRef<FormikProps<IncomeStream & IncomeStreamFreelance>>(null);

    const handleSubmit = async (incomeStream: IncomeStream) => {
        console.log(incomeStream);
        setOptimisticIncomeStreams({
            type: incomeStream.type,
            monthly_expenses: incomeStream.monthly_expenses,
        });
        insertIncomeStream({
            type: incomeStream.type,
            monthly_expenses: incomeStream.monthly_expenses,
        });
    };

    const handleSave = () => {
        switch (incomeType) {
            case IncomeTypeEnum.JOB:
                jobFormRef.current?.submitForm();
                break;
            case IncomeTypeEnum.BUSINESS:
                businessFormRef.current?.submitForm();
                break;
            case IncomeTypeEnum.FREELANCE:
                freelanceFormRef.current?.submitForm();
                break;
        }
    };

    const incomeTypeComponent: Record<string, ReactNode> = {
        [IncomeTypeEnum.JOB]: (
            <JobForm
                handleSubmit={handleSubmit}
                setIncomeType={setIncomeType}
                incomeStream={incomeStream}
                incomeStreamJob={incomeStreamJob}
                formikRef={jobFormRef}
            />
        ),
        // [IncomeTypeEnum.BUSINESS]: (
        //     <BusinessForm
        //         handleSubmit={handleSubmit}
        //         setIncomeType={setIncomeType}
        //     />
        // ),
        // [IncomeTypeEnum.FREELANCE]: (
        //     <FreelanceForm
        //         handleSubmit={handleSubmit}
        //         setIncomeType={setIncomeType}
        //     />
        // ),
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

                    <DrawerBody>{incomeTypeComponent[incomeType]}</DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={handleSave}
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
