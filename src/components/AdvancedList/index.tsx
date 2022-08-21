import { FC, ReactNode } from 'react';
import { Trans } from '@lingui/macro';
import {
  UnorderedList,
  ListItem,
  Text,
  Box,
  HStack,
  Divider,
  Button,
  IconButton,
} from '@chakra-ui/react';

import { CaretRight, ArrowRight } from 'phosphor-react';

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
}

export const AdvancedList: FC<IAdvancedList> = ({
  items,
  showDivider,
  showMore,
  showNavigation,
  showFirst,
}) => {
  return (
    <>
      <UnorderedList listStyleType='none' p='0' m='0'>
        {items.map(({ title, subtitle, logo }, idx) => {
          if (idx <= showFirst - 1) {
            return (
              <>
                {showDivider ? <Divider borderColor='blackAlpha.100' /> : null}
                <ListItem
                  key={title}
                  p='3'
                  cursor='pointer'
                  _hover={{
                    bg: 'blackAlpha.50',
                  }}
                >
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    mx='5'
                  >
                    <Box display='flex' alignItems='center'>
                      {logo && <Box mr='3'>{logo}</Box>}
                      <Box>
                        <Text fontWeight='500' noOfLines={1} isTruncated>
                          {title}
                        </Text>
                        {title && (
                          <Text fontSize='sm' color='blackAlpha.700'>
                            {subtitle}
                          </Text>
                        )}
                      </Box>
                    </Box>
                    {showNavigation && (
                      <IconButton
                        variant='ghost'
                        aria-label='view'
                        icon={<CaretRight />}
                      />
                    )}
                  </Box>
                </ListItem>
              </>
            );
          }
        })}
        {showMore && (
          <HStack justifyContent='flex-end' p='3'>
            <Button variant='ghost' fontWeight='500' rightIcon={<ArrowRight />}>
              <Trans>View all</Trans>
            </Button>
          </HStack>
        )}
      </UnorderedList>
    </>
  );
};

AdvancedList.defaultProps = {
  items: [],
  showDivider: true,
  showMore: true,
  showNavigation: true,
  showFirst: 5,
};
