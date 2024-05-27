import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

import { authLoadingState, signedInState } from '@/atoms/authState';
import Loading from '@/components/Loading';
import DashboardPage from '@/pages/dashboard';
import LandingPage from '@/pages/landing';

const HomeRedirect = (): ReactElement => {
  const isSignedIn = useRecoilValue(signedInState);
  const isLoading = useRecoilValue(authLoadingState);

  if (isLoading) return <Loading />;

  return isSignedIn ? <DashboardPage /> : <LandingPage />;
};

export default HomeRedirect;
