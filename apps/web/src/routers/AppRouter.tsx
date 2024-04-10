import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import LoginPage from '@/pages/auth/login.tsx';
import Register from '@/pages/auth/register.tsx';
import ErrorPage from '@/pages/error.tsx';
import MainPrivateRouter from '@/routers/MainPrivateRouter.tsx';
import MeetupPrivateRouter from '@/routers/MeetupPrivateRouter.tsx';
import ProfilePrivateRouter from '@/routers/ProfilePrivateRouter.tsx';

const pages = [
  { path: '/', component: MainPrivateRouter },
  { path: '/login', component: LoginPage },
  { path: '/register', component: Register },
  { path: '/meetup/*', component: MeetupPrivateRouter },
  { path: '/profile/*', component: ProfilePrivateRouter },
  { path: '*', component: ErrorPage },
];

const AppRouter = () => {
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
