import { Badge, Box, Text, VStack, HStack, Divider, Heading, OrderedList, ListItem } from '@chakra-ui/react';
import React from 'react';
import ScoreCard from './scoreCard';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
export default function Score() {
  return (
    <Box>
      <Box>
        <Heading>Ballar sxemasi</Heading>
      </Box>

      <Box boxShadow='2xl' mt={10}>
        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' fontSize={'30px'} display={'flex'} justifyContent={'space-between'}>
                    <span>Verstka uchun ballar</span>
                    <span>80 Sxemada</span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList fontSize={'20px'}>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>O'xshashlik</span><Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>20 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Contanier</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>10 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Sementiks</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>10 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Ranglar</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Media</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>15 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Hover&Active</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Komentlar</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Github&Netlify</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>10 Ball</Badge>
                    </Box>
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </Box>
        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' fontSize={'30px'} display={'flex'} justifyContent={'space-between'}>
                    <span>Fullstack uchun ballar</span>
                    <span>110 Sxemada</span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList fontSize={'20px'}>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>O'xshashlik</span><Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>20 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Contanier</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>10 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Sementiks</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>10 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Ranglar</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Media</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>15 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Hover&Active</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Komentlar</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Github&Netlify</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>10 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Api to'liq holda</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>15 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Api metodlar to'liq holda</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Validatsiya</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      <span>Loading</span>
                      <Badge width={'100px'} textAlign={'center'} fontSize={'18px'} colorScheme='green'>5 Ball</Badge>
                    </Box>
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </Box>

      </Box>

    </Box>
  );
}
