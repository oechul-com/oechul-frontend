import {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactNode,
} from 'react';

import { BaseButton } from './Button.styles';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  as?: ElementType;
  variant?: 'normal' | 'alert' | 'blue' | 'accent';
  bgColor?: string;
  hoverBgColor?: string;
  invalidBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  invalidTextColor?: string;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
      {...props}
    >
      {children}
    </BaseButton>
  ),
);

Button.displayName = 'Button';

export default Button;
