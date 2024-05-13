import { rem, theme } from '@oechul/styles';
import styled, { keyframes } from 'styled-components';

const swipeRight = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const swipeLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const StatScrollerContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: ${rem(35)};
  overflow: hidden;
`;

export const StatScrollerWrapper = styled.div<{
  $speed: number;
  $direction: 'left' | 'right';
}>`
  position: absolute;
  display: flex;

  & > section {
    display: flex;
    animation: ${({ $direction }) =>
        $direction === 'left' ? swipeLeft : swipeRight}
      ${({ $speed }) => `${$speed}s`} linear infinite backwards;
  }
`;

export const StatScrollerItem = styled.div`
  padding: 0 ${rem(8)};

  & > div {
    display: flex;
    gap: ${rem(8)};
    padding: ${rem(10)};
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.semibold};
    white-space: nowrap;
    user-select: none;
    border-radius: ${rem(10)};
    background-color: ${theme.colors.gray200};
  }
`;
