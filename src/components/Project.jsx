import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { img } from '../assets';

export default function Project() {
    return (
        <Box px="20px" display='flex' gap={'30px'} alignItems='flex-start' justifyContent='flex-start' flexDirection={'column'}>
            <Heading>Jamolar uchun loyiha</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px">
                <Card maxW="350px" boxShadow="xl" borderRadius="lg" overflow="hidden">
                    <CardBody>
                        <Image
                            src={img}
                            alt="Green double couch with wooden legs"
                            borderRadius="md"
                            mb="4"
                        />
                        <Stack spacing="3">
                            <Heading size="md">Versta</Heading>
                            <Text>
                                Ushbu figma faqat verstka qiladiganlar uchun mahsus tayyorlangan.
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <a target='_blank' href="https://www.figma.com/design/K7KtFLrs2mWvbtshRcWRXc/G8-(Copy)?node-id=0-5194&t=TmIHZ84WocOgzdGf-0">
                            <Button variant="solid" colorScheme="teal" width="full">
                                Kirish
                            </Button>

                        </a>
                    </CardFooter>
                </Card>

                <Card maxW="350px" boxShadow="xl" borderRadius="lg" overflow="hidden">
                    <CardBody>
                        <Image
                            src={img}
                            alt="Green double couch with wooden legs"
                            borderRadius="md"
                            mb="4"
                        />
                        <Stack spacing="3">
                            <Heading size="md">Api Full</Heading>
                            <Text>
                                Ushbu figma faqat api bilan va ui holatlarini ishlash uchun tayyorlanadi.
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <a target='_black' href="https://www.figma.com/design/mwakNEdmGZQW83DnaZPGWj/%D1%85%D0%BE%D0%B7-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B?node-id=163-2&t=QkWmL0crMxFUhLwP-0">
                            <Button variant="solid" colorScheme="teal" width="100%">
                                Kirish
                            </Button>
                        </a>

                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    );
}
