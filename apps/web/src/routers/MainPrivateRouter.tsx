import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error';
import LandingPage from '@/pages/landing';

const MainPrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();
  const _pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (_pathname === '') return <LandingPage />;

  // todo 로그인 시 Dashboard 페이지로 이동

  return <ErrorPage />;
};

export default MainPrivateRouter;
