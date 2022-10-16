import { FC } from 'react';
import {
  DribbbleLogo,
  Cpu,
  Bank,
  Heartbeat,
  Tree,
  AirplaneTilt,
  Planet
} from 'phosphor-react';

export const CategoryIcon: FC<{
  name: string;
  color: string | undefined;
  size: number;
}> = ({ name, color, size }) => {
  const renderIcon = (name: string) => {
    switch (name.toLocaleLowerCase()) {
      case 'tech':
        return <Cpu weight="duotone" size={size} color={color} />;
      case 'sports':
        return <DribbbleLogo weight="duotone" size={size} color={color} />;
      case 'finance':
        return <Bank weight="duotone" size={size} color={color} />;
      case 'health':
        return <Heartbeat weight="duotone" size={size} color={color} />;
      case 'agriculture':
        return <Tree weight="duotone" size={size} color={color} />;
      case 'travel':
        return <AirplaneTilt weight="duotone" size={size} color={color} />;
      default:
        return <Planet weight="duotone" size={size} color={color} />;
        break;
    }
  };

  return <>{renderIcon(name)}</>;
};
