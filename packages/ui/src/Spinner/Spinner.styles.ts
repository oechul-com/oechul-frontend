import { rem, theme } from '@oechul/styles';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const SpinnerWrapper = styled.div<{ $size: number; $width: number }>`
  display: inline-block;
  width: ${({ $size }) => rem($size)};
  height: ${({ $size }) => rem($size)};
  border: ${({ $width }) => rem($width)} solid ${theme.colors.gray250};
  border-radius: 50%;
  border-top: ${({ $width }) => rem($width)} solid ${theme.colors.black};
  animation: ${spin} 1.25s ease-in-out infinite;
`;
