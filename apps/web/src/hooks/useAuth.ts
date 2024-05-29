import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import {
  signedInState,
  authLoadingState,
  userState,
} from '@/atoms/authState.ts';
import useMemberProfileQuery from '@/hooks/queries/useMemberProfileQuery.ts';

export default function useAuth() {
  const setSignedIn = useSetRecoilState(signedInState);
  const setPermissionLoading = useSetRecoilState(authLoadingState);
  const setUser = useSetRecoilState(userState);

  const { data, isLoading, isError } = useMemberProfileQuery();

  useEffect(() => {
    if (isLoading) {
      setPermissionLoading(true);
      return;
    }

    setPermissionLoading(false);

    if (isError || !data || !data.isSuccess) {
      setSignedIn(false);
      setUser(null);
    } else {
      setSignedIn(true);
      setUser(data.result);
    }
  }, [data, isLoading, isError, setSignedIn, setPermissionLoading, setUser]);
}
