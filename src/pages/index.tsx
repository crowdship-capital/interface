import { Trans } from '@lingui/macro';
import type { NextPage } from 'next';
import { ReactNode } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Container,
  SimpleGrid,
  Box,
  Flex,
  Text,
  Heading,
  Spacer,
  Center
} from '@chakra-ui/react';
import {
  DribbbleLogo,
  Cpu,
  Bank,
  Heartbeat,
  Tree,
  AirplaneTilt
} from 'phosphor-react';
import { SearchIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { Hero } from '@/components/Hero';
import { CampaignCard } from '@/components/CampaignCard';

import MainLayout from '@/layouts/Main';

type FeatureCardProps = {
  heading?: ReactNode;
  body?: ReactNode;
  image?: ReactNode;
  overflow?: string;
};

const FeatureCard = ({
  heading,
  body,
  image,
  overflow,
  ...rest
}: FeatureCardProps) => (
  <Box
    {...rest}
    display="flex"
    alignItems="center"
    bg="purple.100"
    height="119px"
    borderRadius="2xl"
    overflow={overflow}
  >
    {image}
    <Box w="xs" ml={3}>
      {heading}
      {body}
    </Box>
  </Box>
);

const CtaContent = [
  {
    heading: () => (
      <Heading fontSize="lg" lineHeight={1.4}>
        <Trans>No bullsh*t support for your favorite projects</Trans>
      </Heading>
    ),
    body: () => (
      <Text color="gray.500" fontSize="16px" mt="1.5">
        <Trans>Find out how</Trans>
      </Text>
    ),
    image: () => (
      <Box mt="55">
        <Image
          src="/images/flag.svg"
          alt="ownership illustration"
          width="101"
          height="76"
        />
      </Box>
    ),
    overflow: 'hidden'
  },
  {
    heading: () => (
      <Heading fontSize="lg" lineHeight={1.4}>
        <Trans>Get your projects funded the crypto way. No BS</Trans>
      </Heading>
    ),
    body: () => (
      <Text color="gray.500" mt="1.5">
        <Trans>Find out how</Trans>
      </Text>
    ),
    image: () => (
      <Box mt="-50">
        <Image
          src="/images/torch.svg"
          alt="ownership illustration"
          width="71"
          height="156"
        />
      </Box>
    ),
    overflow: 'visible'
  }
];

const SectionHeader = ({
  heading,
  subheading,
  action
}: {
  heading: string;
  subheading?: string;
  action?: ReactNode;
}) => (
  <Flex mt={51} alignItems="center">
    <Box>
      <Heading fontSize="3xl">{heading}</Heading>
      <Text color="gray.500" mt={1.5}>
        {subheading}
      </Text>
    </Box>
    <Spacer />
    {action}
  </Flex>
);

const categoriesData = [
  {
    categoryTitle: 'Tech',
    categoryPath: '#',
    icon: <Cpu weight="duotone" size={40} />
  },
  {
    categoryTitle: 'Sports',
    categoryPath: '#',
    icon: <DribbbleLogo weight="duotone" size={40} />
  },
  {
    categoryTitle: 'Finance',
    categoryPath: '#',
    icon: <Bank weight="duotone" size={40} />
  },
  {
    categoryTitle: 'Health',
    categoryPath: '#',
    icon: <Heartbeat weight="duotone" size={40} />
  },
  {
    categoryTitle: 'Agriculture',
    categoryPath: '#',
    icon: <Tree weight="duotone" size={40} />
  },
  {
    categoryTitle: 'Travel',
    categoryPath: '#',
    icon: <AirplaneTilt weight="duotone" size={40} />
  }
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Crowdship</title>
        <meta name="description" content="" />
      </Head>
      <Hero
        header={
          <Heading
            lineHeight={1.3}
            w="xl"
            fontWeight={500}
            mb="2"
            fontSize={{ base: '2xl', md: '36px' }}
          >
            <Trans>Your favourite projects, backed by crypto!</Trans>
          </Heading>
        }
        body={
          <Text>
            <Trans>Over 300 crew members joined today</Trans>
          </Text>
        }
        height="400px"
        bgImage="/images/map-light.svg"
        bgColor="yellow.200"
        bgRepeat="no-repeat"
        bgPosition="530px 88px"
        bgSize="940px"
        actions={
          <>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.600" />
              </InputLeftElement>
              <Input
                id="search"
                variant="outlineAlt"
                size="md"
                cursor="pointer"
                disabled
                _placeholder={{ color: 'gray.500' }}
                placeholder="Find campaigns"
              />
            </InputGroup>
          </>
        }
      />
      <Container maxW="1240px" mt={10}>
        <Box as="section">
          <SimpleGrid columns={[null, 1, 2]} spacing={10}>
            {CtaContent.map(({ heading, body, image, overflow }, idx) => {
              return (
                <FeatureCard
                  key={idx}
                  heading={heading()}
                  body={body()}
                  image={image()}
                  overflow={overflow}
                />
              );
            })}
          </SimpleGrid>
        </Box>
        <Box as="section">
          <SectionHeader
            heading="High velocity campaigns"
            subheading="Up to 20% per hour"
            action={
              <Text display="flex" alignItems="center" as="a" href="#">
                <Trans>See all</Trans>
                <ChevronRightIcon h={4} w={4} />
              </Text>
            }
          />
          <Box mt={37}>
            <CampaignCard
              special
              heading="Silly folks"
              body="These fools are trying to raise funds to build their own water craft, you can support their foolishness"
              image="/images/demo.jpg"
              category="sports"
              raised="10"
              target="15"
              badge="highest velocity"
            />
          </Box>
        </Box>
        <Box as="section" mt={55}>
          <SectionHeader
            heading="Outliers"
            subheading="Folks doing crazy things"
            action={
              <Text display="flex" alignItems="center" as="a" href="#">
                <span>
                  <Trans>See all</Trans>
                </span>
                <ChevronRightIcon h={4} w={4} />
              </Text>
            }
          />
          <Box mt={37}>
            <CampaignCard
              heading="Kayaking team"
              body="These fools are trying to raise funds to build their own water craft, you can support their foolishness"
              image="/images/demo.jpg"
              category="sports"
              raised="10"
              target="15"
              badge="highest velocity"
            />
          </Box>
        </Box>
        <Box as="section" mt={70}>
          <Center>
            <SectionHeader heading="Categories" />
          </Center>
          <SimpleGrid
            columns={[2, 3, categoriesData.length]}
            spacing="50px"
            mt={10}
          >
            {categoriesData.map(
              ({ categoryTitle, categoryPath, icon }, idx) => (
                <Box
                  key={idx}
                  as="a"
                  href={categoryPath}
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Center
                    bg="yellow.400"
                    height="70px"
                    width="70px"
                    borderRadius="2xl"
                  >
                    {icon}
                  </Center>
                  <Text mt={3} fontFamily="DM mono" fontWeight="500">
                    {categoryTitle}
                  </Text>
                </Box>
              )
            )}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

Home.PageLayout = MainLayout;

export default Home;
