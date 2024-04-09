import { ReactNode } from 'react';

import Header from '@/components/layout/Header';
import { LayoutRoot, Main } from '@/components/layout/Layout/Layout.styles.ts';

interface LayoutProps {
  visibleHeader?: boolean;
  arrow?: boolean;
  close?: boolean;
  branding?: boolean;
  title?: string;
  children: ReactNode;
}

const Layout = ({
  visibleHeader = true,
  arrow,
  close,
  branding,
  title,
  children,
}: LayoutProps) => {
  return (
    <LayoutRoot>
      {visibleHeader && (
        <Header arrow={arrow} close={close} branding={branding} title={title} />
      )}
      <Main $visibleHeader={visibleHeader}>{children}</Main>
    </LayoutRoot>
  );
};

export default Layout;
