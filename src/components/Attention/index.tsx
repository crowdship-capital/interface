import { FC, ReactElement } from 'react';
import {
  Alert,
  AlertIcon,
  AlertProps,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react';

export interface IAttention extends AlertProps {
  title: string;
  description: string;
  open: boolean;
}

export const Attention: FC<IAttention> = ({
  status,
  title,
  description,
  open
}): ReactElement => {
  return (
    <Alert
      status={status}
      height={open ? 'auto' : 0}
      transition={open ? 'height 0.3s ease-in-out' : 'height 0.3s ease-in-out'}
    >
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
