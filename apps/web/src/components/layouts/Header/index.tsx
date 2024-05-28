import { ArrowLeftIcon, CloseIcon } from '@oechul/icons';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './Header.styles.ts';

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
    <styles.HeaderRoot $borderline={borderline}>
      <styles.HeaderInner>
        {!!arrow && (
          <styles.HeaderIconButton onClick={() => navigate(-1)}>
            <ArrowLeftIcon width={16} height={16} stroke="black" />
          </styles.HeaderIconButton>
        )}
        {!!close && (
          <styles.HeaderIconButton onClick={handleClose}>
            <CloseIcon width={16} height={16} stroke="black" />
          </styles.HeaderIconButton>
        )}
        {!!branding && (
          <styles.Branding src="/static/assets/common/image-logo.svg" />
        )}
        {title && <styles.HeaderTitle>{title}</styles.HeaderTitle>}
      </styles.HeaderInner>
      {progress && <styles.ProgressBar $width={progress} />}
    </styles.HeaderRoot>
  );
};

export default Header;
