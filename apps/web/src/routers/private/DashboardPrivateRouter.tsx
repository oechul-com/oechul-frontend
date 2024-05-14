import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import DashboardInviteCodeInputPage from '@/pages/dashboard/inviteCInp.tsx';
import ErrorPage from '@/pages/error.tsx';

const DashboardPrivateRouter = (): ReactElement | null => {
  return useRoutes([
    {
      path: '/inviteCInp',
      element: <DashboardInviteCodeInputPage />,
    },
    { path: '*', element: <ErrorPage /> },
  ]);
};

export default DashboardPrivateRouter;
