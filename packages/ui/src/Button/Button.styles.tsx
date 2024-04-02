import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

import { ButtonProps } from './type';

export const BaseButton = styled.button`
  ${theme.layout.center};
  padding-block: ${rem(25)};

  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};

  outline: none;
  cursor: pointer;
  border: none;
  border-radius: ${rem(10)};
  transition: background-color 0.2s ease-in-out;
  gap: ${rem(6)};
`;

export const StyledButton = styled(BaseButton)<ButtonProps>`
  color: ${({ textColor }) => textColor || theme.colors.white};
  background-color: ${({ bgColor }) => bgColor || theme.colors.black};

  &:hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor || theme.colors.gray750};
  }
`;
