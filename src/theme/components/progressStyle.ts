import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const progressStyles = {
  baseStyle: {
    track: {
      bg: 'blackAlpha.100',
      borderRadius: '4px',
    },
  },
  variants: {
    success: () => ({
      filledTrack: {
        bg: 'green.400',
      },
    }),
    danger: () => ({
      filledTrack: {
        bg: 'red.400',
      },
    }),
  },
};
