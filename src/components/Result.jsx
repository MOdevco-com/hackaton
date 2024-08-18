import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function Result() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={10}>
      <Box>
        <Heading>Natijalar</Heading>
      </Box>


      <Box>
        <Text>Verstka uchun</Text><br />
        <TableContainer>
          <Table size='sm' >
            <Tr>
              <Th>Komanda nomi</Th>
              <Th>O'xshashlik</Th>
              <Th>Contanier</Th>
              <Th>Sementiks</Th>
              <Th>Ranglar</Th>
              <Th>Media</Th>
              <Th>Hover&Active</Th>
              <Th>Komentlar</Th>
              <Th>Github&Netlify</Th>
              <Th>Jami ball</Th>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Text>Api loyiha uchun</Text><br />
        <TableContainer>
          <Table size='sm' >
            <Tr>
              <Th>Komanda nomi</Th>
              <Th>O'xshashlik</Th>
              <Th>Contanier</Th>
              <Th>Sementiks</Th>
              <Th>Ranglar</Th>
              <Th>Media</Th>
              <Th>Hover&Active</Th>
              <Th>Komentlar</Th>
              <Th>Github&Netlify</Th>
              <Th>Api to'liq holda</Th>
              <Th>Api metodlar to'liq holda</Th>
              <Th>Validatsiya</Th>
              <Th>Loading</Th>
              <Th>Jami ball</Th>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
