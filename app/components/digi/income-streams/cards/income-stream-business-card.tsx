import { IncomeStreamBusiness } from '@/types/create-income';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import React from 'react';

const IncomeStreamBusinessCard = ({
    income,
}: {
    income: IncomeStreamBusiness;
}) => {
    return (
        <Card overflow="clip" height={'100%'}>
            <CardHeader>
                <Heading size="md">
                    {income.business_name || 'N/A'} {' - '}
                    <Text display={'inline-block'} textTransform={'capitalize'}>
                        {income.type}
                    </Text>
                </Heading>
            </CardHeader>

            <CardBody overflow="hidden">
                <Flex justifyContent="space-between" height="100%">
                    <Grid
                        gap="2"
                        templateColumns={[
                            'repeat(1, 1fr)',
                            'repeat(1, 1fr)',
                            'repeat(1, 1fr)',
                            'repeat(1, 1fr)',
                        ]}
                        maxWidth="sm"
                        gridTemplateRows={'auto 1fr auto'}
                    >
                        <GridItem>
                            <Heading
                                fontSize="1em"
                                lineHeight="1.272"
                                letterSpacing="-0.014em"
                                color="gray.400"
                                fontWeight="medium"
                            >
                                Sector
                            </Heading>
                            <Text
                                fontSize="1em"
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                            >
                                {income.sector || 'N/A'}
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Heading
                                fontSize="1em"
                                lineHeight="1.272"
                                letterSpacing="-0.014em"
                                color="gray.400"
                                fontWeight="medium"
                            >
                                Services/Products Offered
                            </Heading>
                            <Text
                                fontSize="1em"
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                            >
                                {income.service_offered || 'N/A'}
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Heading
                                fontSize="1em"
                                lineHeight="1.272"
                                letterSpacing="-0.014em"
                                color="gray.400"
                                fontWeight="medium"
                            >
                                Target Audience
                            </Heading>
                            <Text
                                fontSize="1em"
                                lineHeight="1.618"
                                letterSpacing="-0.011em"
                            >
                                {income.target_audience || 'N/A'}
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Button flexGrow={1}>View</Button>
                        </GridItem>
                    </Grid>
                    <Box
                        borderRadius="0.4em"
                        position="absolute"
                        width="15em"
                        right="0"
                        top="8em"
                    >
                        <Image
                            src="assets/backgrounds/suitcase.png"
                            alt="suitcase.png"
                            width="15em"
                            sx={{ position: 'absolute', right: 0, top: '2em' }}
                        />
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default IncomeStreamBusinessCard;
