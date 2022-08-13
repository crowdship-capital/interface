import React, { ReactNode, FC } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export interface IStatistic {
  title: string;
  value: string;
  prefix?: ReactNode | String;
  suffix?: ReactNode | String;
  [x: string]: any;
}

export const Statistic: FC<IStatistic> = ({
  title,
  value,
  prefix,
  suffix,
  ...rest
}) => {
  return (
    <Box
      borderWidth='1px'
      w='full'
      borderColor='blackAlpha.100'
      p='5'
      borderRadius='md'
      {...rest}
    >
      <Text fontSize='sm' fontWeight='500' color='blackAlpha.600' mb='2'>
        {title}
      </Text>
      <Box display='flex' alignItems='center'>
        {prefix ? (
          <Box as='span' mr='2'>
            {prefix}
          </Box>
        ) : null}
        <Box as='span' fontSize='2xl' fontWeight='500'>
          {value}
        </Box>
        {suffix ? (
          <Box as='span' ml='2'>
            {suffix}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
