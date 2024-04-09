import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import ErrorPage from '@/pages/error.tsx';
import MixersPage from '@/pages/mixers';
import MixersCreatePage from '@/pages/mixers/create.tsx';
import MatchedMixersPage from '@/pages/mixers/matched.tsx';
import NewMixersPage from '@/pages/mixers/new.tsx';

const MixersPrivateRouter = (): ReactElement => {
  const { pathname } = useLocation();
  const _pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  switch (_pathname) {
    case '/mixers':
      return <MixersPage />;
    case '/mixers/create':
      return <MixersCreatePage />;
    case '/mixers/matched':
      return <MatchedMixersPage />;
    case '/mixers/new':
      return <NewMixersPage />;
    default:
      return <ErrorPage />;
  }
};

export default MixersPrivateRouter;
