import { rem, theme } from '@oechul/styles';
import { Button } from '@oechul/ui';
import styled from 'styled-components';

export const ProfileSettingsContent = styled.div`
  ${theme.layout.column};
  padding-top: ${rem(28)};
  padding-bottom: ${rem(121)};
`;

export const ProfileImageContainer = styled.span<{ $size: number }>`
  ${theme.layout.center};
  align-self: center;
  width: ${({ $size }) => rem($size)};
  height: ${({ $size }) => rem($size)};
  margin-top: ${rem(38)};
  margin-bottom: ${rem(35)};
  border: ${`${rem(1)} solid ${theme.colors.gray250}`};
  border-radius: 50%;
  background-color: ${theme.colors.gray200};
`;

export const ProfileSaveButtonContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-inline: ${rem(30)};
  border-top: ${`${rem(1)} solid ${theme.colors.gray200}`};
  background-color: ${theme.colors.white};
`;

export const ProfileSaveButton = styled(Button)`
  width: 100%;
  max-width: calc(${theme.sizes.app} - ${rem(60)});
  margin-block: ${rem(12)};
  margin-inline: auto;
`;
