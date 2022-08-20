import { FC, ReactNode } from 'react';
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

export interface IAdvancedList {
  items: [{ title: string; subtitle?: string; logo?: ReactNode }];
  showDivider?: boolean;
  showMore?: boolean;
  showNavigation?: boolean;
  showFirst: number;
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
      <UnorderedList listStyleType='none'>
        {items.map(({ title, subtitle, logo }, idx) => {
          if (idx <= showFirst - 1) {
            return (
              <>
                <ListItem key={title}>
                  <HStack spacing='10px'>
                    {logo && <Box>{logo}</Box>}
                    <Box>
                      <Text fontSize='xl' fontWeight='500'>
                        {title}
                      </Text>
                      {title && (
                        <Text fontSize='sm' color='black.300'>
                          {subtitle}
                        </Text>
                      )}
                    </Box>
                    {showNavigation && (
                      <IconButton aria-label='view' icon={<CaretRight />} />
                    )}
                  </HStack>
                </ListItem>
                {items.length !== 1 &&
                idx === items.length - 1 &&
                showDivider ? (
                  <Divider bg='blackAlpha.100' />
                ) : null}
              </>
            );
          }
        })}
        {showMore && (
          <Box>
            <Button rightIcon={<ArrowRight />}>View all</Button>
          </Box>
        )}
      </UnorderedList>
    </>
  );
};
