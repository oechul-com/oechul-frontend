import { rem, theme } from '@oechul/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderRoot = styled.header<{ $borderline: boolean }>`
  position: fixed;
  width: 100%;
  height: ${rem(68)};
  border-bottom: ${({ $borderline }) =>
    $borderline ? `${rem(1)} solid ${theme.colors.gray200}` : 'none'};
  background-color: ${theme.colors.white};
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

export const BrandingWrapper = styled(Link)`
  ${theme.layout.center};
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  text-decoration: none;
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

export const HeaderIconButton = styled.button`
  ${theme.layout.center};
  padding: ${rem(8)};
  margin-left: ${rem(-8)};
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
`;

export const ProgressBar = styled.div<{ $width: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${({ $width }) => `${$width}%`};
  height: ${rem(2)};
  border: none;
  appearance: none;
  background-color: ${theme.colors.black};
  transition: width 0.3s;
`;

export const ProfileImageWrapper = styled(Link)`
  ${theme.layout.center};
  position: relative;
  width: ${rem(40)};
  height: ${rem(40)};
  cursor: pointer;
  outline: none;
  border: ${rem(0.5)} solid ${theme.colors.gray200};
  border-radius: 50%;
  background-color: ${theme.colors.gray100};
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
