import { theme } from '@oechul/styles';
import {
  forwardRef,
  ReactNode,
  ComponentPropsWithRef,
  ElementType,
} from 'react';
import styled from 'styled-components';

import { BaseButton } from './Button.styles';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  as?: ElementType;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  children: ReactNode;
}

const StyledButton = styled(BaseButton)<ButtonProps>`
  color: ${({ textColor }) => textColor || theme.colors.white};
  background-color: ${({ bgColor }) => bgColor || theme.colors.black};

  &:hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor || theme.colors.gray750};
  }
`;

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
