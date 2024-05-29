import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { signedInState, authLoadingState } from '@/atoms/authState.ts';
import Loading from '@/components/Loading';
import useAuth from '@/hooks/useAuth.ts';

const PrivateRoute = (): ReactElement => {
  useAuth();

  const isSignedIn = useRecoilValue(signedInState);
  const isLoading = useRecoilValue(authLoadingState);

  if (isLoading) return <Loading />;

  return isSignedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
