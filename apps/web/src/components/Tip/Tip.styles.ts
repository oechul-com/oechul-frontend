import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const TipRoot = styled.div`
  ${theme.layout.centerY}
  padding: ${rem(7)} ${rem(10)};
  border-radius: ${rem(10)};
  background-color: ${theme.colors.gray150};
  gap: ${rem(8)};
`;

export const TipEmoji = styled.p`
  font-size: ${theme.fontSizes.xl};
  line-height: normal;
`;

export const TipLabel = styled.span`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};
`;
