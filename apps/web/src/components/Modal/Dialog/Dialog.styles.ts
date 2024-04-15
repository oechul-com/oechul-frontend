import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const DialogContent = styled.div`
  ${theme.layout.columnCenterX};
  width: 100%;
  max-width: ${theme.sizes.app};
  padding: ${rem(30)} ${rem(25)};
  margin-inline: auto;
  border-radius: ${rem(10)};
  background-color: ${theme.colors.white};
  gap: ${rem(26)};
`;

export const BetweenButtonContainer = styled.div`
  ${theme.layout.centerX};
  width: 100%;
  margin-top: ${rem(30)};
  gap: ${rem(16)};
`;
