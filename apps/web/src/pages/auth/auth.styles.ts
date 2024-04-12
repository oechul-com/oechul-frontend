import { rem, theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import styled from 'styled-components';

export const Header = styled.h1`
  margin-top: ${rem(15)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
`;

export const LoginContent = styled.div`
  margin-top: ${rem(28)};
`;

export const LoginNavigationText = styled(Text)`
  margin-top: ${rem(15)};
  color: ${theme.colors.gray600};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;

  & a {
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeights.semibold};
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: ${rem(18)};
  padding-bottom: ${rem(30)};
`;

export const RegisterCenterContent = styled.div`
  ${theme.layout.center};
  flex-direction: column;
  flex: 1;
`;

export const PrivacyCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: ${rem(24)};
  gap: ${rem(16)};
`;