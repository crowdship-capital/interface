import React, { FC } from 'react';
import { Box, Text, Select, IconButton } from '@chakra-ui/react';

import { CaretLeft, CaretRight } from 'phosphor-react';

export const Pagination: FC<{ onNext?: () => void; onPrev?: () => void }> = ({
  onNext,
  onPrev,
}) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' alignItems='center'>
        <Text>Rows per page</Text>
        <Box as='span' ml='2'>
          <Select
            defaultValue='10'
            variant='outlineAlt'
            borderColor='blackAlpha.100'
            borderWidth='1px'
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </Select>
        </Box>
      </Box>
      <Box display='flex' alignItems='center'>
        <Text color='blackAlpha.400'>
          <Text color='black' as='span'>
            1
          </Text>{' '}
          of 240
        </Text>
        <Box as='span' display='flex' ml='2'>
          <IconButton
            aria-label='Previous'
            variant='ghost'
            size='sm'
            icon={<CaretLeft size={15} />}
            onClick={onNext}
          />
          <IconButton
            aria-label='Next'
            variant='ghost'
            size='sm'
            icon={<CaretRight size={15} />}
            onClick={onPrev}
          />
        </Box>
      </Box>
    </Box>
  );
};
