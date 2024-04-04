import {
  useState,
  useEffect,
  ReactNode,
  CSSProperties,
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react';

import { InputContainer, InputBlock, InputLabel } from './Input.styles';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  id?: string;
  isValid?: boolean;
  style?: CSSProperties;
  label: string | ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id: propId, isValid, style, label, ...props }, ref) => {
    const [id, setId] = useState(propId || crypto.randomUUID());

    useEffect(() => {
      if (propId) setId(propId);
    }, [propId]);

    return (
      <InputContainer style={style} $isValid={isValid}>
        <InputBlock id={id} ref={ref} required {...props} />
        <InputLabel htmlFor={id} $isValid={isValid}>
          {label}
        </InputLabel>
      </InputContainer>
    );
  },
);

Input.displayName = 'Input';

export default Input;
