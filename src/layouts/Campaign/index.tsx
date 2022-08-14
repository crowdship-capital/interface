import { Trans } from '@lingui/macro';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useEffect, useState, ReactNode } from 'react';
import {
  Box,
  Text,
  Badge,
  Button,
  Heading,
  Progress,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  useStyleConfig,
  Tooltip,
  Container,
} from '@chakra-ui/react';

import {
  DotsThree,
  BookmarkSimple,
  Gift,
  PencilSimpleLine,
  Sword,
  Receipt,
  FacebookLogo,
  TwitterLogo,
  LinkSimple,
} from 'phosphor-react';

import { gun } from '@/lib/gun';

import MainLayout from '@/layouts/Main';

import { Hero } from '@/components/Hero';
import { Gallery } from '@/components/Gallery';
import { AdvancedMenu } from '@/components/AdvancedMenu';

import BusdIcon from '@/public/images/busd.svg';
import UsdtIcon from '@/public/images/usdt.svg';
import PaxIcon from '@/public/images/pax.svg';
import UsdcIcon from '@/public/images/usdc.svg';
import DaiIcon from '@/public/images/dai.svg';

import useCampaignFactoryAddress from '@/hooks/useCampaignFactoryAddress';
import { useCampaignFactory } from '@/hooks/useContracts';
import useMakeUrl from '@/hooks/useMakeUrl';

const CustomTab = (props) => {
  const tabProps = useTab(props);
  const styles = useStyleConfig('Tab');

  return (
    <Link href={props.href} passHref scroll={false}>
      <Box as='a' {...tabProps} sx={styles}>
        {tabProps.children}
      </Box>
    </Link>
  );
};

