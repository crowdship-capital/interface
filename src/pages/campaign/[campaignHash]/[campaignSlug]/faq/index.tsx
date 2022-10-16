import React, { ReactNode } from 'react';
import { Trans } from '@lingui/macro';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Button,
  HStack
} from '@chakra-ui/react';

import { Card } from '@/components/Card';
import CampaignLayout from '@/layouts/Campaign';

const faqs = [
  {
    question: 'What is a Crowdsale?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'How do I create a Crowdsale?',
    answer:
      'You can create a Crowdsale by clicking the "Create Campaign" button on the left side of the page.'
  },
  {
    question: 'How do I edit a Crowdsale?',
    answer:
      'You can edit a Crowdsale by clicking the "Edit Campaign" button on the left side of the page.'
  },
  {
    question: 'How do I delete a Crowdsale?',
    answer:
      'You can delete a Crowdsale by clicking the "Delete Campaign" button on the left side of the page.'
  },
  {
    question: 'How do I view a Crowdsale?',
    answer:
      'You can view a Crowdsale by clicking the "View Campaign" button on the left side of the page.'
  }
];

const Faq = () => {
  const renderFAQs = (): ReactNode[] => {
    return faqs.map(({ question, answer }, index) => {
      return (
        <AccordionItem
          key={index}
          borderWidth="1px"
          borderColor="blackAlpha.100"
          mb="5"
          borderRadius="md"
        >
          <h2>
            <AccordionButton p="5">
              <Box flex="1" textAlign="left" color="black">
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{answer}</AccordionPanel>
        </AccordionItem>
      );
    });
  };

  return (
    <HStack
      alignItems="normal"
      spacing={{ base: '0px', xl: '50px' }}
      flexWrap={{ base: 'wrap', xl: 'nowrap' }}
    >
      <Box w={{ base: '100%', xl: '70%' }}>
        <Heading fontSize="xl" fontWeight="500" mb="5">
          <Trans>Frequently Asked Questions</Trans>
        </Heading>
        <Accordion allowMultiple>{renderFAQs()}</Accordion>
      </Box>
      <Box w={{ base: '100%', xl: '30%' }}>
        <Card>
          <Text mb="5">
            <Trans>
              Don&lsquo;t see the answer to your question? Ask the project
              creator
            </Trans>
            directly.
          </Text>
          <Button variant="primaryAlt">
            <Trans>Ask a Question</Trans>
          </Button>
        </Card>
      </Box>
    </HStack>
  );
};

Faq.PageLayout = CampaignLayout;

export default Faq;
