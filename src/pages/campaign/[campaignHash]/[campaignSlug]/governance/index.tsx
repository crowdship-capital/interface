import React from 'react';
import { useRouter } from 'next/router';
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
  HStack,
  VStack
} from '@chakra-ui/react';
import {
  Activity,
  CurrencyDollar,
  Handshake,
  MagnifyingGlass,
  Funnel
} from 'phosphor-react';

import CampaignLayout from '@/layouts/Campaign';

import useMakeUrl from '@/hooks/useMakeUrl';

import { Statistic } from '@/components/Statistic';
import { Pagination } from '@/components/Pagination';
import { RequestCard } from '@/components/RequestCard';
import { Card } from '@/components/Card';

const requests = [
  {
    id: '1',
    title: 'Improve quality of kayake gear',
    approval: 'pending',
    endDate: '2024-08-24',
    approvalCount: 80,
    requestAmount: '$100,000'
  },
  {
    id: '2',
    title: 'Improve quality of kayake gear',
    approval: 'approved',
    endDate: '2020-01-01',
    approvalCount: 1200,
    requestAmount: '$12,000'
  },
  {
    id: '3',
    title: 'Improve quality of kayake gear',
    approval: 'failed',
    endDate: '2020-01-01',
    approvalCount: 200,
    requestAmount: '$19,000'
  },
  {
    id: '4',
    title: 'Improve quality of kayake gear',
    approval: 'indecisive',
    endDate: '2020-01-01',
    approvalCount: 5403,
    requestAmount: '$10,000'
  },
  {
    id: '5',
    title: 'Improve quality of kayake gear',
    approval: 'approved',
    endDate: '2020-01-01',
    approvalCount: 2397,
    requestAmount: '$40,000'
  },
  {
    id: '6',
    title: 'Improve quality of kayake gear',
    approval: 'approved',
    endDate: '2020-01-01',
    approvalCount: 2397,
    requestAmount: '$1,000'
  }
];

const Governance = () => {
  const { asPath } = useRouter();
  const makeUrl = useMakeUrl();

  return (
    <HStack
      alignItems="normal"
      spacing={{ base: '0px', xl: '50px' }}
      flexWrap={{ base: 'wrap', xl: 'nowrap' }}
    >
      <Box w={{ base: '100%', xl: '70%' }}>
        <Box mb="10">
          <Heading fontSize="xl" fontWeight="500" mb="5">
            Overview
          </Heading>
          <HStack spacing="15px">
            <Statistic
              title="Requests Created"
              value="2,540"
              prefix={<Activity size={25} />}
            />
            <Statistic
              title="Successful Requests"
              value="750"
              prefix={<Handshake size={25} />}
            />
            <Statistic
              title="Total Amount"
              value="350,000"
              prefix={<CurrencyDollar size={25} />}
            />
          </HStack>
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="5"
          >
            <Heading fontSize="xl" fontWeight="500" mb="5">
              Requests
            </Heading>
            <Box display="flex" alignItems="center">
              <InputGroup m="4">
                <InputLeftElement pointerEvents="none">
                <MagnifyingGlass size={20} />
                </InputLeftElement>
                <Input
                  variant="outlineAlt"
                  type="search"
                  placeholder="Search"
                  _placeholder={{ color: 'gray.500' }}
                />
              </InputGroup>
              <Menu closeOnSelect={false} placement="bottom-end">
                <MenuButton as={Button} variant="clear" fontWeight="500">
                  <Center>
                    <Funnel size={45} />
                    <Text as="span" ml="1">
                      Filter
                    </Text>
                  </Center>
                </MenuButton>
                <MenuList minWidth="240px" shadow="xl" border="none">
                  <MenuOptionGroup
                    defaultValue="asc"
                    title="Amount"
                    type="radio"
                  >
                    <MenuItemOption value="asc">Ascending</MenuItemOption>
                    <MenuItemOption value="desc">Descending</MenuItemOption>
                  </MenuOptionGroup>
                  <MenuDivider borderColor="blackAlpha.100" />
                  <MenuOptionGroup title="Status" type="checkbox">
                    <MenuItemOption value="pending">Pending</MenuItemOption>
                    <MenuItemOption value="approved">Approved</MenuItemOption>
                    <MenuItemOption value="failed">Failed</MenuItemOption>
                    <MenuItemOption value="indecisive">
                      Indecisive
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Box>
            <VStack spacing="20px" w="full" mb="10">
              {requests.map(request => (
                <RequestCard
                  key={request.id}
                  id={request.id}
                  title={request.title}
                  approval={request.approval}
                  endDate={request.endDate}
                  approvalCount={request.approvalCount}
                  requestAmount={request.requestAmount}
                  href={makeUrl(asPath, `request/${request.id}`)}
                />
              ))}
            </VStack>
            <Pagination />
          </Box>
        </Box>
      </Box>
      <Box w={{ base: '100%', xl: '30%' }}>
        <Card>
          <Text mb="5">
            CDS tokens represent voting shares in Crowdship governance. You can
            vote <br /> on each request yourself.
          </Text>
          <Button variant="primaryAlt">Create Request</Button>
        </Card>
      </Box>
    </HStack>
  );
};

Governance.PageLayout = CampaignLayout;

export default Governance;
