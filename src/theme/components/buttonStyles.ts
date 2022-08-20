import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  baseStyle: {
    borderRadius: 'sm',
    borderColor: 'black.500',
  },
  sizes: {},
  variants: {
    primary: (props: any) => ({
      bg: 'black.500',
      color: 'white',
      fontWeight: '500',
      borderRadius: 'md',
      _hover: {
        bg: whiten('black.500', 15),
        _disabled: {
          bg: whiten('black.500', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    primaryAlt: () => ({
      bg: 'purple.500',
      color: 'purple.100',
      fontWeight: '500',
      borderRadius: 'md',
      _hover: {
        bg: whiten('purple.500', 15),
        _disabled: {
          bg: whiten('black.500', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    secondary: () => ({
      bg: 'yellow.500',
      color: 'black.500',
      fontWeight: '500',
      borderRadius: 'md',
      _hover: {
        bg: whiten('yellow.500', 15),
        _disabled: {
          bg: whiten('yellow.500', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    success: () => ({
      bg: 'green.500',
      color: 'white',
      fontWeight: '500',
      borderRadius: 'md',
      _hover: {
        bg: whiten('green.500', 15),
        _disabled: {
          bg: whiten('green.500', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    'success-outlined': () => ({
      bg: 'transparent',
      color: 'green.500',
      fontWeight: '500',
      borderRadius: 'md',
      borderWidth: '1px',
      borderColor: 'green.500',
      _hover: {
        bg: 'transparent',
        _disabled: {
          bg: whiten('gray.50', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    danger: () => ({
      bg: 'red.500',
      color: 'white',
      fontWeight: '500',
      borderRadius: 'md',
      _hover: {
        bg: whiten('red.500', 15),
        _disabled: {
          bg: whiten('red.500', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    'danger-outlined': () => ({
      bg: 'transparent',
      color: 'red.500',
      fontWeight: '500',
      borderRadius: 'md',
      borderWidth: '1px',
      borderColor: 'red.500',
      _hover: {
        bg: 'red.50',
        _disabled: {
          bg: whiten('red.50', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    plain: () => ({
      bg: 'gray.50',
      color: 'black.500',
      borderRadius: 'md',
      _hover: {
        bg: whiten('gray.50', 15),
        _disabled: {
          bg: whiten('gray.50', 0),
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    clear: () => ({
      bg: 'transparent',
      color: 'black.500',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'blackAlpha.100',
      borderRadius: 'md',
      _hover: {
        bg: 'none',
        _disabled: {
          bg: 'transparent',
          color: 'blackAlpha.100',
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    ghost: () => ({
      bg: 'transparent',
      color: 'black.500',
      borderRadius: 'md',
      _hover: {
        bg: 'transparent',
        _disabled: {
          bg: 'transparent',
          color: 'blackAlpha.100',
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
};
