import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  as?: ElementType;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  children: ReactNode;
}
