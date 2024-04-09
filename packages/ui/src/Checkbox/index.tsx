import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import {
  CheckboxContainer,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
} from './Checkbox.styles';

type CheckboxProps = {
  label: string | ReactNode;
} & ComponentPropsWithoutRef<'input'>;

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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
