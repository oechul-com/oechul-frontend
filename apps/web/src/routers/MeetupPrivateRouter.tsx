import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error';
import MeetupPage from '@/pages/meetup';
import MeetupCreatePage from '@/pages/meetup/create';
import MatchedMeetupPage from '@/pages/meetup/matched';
import NewMeetupPage from '@/pages/meetup/new';

const MeetupPrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();
  const _pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  switch (_pathname) {
    case '/meetup':
      return <MeetupPage />;
    case '/meetup/create':
      return <MeetupCreatePage />;
    case '/meetup/matched':
      return <MatchedMeetupPage />;
    case '/meetup/new':
      return <NewMeetupPage />;
    default:
      return <ErrorPage />;
  }
};

export default MeetupPrivateRouter;
