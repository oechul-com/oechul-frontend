import { rem, theme } from '@oechul/styles';
import { styled } from 'styled-components';

export const CloseButton = styled.div<{ $visibleClose: boolean }>`
  ${theme.layout.center};
  position: absolute;
  top: ${rem(16)};
  right: ${rem(16)};
  display: ${({ $visibleClose }) => ($visibleClose ? 'block' : 'none')};
  padding: ${rem(16)};
  cursor: pointer;
`;

export const ModalContent = styled.div`
  ${theme.layout.columnCenterY};
  width: 100%;
  padding: ${rem(48)} ${rem(30)} ${rem(40)} ${rem(30)};
  gap: ${rem(26)};
`;
