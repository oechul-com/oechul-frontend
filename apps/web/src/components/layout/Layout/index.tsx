import { ReactElement, ReactNode } from 'react';

import Header from '@/components/layout/Header';
import { LayoutRoot, Main } from '@/components/layout/Layout/Layout.styles.ts';

interface LayoutProps {
  visibleHeader?: boolean;
  arrow?: boolean;
  close?: boolean;
  closeAction?: () => void;
  branding?: boolean;
  borderline?: boolean;
  title?: string;
  progress?: number;
  children: ReactNode;
}

const Layout = ({
  visibleHeader = true,
  arrow,
  close,
  closeAction,
  branding,
  borderline = false,
  title,
  progress,
  children,
}: LayoutProps): ReactElement => {
  return (
    <LayoutRoot>
      {visibleHeader && (
        <Header
          arrow={arrow}
          close={close}
          closeAction={closeAction}
          branding={branding}
          borderline={borderline}
          title={title}
          progress={progress}
        />
      )}
      <Main $visibleHeader={visibleHeader}>{children}</Main>
    </LayoutRoot>
  );
};

export default Layout;
