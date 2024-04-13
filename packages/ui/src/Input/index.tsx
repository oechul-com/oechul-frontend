import {
  useState,
  useEffect,
  ReactNode,
  CSSProperties,
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react';
import { v4 } from 'uuid';

import { InputContainer, InputBlock, InputLabel } from './Input.styles';

type InputProps = {
  id?: string;
  isValid?: boolean;
  style?: CSSProperties;
  label: string | ReactNode;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id: propId, isValid, style, label, ...props }, ref) => {
    const [id, setId] = useState(propId || v4());

    useEffect(() => {
      if (propId) setId(propId);
    }, [propId]);

    return (
      <InputContainer style={style} $isValid={isValid}>
        <InputBlock id={id} ref={ref} placeholder={id} required {...props} />
        <InputLabel htmlFor={id} $isValid={isValid}>
          {label}
        </InputLabel>
      </InputContainer>
    );
  },
);

Input.displayName = 'Input';

export default Input;
