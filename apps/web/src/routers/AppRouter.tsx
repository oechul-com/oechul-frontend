import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import useScreenSize from '@/hooks/useScreenSize';
import LoginPage from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import ErrorPage from '@/pages/error';
import MainPrivateRouter from '@/routers/MainPrivateRouter';
import MeetupPrivateRouter from '@/routers/MeetupPrivateRouter';
import ProfilePrivateRouter from '@/routers/ProfilePrivateRouter';

const pages = [
  { path: '/', component: MainPrivateRouter },
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/register', component: Register },
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
