import { ArrowLeftIcon, CloseIcon } from '@oechul/icons';
import { useNavigate } from 'react-router-dom';

import {
  Branding,
  HeaderIconButton,
  HeaderInner,
  HeaderRoot,
  HeaderTitle,
} from './Header.styles.ts';

interface HeaderProps {
  arrow?: boolean;
  close?: boolean;
  branding?: boolean;
  borderline: boolean;
  title?: string;
}

const Header = ({ arrow, close, branding, borderline, title }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderRoot $borderline={borderline}>
      <HeaderInner>
        {!!arrow && (
          <HeaderIconButton onClick={() => navigate(-1)}>
            <ArrowLeftIcon width={16} height={16} stroke="black" />
          </HeaderIconButton>
        )}
        {!!close && (
          <HeaderIconButton onClick={() => navigate(-1)}>
            <CloseIcon width={16} height={16} stroke="black" />
          </HeaderIconButton>
        )}
        {!!branding && <Branding src="/static/assets/common/image-logo.svg" />}
        {title && <HeaderTitle>{title}</HeaderTitle>}
      </HeaderInner>
    </HeaderRoot>
  );
};

export default Header;
