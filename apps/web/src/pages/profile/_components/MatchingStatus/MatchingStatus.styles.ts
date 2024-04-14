import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const MatchingStatusGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: ${rem(16)};
  padding-inline: ${rem(6)};
`;

export const MatchingStatusItem = styled.div`
  ${theme.layout.columnCenterX};
  gap: ${rem(8)};
`;

export const MatchingStatueValue = styled.p`
  ${theme.layout.center};
  width: 100%;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  padding-block: ${rem(28)};
  border: ${`${rem(1)} solid ${theme.colors.gray250}`};
  border-radius: ${rem(24)};
`;

export const MatchingStatusTitle = styled.p`
  width: fit-content;
  padding: ${rem(6)} ${rem(11)};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};
  text-align: center;
  word-break: keep-all;
  border-radius: ${rem(20)};
  background-color: ${theme.colors.black};
`;
