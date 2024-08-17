import { Box, Heading, Text, Stack, Img } from '@chakra-ui/react';
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { im, im2, jw } from '../assets';
export default function Api() {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={10}>
            <Heading>Apilar to'plami</Heading>
            <Box fontSize={'20px'}>
                <Text>Global router url: <span style={{ color: 'blue', textDecoration: 'underline' }}>https://full-api.onrender.com</span></Text>
            </Box>
            <Box fontSize={'20px'} display={'flex'} flexDirection={'column'} gap={5}>
                <Box><Text>Foidalanuvchini Ro'yxatga olish</Text></Box>

                <Box>
                    <Accordion allowToggle display={'flex'} flexDirection={'column'} gap={3}>
                        <AccordionItem border={'1px'} borderRadius={'8px'}>
                            <h2>
                                <AccordionButton fontWeight={'bold'}>
                                    <Box as='span' display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems={'center'}>
                                        <Box color={'blue'}> /api/user/new</Box>
                                        <Box color={'orange'} >
                                            POST
                                        </Box>
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box>
                                    <Text>Ushbu rartibda </Text>
                                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink>Body</BreadcrumbLink>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <BreadcrumbLink>Row</BreadcrumbLink>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem isCurrentPage>
                                            <BreadcrumbLink >Json</BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </Breadcrumb>
                                </Box>
                                <br />
                                <Box>
                                    <Text>Kiritiladigan ma'lumotlar</Text>
                                    <Box color={'orange'}>
                                        <Text>firstName - string - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>lastName - string - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>username - string - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>password - string - <span style={{ color: 'red' }}>required</span></Text>
                                    </Box>
                                </Box>
                            </AccordionPanel>


                        </AccordionItem>

                        <AccordionItem border={'1px'} borderRadius={'8px'}>
                            <h2>
                                <AccordionButton fontWeight={'bold'}>
                                    <Box as='span' display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems={'center'}>
                                        <Box color={'blue'}> /api/user/login</Box>
                                        <Box color={'orange'} >
                                            POST
                                        </Box>
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box>
                                    <Text>Ushbu rartibda </Text>
                                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink>Body</BreadcrumbLink>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <BreadcrumbLink>Row</BreadcrumbLink>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem isCurrentPage>
                                            <BreadcrumbLink >Json</BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </Breadcrumb>
                                </Box>
                                <br />
                                <Box>
                                    <Text>Kiritiladigan ma'lumotlar</Text>
                                    <Box color={'orange'}>
                                        <Text>username - string - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>password - string - <span style={{ color: 'red' }}>required</span></Text>
                                    </Box>
                                    <br />
                                    <Box>
                                        <Text>Keladigan ma'lumot</Text>
                                        <Text>Token (JWT): <span style={{color: 'red'}}>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>. <span style={{color: 'pink'}}>eyJ1c2VyIjoiNjZiZjhkZDQ0YTAyOWJiNDNlNDJlNmU0IiwiaWF0IjoxNzIzODk5MDQ4LCJleHAiOjE3MjY0OTEwNDh9</span>. <span style={{color: 'aqua'}}>mRecpV1euFGQS99UD1i1qHmlXLk3pSAc_51mCxjvCho</span></Text>
                                        <br />

                                        <Text>Token localstorage ga saqlanadi</Text>
                                    </Box>
                                </Box>
                            </AccordionPanel>


                        </AccordionItem>

                    </Accordion>
                </Box>
            </Box>

            <Box fontSize={'20px'} display={'flex'} flexDirection={'column'} gap={5}>
                <Box><Text>Slider uchun rasim olish</Text></Box>

                <Box>
                    <Accordion allowToggle display={'flex'} flexDirection={'column'} gap={3}>

                        <AccordionItem border={'1px'} borderRadius={'8px'}>
                            <h2>
                                <AccordionButton fontWeight={'bold'}>
                                    <Box as='span' display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems={'center'}>
                                        <Box color={'blue'}> /api/new-img/get</Box>
                                        <Box color={'GREEN'} >
                                            GET
                                        </Box>
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box>
                                    <Text>So'rov jo'natiladi</Text>
                                </Box>
                                <br />
                                <Box>
                                    <Text>Keladigan ma'lumotlar</Text>
                                    <Box color={'orange'}>
                                        <Img src={im}></Img>
                                    </Box>
                                </Box>
                            </AccordionPanel>


                        </AccordionItem>

                    </Accordion>
                </Box>
            </Box>


            <Box fontSize={'20px'} display={'flex'} flexDirection={'column'} gap={5}>
                <Box><Text>Mahsulot qo'shish va olish</Text></Box>

                <Box>
                    <Accordion allowToggle display={'flex'} flexDirection={'column'} gap={3}>
                        <AccordionItem border={'1px'} borderRadius={'8px'}>
                            <h2>
                                <AccordionButton fontWeight={'bold'}>
                                    <Box as='span' display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems={'center'}>
                                        <Box color={'blue'}> /api/product/create</Box>
                                        <Box color={'orange'} >
                                            POST
                                        </Box>
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box>
                                    <Text>Ushbu rartibda </Text>
                                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink>Body</BreadcrumbLink>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <BreadcrumbLink>Row</BreadcrumbLink>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem isCurrentPage>
                                            <BreadcrumbLink >Json</BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </Breadcrumb>
                                </Box>
                                <br />
                                <Box>
                                    <Text>Kiritiladigan ma'lumotlar</Text>
                                    <Box color={'orange'}>
                                        <Text>name - string - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>url - string - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>info - string - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>seil - number - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>oldPrice - number - <span style={{ color: 'red' }}>required</span></Text>
                                        <Text>newPrice - number - <span style={{ color: 'red' }}>required</span></Text>
                                        <br />
                                        <Text color={'black'}>Token berilishi kerak bo'ladi</Text>
                                        <Img src={jw}></Img>
                                    </Box>
                                </Box>
                            </AccordionPanel>


                        </AccordionItem>

                        <AccordionItem border={'1px'} borderRadius={'8px'}>
                            <h2>
                                <AccordionButton fontWeight={'bold'}>
                                    <Box as='span' display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems={'center'}>
                                        <Box color={'blue'}> /api/product/get</Box>
                                        <Box color={'GREEN'} >
                                            GET
                                        </Box>
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box>
                                    <Text>So'rov jo'natiladi</Text>
                                </Box>
                                <br />
                                <Box>
                                    <Text>Keladigan ma'lumotlar</Text>
                                    <Box color={'orange'}>
                                        <Img src={im2}></Img>
                                    </Box>
                                </Box>
                            </AccordionPanel>


                        </AccordionItem>

                    </Accordion>
                </Box>
            </Box>

        </Box>
    );
}
