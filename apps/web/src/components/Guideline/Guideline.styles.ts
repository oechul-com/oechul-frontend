import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

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
  white-space: pre-line;
  word-break: keep-all;

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
