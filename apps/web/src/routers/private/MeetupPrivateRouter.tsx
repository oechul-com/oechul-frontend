import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import ErrorPage from '@/pages/error.tsx';
import MeetupPage from '@/pages/meetup';
import MeetupCreatePage from '@/pages/meetup/create';
import MatchedMeetupPage from '@/pages/meetup/matched.tsx';
import NewMeetupPage from '@/pages/meetup/new.tsx';

const MeetupPrivateRouter = (): ReactElement | null => {
  return useRoutes([
    { path: '/', element: <MeetupPage /> },
    { path: '/create', element: <MeetupCreatePage /> },
    { path: '/matched', element: <MatchedMeetupPage /> },
    { path: '/new', element: <NewMeetupPage /> },
    { path: '*', element: <ErrorPage /> },
  ]);
};

export default MeetupPrivateRouter;
