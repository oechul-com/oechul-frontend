import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  ${theme.layout.centerY}
  cursor: pointer;
  width: fit-content;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  margin: 0;
`;

export const StyledCheckbox = styled.div<{ $checked: boolean }>`
  width: ${rem(16)};
  height: ${rem(16)};
  border: ${rem(1)} solid ${theme.colors.gray300};
  border-width: ${({ $checked }) => ($checked ? rem(7) : rem(1))};
  border-color: ${({ $checked }) =>
    $checked ? theme.colors.black : theme.colors.gray300};
  border-radius: ${rem(4)};
  transition: all 0.2s;
`;

export const CheckboxLabel = styled.span<{ $checked: boolean }>`
  margin-left: ${rem(8)};
  color: ${({ $checked }) =>
    $checked ? theme.colors.black : theme.colors.gray500};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};

  a {
    color: ${({ $checked }) =>
      $checked ? theme.colors.black : theme.colors.gray500};
  }
`;
