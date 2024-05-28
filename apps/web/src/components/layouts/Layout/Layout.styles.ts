import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Main = styled.main<{ $visibleHeader: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: ${theme.sizes.app};
  padding-top: ${({ $visibleHeader }) => ($visibleHeader ? rem(68) : '0')};
  padding-inline: ${rem(30)};
  margin-inline: auto;
`;
