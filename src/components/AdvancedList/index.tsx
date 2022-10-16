import { FC, ReactNode, useMemo } from 'react';
import { Trans } from '@lingui/macro';
import {
  UnorderedList,
  ListItem,
  Text,
  Box,
  HStack,
  Divider,
  Button,
  IconButton
} from '@chakra-ui/react';

import { CaretRight, ArrowRight } from 'phosphor-react';

import { Pagination } from '@/components/Pagination';

export interface IAdvancedListItem {
  title: string;
  subtitle?: string;
  logo?: ReactNode;
}

export interface IAdvancedList {
  items: IAdvancedListItem[];
  showDivider?: boolean;
  showMore?: boolean;
  showNavigation?: boolean;
  showFirst?: number;
  withPagination?: boolean;
  perPage?: number;
  onNext?: () => void;
  onPrev?: () => void;
}

export const AdvancedList: FC<IAdvancedList> = ({
  items,
  showDivider,
  showMore,
  showNavigation,
  showFirst,
  withPagination,
  perPage,
  onNext,
  onPrev
}) => {
  const data = useMemo(() => items, [items]);

  return (
    <>
      <UnorderedList listStyleType="none" p="0" m="0">
        {data.map(({ title, subtitle, logo }, idx) => {
          return (
            <Box key={idx}>
              {showDivider ? <Divider /> : null}
              <ListItem
                p="3"
                cursor="pointer"
                _hover={{
                  bg: 'blackAlpha.50'
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mx="5"
                >
                  <Box display="flex" alignItems="center">
                    {logo && <Box mr="3">{logo}</Box>}
                    <Box>
                      <Text fontWeight="500" noOfLines={1} isTruncated>
                        {title}
                      </Text>
                      {title && (
                        <Text fontSize="sm" color="blackAlpha.700">
                          {subtitle}
                        </Text>
                      )}
                    </Box>
                  </Box>
                  {showNavigation && (
                    <IconButton
                      variant="ghost"
                      aria-label="view"
                      icon={<CaretRight />}
                    />
                  )}
                </Box>
              </ListItem>
            </Box>
          );
        })}
      </UnorderedList>
      {showMore && !withPagination && (
        <HStack justifyContent="flex-end" p="3" mx="5">
          <Button variant="ghost" fontWeight="500" rightIcon={<ArrowRight />}>
            <Trans>View all</Trans>
          </Button>
        </HStack>
      )}
      {withPagination && (
        <Box p="5" mx="5">
          <Pagination onNext={onNext} onPrev={onPrev} />
        </Box>
      )}
    </>
  );
};

AdvancedList.defaultProps = {
  items: [],
  showDivider: true,
  showMore: true,
  showNavigation: true,
  showFirst: 5,
  withPagination: false,
  perPage: 10,
  onNext: () => {},
  onPrev: () => {}
};
