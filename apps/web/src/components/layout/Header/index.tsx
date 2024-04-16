import { ArrowLeftIcon, CloseIcon } from '@oechul/icons';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Branding,
  HeaderIconButton,
  HeaderInner,
  HeaderRoot,
  HeaderTitle,
  ProgressBar,
} from './Header.styles.ts';

interface HeaderProps {
  arrow?: boolean;
  close?: boolean;
  closeAction?: () => void;
  branding?: boolean;
  borderline: boolean;
  title?: string;
  progress?: number;
}

const Header = ({
  arrow,
  close,
  closeAction,
  branding,
  borderline,
  title,
  progress,
}: HeaderProps): ReactElement => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (closeAction) closeAction();
    else navigate(-1);
  };

  return (
    <HeaderRoot $borderline={borderline}>
      <HeaderInner>
        {!!arrow && (
          <HeaderIconButton onClick={() => navigate(-1)}>
            <ArrowLeftIcon width={16} height={16} stroke="black" />
          </HeaderIconButton>
        )}
        {!!close && (
          <HeaderIconButton onClick={handleClose}>
            <CloseIcon width={16} height={16} stroke="black" />
          </HeaderIconButton>
        )}
        {!!branding && <Branding src="/static/assets/common/image-logo.svg" />}
        {title && <HeaderTitle>{title}</HeaderTitle>}
      </HeaderInner>
      {progress && <ProgressBar $width={progress} />}
    </HeaderRoot>
  );
};

export default Header;
