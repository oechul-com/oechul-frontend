import React, { ElementType, ReactNode, forwardRef } from 'react';

import { BaseButton } from './Button.styles';

export type ButtonVariantType =
  | 'normal'
  | 'gray'
  | 'alert'
  | 'blue'
  | 'yellow'
  | 'accent';

type BaseButtonProps = {
  variant?: ButtonVariantType;
  bgColor?: string;
  hoverBgColor?: string;
  invalidBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  invalidTextColor?: string;
  width?: string;
  children: ReactNode;
};

type ButtonProps<C extends ElementType> = BaseButtonProps & {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof BaseButtonProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps<ElementType>>(
  (
    {
      as: Component = 'button',
      variant = 'normal',
      bgColor,
      hoverBgColor,
      invalidBgColor,
      textColor,
      hoverTextColor,
      invalidTextColor,
      width,
      children,
      ...props
    },
    ref,
  ) => (
    <BaseButton
      as={Component}
      ref={ref}
      $variant={variant}
      $bgColor={bgColor}
      $hoverBgColor={hoverBgColor}
      $textColor={textColor}
      $invalidBgColor={invalidBgColor}
      $hoverTextColor={hoverTextColor}
      $invalidTextColor={invalidTextColor}
      $width={width}
      {...props}
    >
      {children}
    </BaseButton>
  ),
);

Button.displayName = 'Button';

export default Button;
