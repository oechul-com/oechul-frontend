import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error';
import MeetupPage from '@/pages/meetup';
import MeetupCreatePage from '@/pages/meetup/create';
import MatchedSuccessPage from '@/pages/meetup/matched/success';
import MeetupTeamPage from '@/pages/meetup/team';
import MeetupTeamListPage from '@/pages/meetup/teamList';

const MeetupPrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();
  const _pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  const teamIndex = pathname.match(/\/meetup\/team\/(\d+)/);
  const teamType = pathname.match(/\/meetup\/team\/\d+\/(\w+)/);

  let index = null;
  let type = null;

  if (teamIndex) {
    index = teamIndex[1];
  }

  if (teamType) {
    type = teamType[1];
  }

  switch (_pathname) {
    case '/meetup':
      return <MeetupPage />;
    case '/meetup/create':
      return <MeetupCreatePage />;
    case `/meetup/team/${index}`: // 동적 경로 처리
      return <MeetupTeamPage teamId={index} />;
    case `/meetup/team/${index}/${type}`:
      return <MeetupTeamListPage teamType={type} />;
    case '/meetup/matched/success':
      return <MatchedSuccessPage />;
    default:
      return <ErrorPage />;
  }
};

export default MeetupPrivateRouter;
