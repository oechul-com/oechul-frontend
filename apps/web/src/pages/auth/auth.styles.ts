import { rem, theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import styled from 'styled-components';

export const Header = styled.h1`
  margin-top: ${rem(15)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
`;

export const Content = styled.div`
  margin-top: ${rem(29)};
`;

export const NavigationText = styled(Text)`
  margin-top: ${rem(15)};
  color: ${theme.colors.gray600};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;

  & a {
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeights.semibold};
    text-decoration: none;
  }
`;
