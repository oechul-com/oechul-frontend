import { forwardRef } from 'react';

import { BaseButton } from './Button.styles';
import { ButtonProps } from './type';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as: Component = 'button',
      bgColor,
      hoverBgColor,
      textColor,
      children,
      ...props
    },
    ref,
  ) => (
    <BaseButton
      as={Component}
      ref={ref}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      textColor={textColor}
      {...props}
    >
      {children}
    </BaseButton>
  ),
);

Button.displayName = 'Button';

export default Button;
