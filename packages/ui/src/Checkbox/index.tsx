import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import {
  CheckboxContainer,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
} from './Checkbox.styles';

type CheckboxProps = {
  label: string | ReactNode;
  margin?: string;
} & ComponentPropsWithoutRef<'input'>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, margin, ...rest }, ref) => {
    return (
      <CheckboxContainer style={{ margin: margin }}>
        <HiddenCheckbox ref={ref} {...rest} />
        <StyledCheckbox $checked={!!rest.checked} />
        <CheckboxLabel $checked={!!rest.checked}>{label}</CheckboxLabel>
      </CheckboxContainer>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
