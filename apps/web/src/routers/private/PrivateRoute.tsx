import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { signedInState, authLoadingState } from '@/atoms/authState.ts';

const PrivateRoute = (): ReactElement => {
  const isSignedIn = useRecoilValue(signedInState);
  const isLoading = useRecoilValue(authLoadingState);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isSignedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
