'use client';

import { MonthlyExpenses } from '@/types/expenses';
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
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

const CreateIncomeDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [expenses, setExpenses] = useState<MonthlyExpenses[]>([
        { label: '', value: '' },
    ]);

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
                        <Stack gap="8">
                            {/* JOB INFORMATION */}
                            <Flex gap="4" flexDirection="column">
                                <Flex gap="2" flexDirection="column">
                                    <FormControl>
                                        <FormLabel>Income type</FormLabel>
                                        <Select
                                            cursor="pointer"
                                            placeholder="Type of your income."
                                            bg="white"
                                            required
                                        >
                                            <option value="job">Job</option>
                                            <option value="business">
                                                Business
                                            </option>
                                            <option value="freelance">
                                                Freelance
                                            </option>
                                            <option value="part-time">
                                                Part-Time
                                            </option>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Job Title</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Enter your job title."
                                        />
                                    </FormControl>
                                </Flex>
                                <Flex gap="2">
                                    <FormControl>
                                        <FormLabel>Job Type</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Enter job type."
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Job Location</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Enter job location."
                                        />
                                    </FormControl>
                                </Flex>
                            </Flex>
                            {/* JOB SCHEDULE COST */}
                            <Flex gap="4" flexDirection="column">
                                <Flex gap="2" flexDirection="column">
                                    <FormControl>
                                        <FormLabel>Work Schedule</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Enter your work schedule."
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Travel Cost</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Enter amount."
                                        />
                                    </FormControl>
                                </Flex>
                            </Flex>
                            {/* MONTHLY EXPENSE */}
                            <Flex flexDirection="column" gap="4">
                                <Flex
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <FormLabel margin="0">
                                        Monthly Expense
                                    </FormLabel>
                                    <Button
                                        onClick={() => {
                                            setExpenses((prevExpenses) => [
                                                ...prevExpenses,
                                                { label: '', value: '' },
                                            ]);
                                        }}
                                    >
                                        Add Expenses
                                    </Button>
                                </Flex>
                                <Flex flexDirection="column" gap="4">
                                    {expenses.map((expense, index) => (
                                        <Flex
                                            key={index}
                                            flexDirection={'column'}
                                            gap="2"
                                        >
                                            <FormControl>
                                                <Flex
                                                    gap="2"
                                                    flexDirection="column"
                                                >
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter your expense label."
                                                        value={expense.label}
                                                    />
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter your expense amount."
                                                        value={expense.value}
                                                    />
                                                </Flex>
                                            </FormControl>
                                            <Box alignSelf="flex-end">
                                                <Button
                                                    onClick={() =>
                                                        setExpenses(
                                                            (prevExpenses) =>
                                                                prevExpenses.filter(
                                                                    (
                                                                        prevExpenses,
                                                                        prevExpenseIndex,
                                                                    ) =>
                                                                        prevExpenseIndex !==
                                                                        index,
                                                                ),
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </Button>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Stack>
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
