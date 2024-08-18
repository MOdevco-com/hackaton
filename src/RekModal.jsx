import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Img, Text, Button, } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { imgBot } from './assets';

export default function RekModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        setInterval(() => {
            onOpen()
        }, 1200000);
    }, [onOpen])
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Reklama</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Img src={imgBot} ></Img>
                        </Box>
                        <br />
                        <Box>
                            <Text color={'black'} fontSize={'25px'}>Kino ko'rishga qiziqasizmi?</Text>
                        </Box>
                        <Text color={'black'} fontSize={'20px'}>Unday bo'lsa bizning telegeam botimiz siz uchun. Obuna bo'ling </Text><br />
                        <a href="https://t.me/modevco_mov_bot" target='_black'>
                            <Button background={'blue.300'} _hover={{ bg: '' }} width={'100%'}>Telegram bot</Button>
                        </a>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
