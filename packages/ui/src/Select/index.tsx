import { CaratDownIcon } from '@oechul/icons';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

import {
  BaseSelect,
  SelectContainer,
  SelectIcon,
  SelectLabel,
} from './Select.styled';

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, style, options, ...props }, ref) => {
    return (
      <SelectContainer style={style}>
        <BaseSelect ref={ref} required {...props}>
          <option value="" disabled>
            {label}
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </BaseSelect>
        <SelectLabel $position={props.value !== '' ? 'top' : 'center'}>
          {label}
        </SelectLabel>
        <SelectIcon>
          <CaratDownIcon width={14} color="#8C8C8C" />
        </SelectIcon>
      </SelectContainer>
    );
  },
);

Select.displayName = 'Select';

export default Select;
