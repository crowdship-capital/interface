import React, { FC, ReactNode } from 'react';
import { VStack, Box, Text, Center } from '@chakra-ui/react';

const Empty: FC<{ title: string; icon?: ReactNode }> = ({ title, icon }) => {
  return (
    <Box justifyContent="center" borderRadius="md" textAlign="center">
      <Center>{icon}</Center>
      <Text fontWeight="500" fontSize="xl">
        {title}
      </Text>
    </Box>
  );
};

export default Empty;
