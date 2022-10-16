import { Box, Divider, Text } from '@chakra-ui/react';

export const Card = ({ children, ...rest }) => {
  return (
    <Box
      borderWidth="1px"
      w="full"
      borderColor="blackAlpha.100"
      p="5"
      borderRadius="md"
      transition="all 0.2s ease-in-out"
      {...rest}
    >
      {children}
    </Box>
  );
};

export const CardSection = ({ children, title }) => {
  return (
    <Card p="0">
      <Text fontSize="lg" fontWeight="500" p="5">
        {title}
      </Text>
      <Divider />
      {children}
    </Card>
  );
};
