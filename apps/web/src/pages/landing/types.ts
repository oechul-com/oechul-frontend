import { IconProps } from '@oechul/icons';
import { ElementType, NamedExoticComponent } from 'react';

export type SocialItemType = {
  Icon: NamedExoticComponent<IconProps> | ElementType;
  description: string;
  bgColor: string;
  color: string;
  link: string;
};
