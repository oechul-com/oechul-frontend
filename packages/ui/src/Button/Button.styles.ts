import { rem } from '@oechul/styles';
import styled from 'styled-components';

import { ButtonProps } from './type';

export const BaseButton = styled.button<ButtonProps>`
  ${({ theme }) => theme.layout.center};

  padding-block: ${rem(25)};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: ${rem(10)};
  transition: background-color 0.2s ease-in-out;
  gap: ${rem(6)};

  color: ${({ theme, textColor }) => textColor || theme.colors.white};
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.black};

  &:hover {
    background-color: ${({ theme, hoverBgColor }) =>
      hoverBgColor || theme.colors.gray750};
  }
`;
