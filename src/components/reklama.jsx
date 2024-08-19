import { Box, Button, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { imgBot } from '../assets'

const Reklama = () => {
  return (
    <Box>
        <Box>
            <Heading>Reklama</Heading>
        </Box>

        <Box>
            <Text fontSize={'20px'}>Kino ko'rishga qiziqasizmi?</Text>
        </Box>
        <br />
        <Box>
            <Text fontSize={'20px'}>Unday bo'lsa bu sahifa siz uchun mahsus. Bizni telegram botimizga tashrif buyuring</Text>
        </Box><br />
        <Box>
            <Img h={'500'} src={imgBot}></Img><br />
            <a href="https://t.me/modevco_mov_bot" target='_blank'>
                <Button bg={'blue.300'} _hover={{bg: ''}}width={'44%'}>Botga kirish</Button>
            </a>
        </Box>
    </Box>
  )
}

export default Reklama





