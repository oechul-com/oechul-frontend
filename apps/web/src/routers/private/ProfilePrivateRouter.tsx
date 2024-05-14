import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import ErrorPage from '@/pages/error.tsx';
import ProfilePage from '@/pages/profile';
import ProfileSettingsPage from '@/pages/profile/settings';
import VerificationPage from '@/pages/profile/verification';
import VerificationCompletePage from '@/pages/profile/verification/complete.tsx';

const ProfilePrivateRouter = (): ReactElement | null => {
  return useRoutes([
    { path: '/', element: <ProfilePage /> },
    { path: '/settings', element: <ProfileSettingsPage /> },
    { path: '/verification', element: <VerificationPage /> },
    {
      path: '/verification/complete',
      element: <VerificationCompletePage />,
    },
    { path: '*', element: <ErrorPage /> },
  ]);
};

export default ProfilePrivateRouter;
