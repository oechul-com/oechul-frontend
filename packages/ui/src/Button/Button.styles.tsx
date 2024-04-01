import styled from 'styled-components';
import { rem, theme } from '@oechul/styles';

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
