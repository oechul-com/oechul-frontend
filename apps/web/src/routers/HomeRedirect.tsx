import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

import { signedInState } from '@/atoms/authState';
import DashboardPage from '@/pages/dashboard';
import LandingPage from '@/pages/landing';

const HomeRedirect: React.FC = (): ReactElement => {
  const isSignedIn = useRecoilValue(signedInState);
  // const isLoading = useRecoilValue(authLoadingState);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return isSignedIn ? <DashboardPage /> : <LandingPage />;
};

export default HomeRedirect;
