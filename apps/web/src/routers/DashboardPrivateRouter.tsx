import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import DashboardPage from '@/pages/dashboard';
import DashboardInviteCodeInputPage from '@/pages/dashboard/inviteCInp';
import ErrorPage from '@/pages/error';

const DashboardPrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();
  const _pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  switch (_pathname) {
    case '/dashboard':
      return <DashboardPage />;
    case '/dashboard/inviteCInp':
      return <DashboardInviteCodeInputPage />;
    default:
      return <ErrorPage />;
  }
};

export default DashboardPrivateRouter;
