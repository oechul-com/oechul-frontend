import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

const getBorderColor = (isValid?: boolean) => {
  if (isValid === false) return theme.colors.red.alert;
  if (isValid === true) return theme.colors.green.main;
  return theme.colors.gray250;
};

const getColor = (isValid?: boolean) => {
  if (isValid === false) return theme.colors.red.alert;
  if (isValid === true) return theme.colors.green.main;
  return theme.colors.gray500;
};

export const InputContainer = styled.div<{ $isValid?: boolean }>`
  position: relative;
  width: 100%;
  height: ${rem(68)};
  border: ${rem(1)} solid ${({ $isValid }) => getBorderColor($isValid)};
  border-radius: ${rem(10)};
  background-color: ${theme.colors.white};
`;

export const InputBlock = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding-inline: ${rem(24)};
  padding-top: ${rem(18)};

  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};

  outline: none;
  border: none;
  background: none;

  &:focus ~ label,
  &:valid ~ label,
  &:read-only ~ label {
    top: ${rem(18)};
    font-size: ${theme.fontSizes['2xs']};
    transform: translateY(0);
  }
`;

export const InputLabel = styled.label<{ $isValid?: boolean }>`
  ${theme.layout.centerY}

  position: absolute;
  top: 50%;
  left: ${rem(24)};

  color: ${({ $isValid }) => getColor($isValid)};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};

  user-select: none;
  transition: all 0.2s ease;
  transform: translateY(-50%);
  gap: ${rem(4)};
`;
