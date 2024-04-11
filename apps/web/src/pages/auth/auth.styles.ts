import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const Header = styled.h1`
  margin-top: ${rem(15)};
  color: ${theme.colors.black};
  font-size: ${rem(32)};
  font-weight: ${theme.fontWeights.semibold};
`;
