import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error.tsx';
import LandingPage from '@/pages/landing.tsx';

const MainPrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();

  if (pathname === '/') return <LandingPage />;

  // todo 로그인 시 Dashboard 페이지로 이동

  return <ErrorPage />;
};

export default MainPrivateRouter;
