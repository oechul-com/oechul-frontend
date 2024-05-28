import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const ServiceWaitingModalContainer = styled.div`
  ${theme.layout.columnCenterX};
  position: relative;
  width: 100%;
  max-width: ${theme.sizes.app};
  padding: ${rem(30)} ${rem(25)};
  margin-inline: auto;
  border-radius: ${rem(10)};
  background-color: ${theme.colors.white};
`;
