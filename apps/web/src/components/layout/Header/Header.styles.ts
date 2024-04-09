import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const HeaderRoot = styled.header`
  position: fixed;
  width: 100%;
  height: ${rem(70)};
`;

export const HeaderInner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: ${theme.sizes.app};
  height: 100%;
  margin-inline: auto;
  align-items: center;
  justify-content: space-between;
  padding-inline: ${rem(30)};
`;

export const Branding = styled.img`
  height: ${rem(23)};
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  font-weight: ${theme.fontWeights.semibold};
  left: 50%;
  transform: translateX(-50%);
`;
