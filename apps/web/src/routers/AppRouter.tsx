import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Register from 'src/pages/auth/signup';

import useScreenSize from '@/hooks/useScreenSize.ts';
import AlertPage from '@/pages/alert';
import LoginPage from '@/pages/auth/login';
import ErrorPage from '@/pages/error.tsx';
import MainPrivateRouter from '@/routers/MainPrivateRouter.tsx';
import MeetupPrivateRouter from '@/routers/MeetupPrivateRouter.tsx';
import ProfilePrivateRouter from '@/routers/ProfilePrivateRouter.tsx';

import DashboardPrivateRouter from './DashboardPrivateRouter';

const pages = [
  { path: '/', component: MainPrivateRouter },
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/signup', component: Register },
  { path: '/dashboard/*', component: DashboardPrivateRouter },
  { path: '/meetup/*', component: MeetupPrivateRouter },
  { path: '/profile/*', component: ProfilePrivateRouter },
  { path: '/alert', component: AlertPage },
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
