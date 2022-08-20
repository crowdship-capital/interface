import { Box } from '@chakra-ui/react';

const Card = ({ children, ...rest }) => {
  return (
    <Box
      borderWidth='1px'
      w='full'
      borderColor='blackAlpha.100'
      p='5'
      borderRadius='md'
      transition='all 0.2s ease-in-out'
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
