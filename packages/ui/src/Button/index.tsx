import { forwardRef } from 'react';

import { StyledButton } from './Button.styles';
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
    <StyledButton
      as={Component}
      ref={ref}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      textColor={textColor}
      {...props}
    >
      {children}
    </StyledButton>
  ),
);

Button.displayName = 'Button';

export default Button;
