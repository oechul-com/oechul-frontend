import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

import { authLoadingState, signedInState } from '@/atoms/authState.ts';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/useAuth.ts';
import DashboardPage from '@/pages/dashboard';
import LandingPage from '@/pages/landing';

const HomeRedirect = (): ReactElement => {
  useAuth();

  const isSignedIn = useRecoilValue(signedInState);
  const isLoading = useRecoilValue(authLoadingState);

  if (isLoading) return <Loading />;

  return isSignedIn ? <DashboardPage /> : <LandingPage />;
};

export default HomeRedirect;