const CampaignLayout = ({ children }) => {
  const { asPath, query } = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const makeUrl = useMakeUrl();

  const acceptedCurrency = 'BUSD';
  const tabs = [
    {
      label: 'Details',
      badge: null,
      href: 'details',
    },
    {
      label: 'Milestones',
      badge: '30',
      href: 'milestones',
    },
    {
      label: 'Governance',
      badge: '10',
      href: 'governance',
    },
    {
      label: 'Discussions',
      badge: '304',
      href: 'discussions',
    },
    {
      label: 'FAQ',
      badge: '5',
      href: 'faq',
    },
  ];

  const renderTabs = (): ReactNode[] => {
    return tabs.map(({ label, badge, href }, idx) => (
      <CustomTab
        key={label}
        href={makeUrl(
          `/campaign/${query.campaignHash}/${query.campaignSlug}`,
          href
        )}
        padding='20px 30px'
        _selected={{
          borderBottomWidth: '4px',
          borderBottomColor: 'purple.500',
        }}
      >
        <Box display='flex' alignItems='center'>
          <Text mr='3'>{label}</Text>
          {badge && badge.length && (
            <Badge
              bg={tabIndex === idx ? 'purple.500' : 'blackAlpha.200'}
              color={tabIndex === idx ? 'white' : 'black'}
              borderRadius='xl'
              p='0px 10px'
            >
              {badge}
            </Badge>
          )}
        </Box>
      </CustomTab>
    ));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    gun
      .get('campaigns')
      .map()
      .once((data) => {
        if (data) {
          // console.log('data', data);
          // merge data from campaign factory with data from gun
          // campaignProps = { ...data, ...campaignProps };
        }
      });
  }, []);

  useEffect(() => {
    setTabIndex(tabs.findIndex((t) => asPath.includes(t.href)));
  }, []);

  return (
    <MainLayout>
      <Box>
        <Hero
          header={
            <Heading
              lineHeight={1.3}
              w='xl'
              fontWeight={500}
              mb='2'
              fontSize={{ base: '2xl', md: '36px' }}
            >
              The Long Short Story
            </Heading>
          }
          body={
            <Text color={'gray.600'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          }
          bgImage='/images/map-light.svg'
          bgColor='yellow.200'
          bgRepeat='no-repeat'
          bgPosition='530px 88px'
          bgSize='940px'
          style={{
            paddingBottom: '1rem',
          }}
          actions={
            <Box mt='2'>
              <Box
                alignItems='center'
                justifyContent='space-between'
                textAlign='left'
              >
                <Box mb='5' color='green.500'>
                  <Heading fontSize='3xl' fontWeight='500'>
                    $20k
                  </Heading>
                  <Text mb='2'>raised of $30k goal</Text>
                  <Progress
                    value={90}
                    backgroundColor='blackAlpha.100'
                    colorScheme='green'
                    borderRadius='4px'
                    size='sm'
                    w='full'
                  />
                </Box>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box mb='4' color='red.500'>
                    <Heading fontSize='3xl' fontWeight='500'>
                      $250
                    </Heading>
                    <Text>Minimum</Text>
                  </Box>
                  <Box mb='4'>
                    <Heading fontSize='3xl' fontWeight='500'>
                      900
                    </Heading>
                    <Text>Contributors</Text>
                  </Box>
                  <Box mb='4'>
                    <Heading fontSize='3xl' fontWeight='500'>
                      40
                    </Heading>
                    <Text>Days to go</Text>
                  </Box>
                </Box>
              </Box>
              <Box display='flex' mt='10'>
                <Tooltip
                  hasArrow
                  placement='bottom'
                  label={<Trans>{acceptedCurrency} accepted</Trans>}
                  bg='black.500'
                  color='white'
                >
                  <Button
                    leftIcon={<BusdIcon />}
                    w='full'
                    variant='primaryAlt'
                    size='lg'
                  >
                    <Trans>Back Campaign</Trans>
                  </Button>
                </Tooltip>
                <AdvancedMenu
                  items={[
                    {
                      text: <Trans>Manage Campaign</Trans>,
                      icon: <PencilSimpleLine size={20} />,
                    },
                    {
                      text: <Trans>Create Request</Trans>,
                      icon: <Receipt size={20} />,
                    },
                    {
                      text: <Trans>Create Reward</Trans>,
                      icon: <Gift size={20} />,
                      hasDivider: true,
                    },
                    {
                      text: <Trans>Report Campaign</Trans>,
                      icon: <Sword size={20} />,
                    },
                  ]}
                  menuButtonTrigger={
                    <DotsThree
                      size={30}
                      style={{ position: 'absolute' }}
                      color='black'
                    />
                  }
                  menuButtonStyle={{
                    size: 'lg',
                    'aria-label': 'More',
                    borderWidth: '1px',
                    borderColor: 'blackAlpha.100',
                    bg: 'transparent',
                    ml: '3',
                    _hover: {
                      backgroundColor: 'transparent',
                    },
                  }}
                  showOpenIcon={false}
                />
              </Box>
              <Box mt='7' mb='7' alignItems='center'>
                <Button
                  leftIcon={<BookmarkSimple size={20} color='#72167B' />}
                  variant='clear'
                  size='sm'
                  fontWeight='500'
                >
                  <Trans>Save</Trans>
                </Button>
              </Box>
            </Box>
          }
          showBackButton
          backButtonText='Back'
          media={
            <Gallery
              slides={[
                { src: '/images/long-story.jpg' },
                { src: '/images/demo.jpg' },
              ]}
            />
          }
        />

        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList padding='0 115px'>{renderTabs()}</TabList>

          <Container maxW='1240px' paddingTop='10'>
            <TabPanels>
              <TabPanel>{children}</TabPanel>
              <TabPanel>{children}</TabPanel>
              <TabPanel>{children}</TabPanel>
              <TabPanel>{children}</TabPanel>
              <TabPanel>{children}</TabPanel>
            </TabPanels>
          </Container>
        </Tabs>
      </Box>
    </MainLayout>
  );
};

export default CampaignLayout;
