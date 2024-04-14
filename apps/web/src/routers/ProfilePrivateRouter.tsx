import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error.tsx';
import ProfilePage from '@/pages/profile';
import ProfileSettingsPage from '@/pages/profile/settings';
import VerificationPage from '@/pages/profile/verification';
import VerificationCompletePage from '@/pages/profile/verification/complete';

const ProfilePrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();
  const _pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  switch (_pathname) {
    case '/profile':
      return <ProfilePage />;
    case '/profile/settings':
      return <ProfileSettingsPage />;
    case '/profile/verification':
      return <VerificationPage />;
    case '/profile/verification/complete':
      return <VerificationCompletePage />;
    default:
      return <ErrorPage />;
  }
};

export default ProfilePrivateRouter;
