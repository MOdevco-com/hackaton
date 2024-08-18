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
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Komanda nomi</Th>
                <Th>into</Th>
                <Th>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
