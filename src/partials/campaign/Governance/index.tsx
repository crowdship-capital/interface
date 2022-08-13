import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  MenuButton,
  Menu,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Center,
  Select,
} from '@chakra-ui/react';

import {
  Activity,
  CurrencyDollar,
  Handshake,
  MagnifyingGlass,
} from 'phosphor-react';

import { Statistic } from '@/components/Statistic';
import { Pagination } from '@/components/Pagination';
import { RequestCard } from '@/components/RequestCard';

const requests = [
  {
    id: '1',
    title: 'Improve quality of kayake gear',
    approval: 'pending',
    endDate: '2024-08-24',
    approvalCount: 80,
    requestAmount: '$100,000',
  },
  {
    id: '2',
    title: 'Improve quality of kayake gear',
    approval: 'approved',
    endDate: '2020-01-01',
    approvalCount: 1200,
    requestAmount: '$12,000',
  },
  {
    id: '3',
    title: 'Improve quality of kayake gear',
    approval: 'failed',
    endDate: '2020-01-01',
    approvalCount: 200,
    requestAmount: '$19,000',
  },
  {
    id: '4',
    title: 'Improve quality of kayake gear',
    approval: '',
    endDate: '2020-01-01',
    approvalCount: 5403,
    requestAmount: '$10,000',
  },
  {
    id: '5',
    title: 'Improve quality of kayake gear',
    approval: 'approved',
    endDate: '2020-01-01',
    approvalCount: 2397,
    requestAmount: '$40,000',
  },
  {
    id: '6',
    title: 'Improve quality of kayake gear',
    approval: 'approved',
    endDate: '2020-01-01',
    approvalCount: 2397,
    requestAmount: '$1,000',
  },
];

export const Governance = () => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      mb='4'
    >
      <Box w='full'>
        <Box mb='10'>
          <Heading fontSize='xl' fontWeight='500' mb='5'>
            Overview
          </Heading>
          <Box display='flex' alignItems='center'>
            <Statistic
              title='Requests Created'
              value='2,540'
              prefix={<Activity size={25} />}
              mr='5'
            />
            <Statistic
              title='Successful Requests'
              value='750'
              prefix={<Handshake size={25} />}
              mr='5'
            />
            <Statistic
              title='Total Amount'
              value='350,000'
              prefix={<CurrencyDollar size={25} />}
            />
          </Box>
        </Box>
        <Box>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            mb='5'
          >
            <Heading fontSize='xl' fontWeight='500' mb='5'>
              Requests
            </Heading>
            <Box display='flex' alignItems='center'>
              <InputGroup m='4'>
                <InputLeftElement
                  pointerEvents='none'
                  children={<MagnifyingGlass size={20} />}
                />
                <Input
                  variant='outlineAlt'
                  type='search'
                  placeholder='Search'
                  _placeholder={{ color: 'gray.500' }}
                />
              </InputGroup>
              <Menu closeOnSelect={false} placement='bottom-end'>
                <MenuButton as={Button} variant='clear' fontWeight='500'>
                  <Center>Filter</Center>
                </MenuButton>
                <MenuList minWidth='240px' shadow='xl' border='none'>
                  <MenuOptionGroup
                    defaultValue='asc'
                    title='Amount'
                    type='radio'
                  >
                    <MenuItemOption value='asc'>Ascending</MenuItemOption>
                    <MenuItemOption value='desc'>Descending</MenuItemOption>
                  </MenuOptionGroup>
                  <MenuDivider borderColor='blackAlpha.100' />
                  <MenuOptionGroup title='Status' type='checkbox'>
                    <MenuItemOption value='pending'>Pending</MenuItemOption>
                    <MenuItemOption value='approved'>Approved</MenuItemOption>
                    <MenuItemOption value='failed'>Failed</MenuItemOption>
                    <MenuItemOption value='indecisive'>
                      Indecisive
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Box>
            <Box mb='10'>
              {requests.map((request) => (
                <RequestCard key={request.id} {...request} />
              ))}
            </Box>
            <Pagination />
          </Box>
        </Box>
      </Box>
      <Box paddingLeft='20'>
        <Box
          borderWidth='1px'
          borderColor='blackAlpha.100'
          p='5'
          borderRadius='md'
        >
          <Text mb='5'>
            CDS tokens represent voting shares in Crowdship governance. You can
            vote <br /> on each request yourself.
          </Text>
          <Button variant='primaryAlt'>Create Request</Button>
        </Box>
      </Box>
    </Box>
  );
};
