import {
  Branding,
  HeaderInner,
  HeaderRoot,
  HeaderTitle,
} from '@/components/layout/Header/Header.styles.ts';

interface HeaderProps {
  arrow?: boolean;
  close?: boolean;
  branding?: boolean;
  title?: string;
}

const Header = ({ arrow, close, branding, title }: HeaderProps) => {
  return (
    <HeaderRoot>
      <HeaderInner>
        {!!arrow && <p>left arrow</p>}
        {!!close && <p>close</p>}
        {!!branding && <Branding src="/static/assets/image-logo-header.svg" />}
        {title && <HeaderTitle>{title}</HeaderTitle>}
      </HeaderInner>
    </HeaderRoot>
  );
};

export default Header;
