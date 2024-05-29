import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const StatusContainer = styled.div`
  ${theme.layout.columnCenterX};
  gap: ${rem(6)};
`;

export const StatusIcon = styled.p`
  font-size: ${theme.fontSizes['2xl']};
`;

export const StatusMessage = styled.p`
  margin-top: ${rem(6)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.semibold};
  text-align: center;
`;

export const StatusSubMessage = styled.p`
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes['2xs']};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;

  & a {
    color: ${theme.colors.gray500};
    text-decoration: underline;
  }
`;
