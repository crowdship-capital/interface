import { FC } from 'react';
import moment from 'moment';
import { Trans, t } from '@lingui/macro';
import { formatNumber } from 'accounting';
import CampaignLayout from '@/layouts/Campaign';
import {
  Box,
  Button,
  Text,
  HStack,
  VStack,
  Progress,
  Divider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  CaretLeft,
  X,
  XCircle,
  Check,
  CheckCircle,
  SpinnerGap,
} from 'phosphor-react';
import Avatar from 'boring-avatars';

import { RequestHeader } from '@/components/RequestCard';
import Card from '@/components/Card';
import { AdvancedList, IAdvancedListItem } from '@/components/AdvancedList';
import { Timeline } from '@/components/Timeline';

import AVATAR_COLORS from '@/constants/avatar-colors';
import { generateSlicedAddress } from '@/utils/address';

interface IVoteList {
  title: string;
  voteCount: number;
  voters: IAdvancedListItem[];
  progress: number;
  variant: 'success' | 'danger';
  theme: string;
}

const VoteList: FC<IVoteList> = ({
  title,
  voteCount,
  voters,
  progress,
  variant,
  theme,
}) => {
  return (
    <Card p='0' bg={theme}>
      <Box
        display='flex'
        alignItems='center'
        p='5'
        justifyContent='space-between'
      >
        <Text fontSize='lg' fontWeight='500' mb='2'>
          {title}
        </Text>
        <Box>
          <Text fontSize='lg' fontWeight='500' mb='2'>
            {voteCount} <Trans>Votes</Trans>
          </Text>
          <Progress value={progress} variant={variant} size='sm' />
        </Box>
      </Box>
      <AdvancedList items={voters} showFirst={5} />
    </Card>
  );
};

const Section = ({ children, title }) => {
  return (
    <Card p='0'>
      <Text fontSize='lg' fontWeight='500' p='5'>
        {title}
      </Text>
      <Divider />
      {children}
    </Card>
  );
};

const VOTERS = Array.from({ length: 10 }, (_, i) => ({
  title: generateSlicedAddress('0x0000000000000000000000000000000000000000'),
  subtitle: t`Voted ${moment().fromNow()}`,
  logo: (
    <Avatar
      size={40}
      name='0x0000000000000000000000000000000000000000'
      variant='marble'
      colors={AVATAR_COLORS}
    />
  ),
}));

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
              title={t`For`}
              voteCount={formatNumber(1300000)}
              voters={VOTERS}
              progress={70}
              variant='success'
              theme='green.100'
            />
            <VoteList
              title={t`Against`}
              voteCount={formatNumber(300000)}
              voters={VOTERS}
              progress={30}
              variant='danger'
              theme='red.100'
            />
          </HStack>
          <HStack spacing='20px' alignItems='baseline'>
            <VStack w='full' spacing='20px'>
              <Section title={t`Description`}>
                <Text p='5'>
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
              </Section>
              <Section title={t`Summary`}>
                <Text p='5'>
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
              </Section>
            </VStack>
            <VStack w='xl' spacing='20px'>
              <Section title={t`Request history`}>
                <Box p='5'>
                  <Timeline
                    timelines={[
                      {
                        logo: (
                          <CheckCircle
                            size={25}
                            color='#48BB78'
                            weight='bold'
                          />
                        ),
                        title: t`Created`,
                        date: moment().fromNow(),
                      },
                      {
                        logo: <SpinnerGap size={25} weight='bold' />,
                        title: t`Active`,
                        date: moment().fromNow(),
                      },
                      {
                        logo: (
                          <XCircle size={25} color='#F56565' weight='bold' />
                        ),
                        title: t`Failed`,
                        date: moment().fromNow(),
                      },
                      {
                        logo: (
                          <CheckCircle
                            size={25}
                            color='#48BB78'
                            weight='bold'
                          />
                        ),
                        title: t`Success`,
                        date: moment().fromNow(),
                      },
                    ]}
                  />
                </Box>
              </Section>
              <Section title={t`Request Creator`}>
                <AdvancedList
                  items={[
                    {
                      title: generateSlicedAddress(
                        '0x0000000000000000000000000000000000000000'
                      ),
                      subtitle: t`Created ${moment().fromNow()}`,
                      logo: (
                        <Avatar
                          size={40}
                          name='0x0000000000000000000000000000000000000000'
                          variant='marble'
                          colors={AVATAR_COLORS}
                        />
                      ),
                    },
                  ]}
                  showMore={false}
                />
              </Section>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

Request.PageLayout = CampaignLayout;

export default Request;
