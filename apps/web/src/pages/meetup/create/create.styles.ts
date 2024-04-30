import { rem, theme } from '@oechul/styles';
import { Button } from '@oechul/ui';
import styled from 'styled-components';

export const CenterContent = styled.div`
  ${theme.layout.center};
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
`;

export const Subtitle = styled.p`
  margin-top: ${rem(9)};
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
`;

export const StepContent = styled.div`
  ${theme.layout.column};
  padding-top: ${rem(28)};
  padding-bottom: ${rem(121)};
`;

export const SaveButtonContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-inline: ${rem(30)};
  border-top: ${`${rem(1)} solid ${theme.colors.gray200}`};
  background-color: ${theme.colors.white};
`;

export const SaveButton = styled(Button)`
  width: 100%;
  max-width: calc(${theme.sizes.app} - ${rem(60)});
  margin-block: ${rem(12)};
  margin-inline: auto;
`;

export const StepElementContainer = styled.div`
  ${theme.layout.column};
  margin-top: ${rem(28)};
  gap: ${rem(16)};
`;

export const TypeButton = styled.button<{ $current: boolean }>`
  height: ${rem(68)};
  padding: ${rem(26)} ${rem(24)};
  color: ${({ $current }) =>
    $current ? theme.colors.black : theme.colors.gray500};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  text-align: left;
  outline: none;
  cursor: pointer;
  border: ${`${rem(1)} solid`};
  border-color: ${({ $current }) =>
    $current ? theme.colors.black : theme.colors.gray250};
  border-radius: ${rem(10)};
  background-color: ${theme.colors.white};
  transition: all 0.2s ease;
`;

export const DayElementContainer = styled.div`
  ${theme.layout.center};
  justify-content: space-between;
  margin-top: ${rem(26)};
  gap: ${rem(6)};
  overflow-y: auto;
`;

export const DayElement = styled.div<{ $selected: boolean }>`
  color: ${({ $selected }) =>
    $selected ? theme.colors.white : theme.colors.gray500};
  font-weight: ${theme.fontWeights.semibold};
  padding: ${rem(16)};
  cursor: pointer;
  border: ${rem(1)} solid
    ${({ $selected }) =>
      $selected ? theme.colors.black : theme.colors.gray250};
  border-radius: ${rem(10)};
  background-color: ${({ $selected }) =>
    $selected ? theme.colors.black : theme.colors.white};
  transition: all 200ms ease;
`;
