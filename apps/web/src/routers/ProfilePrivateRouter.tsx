import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error.tsx';
import ProfilePage from '@/pages/profile';
import ProfileSettingsPage from '@/pages/profile/settings.tsx';
import VerificationPage from '@/pages/profile/verification.tsx';

const ProfilePrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();

  switch (pathname) {
    case '/profile':
      return <ProfilePage />;
    case '/profile/settings':
      return <ProfileSettingsPage />;
    case '/profile/verification':
      return <VerificationPage />;
    default:
      return <ErrorPage />;
  }
};

export default ProfilePrivateRouter;
