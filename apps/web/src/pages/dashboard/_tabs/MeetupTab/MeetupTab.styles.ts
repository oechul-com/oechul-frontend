import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const TabTitleContainer = styled.div`
  ${theme.layout.rowBetween};
  width: 100%;
  padding-block: ${rem(12.5)};
  align-items: center;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};

  & button {
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSizes.xs};
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const MatchingTeamList = styled.ul`
  ${theme.layout.column};
  margin-top: ${rem(26)};
  gap: ${rem(8)};
`;

export const MatchingTeamItem = styled.li`
  ${theme.layout.columnCenterX};
  width: 100%;
  padding: ${rem(16)};
  cursor: pointer;
  border-radius: ${rem(10)};
  gap: ${rem(10)};
  background: ${theme.colors.gray100};
`;
