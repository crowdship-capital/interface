import React, { FC } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { Box, Heading, Text, Badge, Progress } from '@chakra-ui/react';
import { ArrowRight } from 'phosphor-react';

import { Card } from '@/components/Card';

export interface IRequestCard {
  id?: string;
  title?: string;
  approval?: string;
  endDate?: string;
  approvalCount?: number;
  requestAmount?: string;
  href?: string;
}

export interface IRequestHeader extends IRequestCard {
  tags?: [{ text: string; color: string }];
  hideProgress?: boolean;
  hideNavigation?: boolean;
  [key: string]: any;
}

const ApprovalBadge = ({ approval, ...rest }) => {
  switch (approval) {
    case 'pending':
      return (
        <Badge bg="#ECC94B" {...rest}>
          In progress
        </Badge>
      );
    case 'approved':
      return (
        <Badge bg="green.500" {...rest}>
          Approved
        </Badge>
      );
    case 'failed':
      return (
        <Badge bg="red.500" {...rest}>
          Failed
        </Badge>
      );
    default:
      return (
        <Badge bg="gray.500" {...rest}>
          Indecisive
        </Badge>
      );
  }
};

export const RequestHeader: FC<IRequestHeader> = ({
  id,
  title,
  tags,
  requestAmount,
  approval,
  endDate,
  approvalCount,
  hideProgress,
  hideNavigation
}) => {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box mb="3">
          <Heading fontSize="xl" fontWeight="500" mb="2">
            {title}
          </Heading>
          <ApprovalBadge
            approval={approval}
            borderRadius="md"
            textTransform="uppercase"
            color="white"
            fontSize="sm"
            px="2"
          />
          {tags &&
            tags.map(tag => (
              <Badge
                key={tag.text}
                bg={tag.color}
                borderRadius="md"
                textTransform="uppercase"
                color="white"
                fontSize="sm"
                px="2"
                ml="2"
              >
                {tag.text}
              </Badge>
            ))}
          <Box
            as="span"
            color="blackAlpha.700"
            fontWeight="500"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
            ml="2"
          >
            &bull; {requestAmount}
          </Box>
        </Box>
        {!hideNavigation && (
          <Box as="span">
            <ArrowRight size={24} />
          </Box>
        )}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        fontSize="sm"
      >
        <Box>
          <Box as="span" color="gray.500" fontWeight="500">
            {approval !== 'pending'
              ? moment(endDate).format('MMM DD, YYYY')
              : `${moment(endDate).fromNow(true)} left`}
          </Box>
          <Box as="span" color="blackAlpha.600" ml="2">
            &bull; Request ID #{id}
          </Box>
        </Box>
        {!hideProgress && approval === 'pending' ? (
          <Box
            display="flex"
            alignItems="center"
            color="blackAlpha.700"
            fontWeight="500"
          >
            <Text as="span" mr="2">
              80%
            </Text>
            <Progress
              hasStripe
              value={approvalCount}
              size="sm"
              variant="success"
              w="100px"
            />
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export const RequestCard: FC<IRequestCard> = ({ approval, href, ...rest }) => {
  return (
    <Link href={href} passHref scroll={false}>
      <Box as="a" w="full">
        <Card
          bg={approval === 'pending' ? 'yellow.200' : 'white'}
          cursor="pointer"
          _hover={{
            bg: 'blackAlpha.50'
          }}
        >
          <RequestHeader approval={approval} hideProgress={false} {...rest} />
        </Card>
      </Box>
    </Link>
  );
};
