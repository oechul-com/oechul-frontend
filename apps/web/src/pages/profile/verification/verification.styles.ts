import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const VerificationContent = styled.div`
  ${theme.layout.column};
  justify-content: space-between;
  height: 100%;
  margin-top: ${rem(25)};
  margin-bottom: ${rem(31)};
`;

export const VerificationGuideContainer = styled.div`
  ${theme.layout.column};
  padding: ${rem(26)};
  border-radius: ${rem(10)};
  background-color: ${theme.colors.gray100};
  gap: ${rem(26)};
`;

export const VerificationButtonContainer = styled.div`
  ${theme.layout.columnCenterX};
  gap: ${rem(9)};
`;
