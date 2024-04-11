import { rem } from '@oechul/styles';
import { styled } from 'styled-components';

export const ModalHeader = styled.div<{ visibleHeader: boolean }>`
  display: ${props => (props.visibleHeader ? 'flex' : 'none')};
  justify-content: flex-end;

  height: ${rem(47)};
  padding: ${rem(16)} ${rem(16)} 0;

  cursor: pointer;
`;

export const ModalLayout = styled.div<{ height?: string }>`
  ${props => props.theme.layout.columnCenterY};
  width: 100%;

  padding-inline: ${rem(30)};
  height: ${props => props.height || `${rem(393)}`};
  gap: ${rem(26)};
`;
