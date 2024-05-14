import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { signedInState, authLoadingState, userState } from '@/atoms/authState';
import useMemberProfileQuery from '@/hooks/queries/useMemberProfileQuery.ts';

export default function useAuth() {
  const setSignedIn = useSetRecoilState(signedInState);
  const setAuthLoading = useSetRecoilState(authLoadingState);
  const setUser = useSetRecoilState(userState);

  const { data, isLoading, isError } = useMemberProfileQuery();

  useEffect(() => {
    if (isLoading) {
      setAuthLoading(true);
      return;
    }

    setAuthLoading(false);

    if (isError || !data || !data.isSuccess) {
      setSignedIn(false);
      setUser(null);
    } else {
      setSignedIn(true);
      setUser(data.result);
    }
  }, [data, isLoading, isError, setSignedIn, setAuthLoading, setUser]);
}
