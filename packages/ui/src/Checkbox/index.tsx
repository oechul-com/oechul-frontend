import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import {
  CheckboxContainer,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
} from './Checkbox.styles';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  label: string | ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...rest }, ref) => {
    return (
      <CheckboxContainer>
        <HiddenCheckbox ref={ref} {...rest} />
        <StyledCheckbox $checked={!!rest.checked} />
        <CheckboxLabel $checked={!!rest.checked}>{label}</CheckboxLabel>
      </CheckboxContainer>
    );
  },
);

export default Checkbox;
