import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import useScreenSize from '@/hooks/useScreenSize.ts';
import LoginPage from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import RegisterCompletePage from '@/pages/auth/register/complete.tsx';
import ErrorPage from '@/pages/error.tsx';
import MainPrivateRouter from '@/routers/MainPrivateRouter.tsx';
import MeetupPrivateRouter from '@/routers/MeetupPrivateRouter.tsx';
import ProfilePrivateRouter from '@/routers/ProfilePrivateRouter.tsx';

const pages = [
  { path: '/', component: MainPrivateRouter },
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/register', component: Register },
  { path: '/auth/register/complete', component: RegisterCompletePage },
  { path: '/meetup/*', component: MeetupPrivateRouter },
  { path: '/profile/*', component: ProfilePrivateRouter },
  { path: '*', component: ErrorPage },
];

const AppRouter = () => {
  useScreenSize();

  const element = useRoutes(
    pages.map((page, index) => ({
      path: page.path,
      element: <page.component key={index} />,
      key: index,
    })),
  );

  return <Suspense fallback={<></>}>{element}</Suspense>;
};

export default AppRouter;
