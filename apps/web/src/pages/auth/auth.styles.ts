import { rem, theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import styled from 'styled-components';

export const Header = styled.h1`
  margin-top: ${rem(15)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
`;

export const SignInContent = styled.div`
  margin-top: ${rem(28)};
`;

export const SignInNavigationText = styled(Text)`
  ${theme.layout.centerX};
  margin-top: ${rem(15)};
  color: ${theme.colors.gray600};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  gap: ${rem(8)};

  & a {
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeights.semibold};
  }
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: ${rem(18)};
  padding-bottom: ${rem(30)};
`;

export const PrivacyCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;

export const SignUpCompleteContent = styled.div`
  ${theme.layout.center};
  flex-direction: column;
  flex: 1;
`;
