import { ReactElement, ReactNode } from 'react';

import Header from '@/components/layouts/Header';
import DashboardHeader from '@/components/layouts/Header/DashboardHeader.tsx';
import { LayoutRoot, Main } from '@/components/layouts/Layout/Layout.styles.ts';

interface LayoutProps {
  visibleHeader?: boolean;
  dashboardHeader?: boolean;
  borderline?: boolean;
  arrow?: boolean;
  close?: boolean;
  closeAction?: () => void;
  branding?: boolean;
  title?: string;
  progress?: number;
  children: ReactNode;
}

const Layout = ({
  visibleHeader = true,
  dashboardHeader = false,
  borderline = false,
  arrow,
  close,
  closeAction,
  branding,
  title,
  progress,
  children,
}: LayoutProps): ReactElement => {
  return (
    <LayoutRoot>
      {visibleHeader &&
        (dashboardHeader ? (
          <DashboardHeader />
        ) : (
          <Header
            {...{
              arrow,
              close,
              closeAction,
              branding,
              borderline,
              title,
              progress,
            }}
          />
        ))}
      <Main $visibleHeader={visibleHeader}>{children}</Main>
    </LayoutRoot>
  );
};

export default Layout;
