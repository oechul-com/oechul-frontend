import {
  useState,
  useEffect,
  ComponentProps,
  ReactNode,
  CSSProperties,
} from 'react';

import { InputContainer, InputBlock, InputLabel } from './Input.styles';

interface InputProps extends ComponentProps<'input'> {
  id?: string;
  isValid?: boolean;
  style?: CSSProperties;
  label: string | ReactNode;
}

const Input = ({ id: propId, isValid, style, label, ...props }: InputProps) => {
  const [id, setId] = useState(propId || crypto.randomUUID());

  useEffect(() => {
    if (propId) setId(propId);
  }, [propId]);

  return (
    <InputContainer style={style} $isValid={isValid}>
      <InputBlock id={id} required {...props} />
      <InputLabel htmlFor={id} $isValid={isValid}>
        {label}
      </InputLabel>
    </InputContainer>
  );
};

Input.displayName = 'Input';

export default Input;
