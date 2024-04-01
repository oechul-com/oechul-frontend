import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  ReactNode,
} from 'react';
import { StyledButton } from './Button.styles';

type ButtonProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

const Button = forwardRef<any, ButtonProps<ElementType>>(
  ({ as: Component = StyledButton, children, ...props }, ref) => {
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);

Button.displayName = 'Button';

export default Button;
