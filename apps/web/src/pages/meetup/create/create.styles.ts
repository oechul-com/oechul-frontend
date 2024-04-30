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

export const CreateCompleteContent = styled.div`
  ${theme.layout.columnCenterX};
  padding-top: ${rem(76)};
  padding-bottom: ${rem(121)};
`;

export const CompleteContent = styled.div`
  ${theme.layout.column};
  width: 100%;
  margin-top: ${rem(31)};
  gap: ${rem(16)};
`;

export const InviteCodeInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InviteCodeCopyButton = styled.button`
  ${theme.layout.center};

  position: absolute;
  right: ${rem(15)};
  top: 50%;
  transform: translateY(-50%);
  padding: ${rem(12)} ${rem(16)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  border: none;
  border-radius: ${rem(6)};
  background-color: ${theme.colors.gray200};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.gray300};
  }
`;

export const AccordionHeader = styled.div`
  ${theme.layout.centerY};
  position: relative;
  width: 100%;
  padding: ${rem(16)};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeights.semibold};
  gap: ${rem(10)};
`;

export const AccordionToggleContainer = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const AccordionContent = styled.ul`
  padding: ${rem(10)} ${rem(16)} ${rem(10)} ${rem(36)};
  margin: 0;
  list-style: none;
  counter-reset: list-counter;
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.xs};
  line-height: 170%;

  & > li {
    counter-increment: list-counter;
    padding-left: ${rem(20)};
    position: relative;

    &::before {
      content: counter(list-counter) '.';
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;
