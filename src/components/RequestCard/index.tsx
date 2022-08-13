import React from 'react';
import moment from 'moment';

import { Box, Text, Badge, Progress } from '@chakra-ui/react';

import { ArrowRight } from 'phosphor-react';

const ApprovalBadge = ({ approval, ...rest }) => {
  switch (approval) {
    case 'pending':
      return (
        <Badge bg='#ECC94B' {...rest}>
          In progress
        </Badge>
      );
    case 'approved':
      return (
        <Badge bg='green.500' {...rest}>
          Approved
        </Badge>
      );
    case 'failed':
      return (
        <Badge bg='red.500' {...rest}>
          Failed
        </Badge>
      );
    default:
      return (
        <Badge bg='gray.500' {...rest}>
          Indecisive
        </Badge>
      );
  }
};

export const RequestCard = ({
  id,
  title,
  approval,
  endDate,
  approvalCount,
  requestAmount,
}) => {
  return (
    <Box
      borderWidth='1px'
      bg={approval === 'pending' ? 'yellow.200' : 'white'}
      w='full'
      borderColor='blackAlpha.100'
      p='7'
      mb='5'
      borderRadius='md'
      cursor='pointer'
      transition='all 0.2s ease-in-out'
      _hover={{
        bg: 'blackAlpha.50',
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box mb='3'>
          <Text fontSize='xl' fontWeight='500' mb='2'>
            {title}
          </Text>
          <ApprovalBadge
            approval={approval}
            borderRadius='md'
            textTransform='uppercase'
            color='white'
            fontSize='sm'
            px='2'
          />
          <Box
            as='span'
            color='blackAlpha.700'
            fontWeight='500'
            letterSpacing='wide'
            fontSize='md'
            textTransform='uppercase'
            ml='2'
          >
            &bull; {requestAmount}
          </Box>
        </Box>
        <Box as='span'>
          <ArrowRight size={24} />
        </Box>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        fontSize='sm'
      >
        <Box>
          <Box as='span' color='gray.500' fontWeight='500'>
            {approval !== 'pending'
              ? moment(endDate).format('MMM DD, YYYY')
              : `${moment(endDate).fromNow(true)} left`}
          </Box>
          <Box as='span' color='blackAlpha.600' ml='2'>
            &bull; Request ID #{id}
          </Box>
        </Box>
        {approval === 'pending' ? (
          <Box
            display='flex'
            alignItems='center'
            color='blackAlpha.700'
            fontWeight='500'
          >
            <Text as='span' mr='2'>
              80%
            </Text>
            <Progress
              hasStripe
              value={approvalCount}
              borderRadius='4px'
              size='sm'
              w='100px'
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
