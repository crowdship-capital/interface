import { FC } from 'react';
import { Trans } from '@lingui/macro';
import CampaignLayout from '@/layouts/Campaign';
import { Box, Button, Text, HStack, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CaretLeft, X, Check } from 'phosphor-react';

import { RequestHeader } from '@/components/RequestCard';
import Card from '@/components/Card';
import { AdvancedList } from '@/components/AdvancedList';

interface IVoteList {
  title: string;
  voteCount: number;
  recentVotes: [{ address: string; dateAdded: string }];
}
const VoteList: FC<IVoteList> = ({ title, voteCount, recentVotes }) => {
  return (
    <Card>
      <Box display='flex' alignItems='center'>
        <Text fontSize='xl' fontWeight='500' mb='2'>
          {title}
        </Text>
      </Box>
      <AdvancedList
        items={[{ title: 'User', subtitle: '2020-18-20', logo: <></> }]}
        showFirst={5}
      />
    </Card>
  );
};

const Request = () => {
  const router = useRouter();

  return (
    <Box>
      <Box>
        <Button
          cursor='pointer'
          alignItems='center'
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          marginBottom='.2rem'
          padding='0'
          background='transparent'
          _active={{
            background: 'transparent',
          }}
          _hover={{
            background: 'transparent',
            color: 'black',
          }}
          color='blackAlpha.500'
        >
          <CaretLeft size={15} />
          <Text fontSize='sm' fontWeight='500'>
            <Trans>Back to requests</Trans>
          </Text>
        </Button>
        <Box mb='5'>
          <RequestHeader
            id='1'
            title='Improve quality of kayake gear'
            approval='pending'
            endDate='2024-08-24'
            requestAmount='$100,000'
            hideProgress={true}
            hideNavigation={true}
            tags={[{ text: 'concept', color: 'blue.300' }]}
          />
        </Box>
        <Box mb='5'>
          <Box display='flex' alignItems='center' justifyContent='right'>
            <HStack spacing='24px' w='lg'>
              <Button leftIcon={<Check />} size='md' variant='success' w='full'>
                <Trans>For</Trans>
              </Button>
              <Button
                leftIcon={<X />}
                size='md'
                variant='danger-outlined'
                w='full'
              >
                <Trans>Against</Trans>
              </Button>
            </HStack>
          </Box>
        </Box>
        <VStack w='full' alignItems='normal' spacing='20px'>
          <HStack spacing='20px'>
            <VoteList
              title='For'
              voteCount={1300000}
              recentVotes={[{ address: '', dateAdded: '' }]}
            />
            <VoteList
              title='Against'
              voteCount={300000}
              recentVotes={[{ address: '', dateAdded: '' }]}
            />
          </HStack>
          <HStack spacing='20px' alignItems='baseline'>
            <VStack w='full' spacing='20px'>
              <Card>
                <Text fontSize='lg' fontWeight='500' mb='30px'>
                  <Trans>Description</Trans>
                </Text>
                <Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). <br /> <br /> It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). <br />{' '}
                  <br /> It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </Text>
              </Card>
              <Card>
                <Text fontSize='lg' fontWeight='500' mb='30px'>
                  <Trans>Summary</Trans>
                </Text>
                <Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </Text>
              </Card>
            </VStack>
            <VStack w='xl' spacing='20px'>
              <Card>
                <Text fontSize='lg' fontWeight='500'>
                  <Trans>Request history</Trans>
                </Text>
                <Text></Text>
              </Card>
              <Card>
                <Text fontSize='lg' fontWeight='500'>
                  <Trans>Request creator</Trans>
                </Text>
              </Card>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

Request.PageLayout = CampaignLayout;

export default Request;
