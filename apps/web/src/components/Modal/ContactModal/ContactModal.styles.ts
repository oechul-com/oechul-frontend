import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const ContactTriggerButton = styled.button`
  padding: 0;
  margin: 0;
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  border: none;
  background: none;
`;

export const ContactModalContainer = styled.div`
  ${theme.layout.columnCenterX};
  position: relative;
  width: 100%;
  max-width: ${theme.sizes.app};
  padding: ${rem(30)} ${rem(25)};
  margin-inline: auto;
  border-radius: ${rem(10)};
  background-color: ${theme.colors.white};
`;

export const SocialList = styled.div`
  ${theme.layout.column};
  width: 100%;
  margin-top: ${rem(26)};
  gap: ${rem(16)};
`;
