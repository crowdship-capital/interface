import React, { FC, ReactNode } from 'react';
import { Button, Box, Text, Kbd } from '@chakra-ui/react';

export interface ISearchInput {
  placeholder?: string;
  onClick: () => void;
  width?: string;
}

export const defaultProps = {
  placeholder: 'Search',
  width: 'full',
  onClick: () => {}
};

export const SearchInput: FC<ISearchInput> = ({
  onClick,
  width,
  placeholder
}) => {
  return (
    <Button
      w={width}
      borderRadius="3xl"
      variant="primary"
      background="rgba(0, 0, 0, 0.06)"
      _hover={{
        backgroundColor: 'rgba(0, 0, 0, 0.06)'
      }}
      size="lg"
      fontSize="md"
      onClick={onClick}
    >
      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color="blackAlpha.400" fontWeight="400">
          {placeholder}
        </Text>
        <Kbd
          display="flex"
          alignItems="center"
          color="blackAlpha.700"
          backgroundColor="yellow.200"
          borderColor="#E3DAAD"
        >
          <Text as="span" fontSize="18px" mr="2px">
            ⌘
          </Text>
          K
        </Kbd>
      </Box>
    </Button>
  );
};

SearchInput.defaultProps = defaultProps;
