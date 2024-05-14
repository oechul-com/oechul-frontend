import { useQuery } from '@tanstack/react-query';

import { getMemberProfile } from '@/apis/member.ts';
import { QUERIES } from '@/constants.ts';

export default function useMemberProfileQuery() {
  return useQuery({
    queryKey: [QUERIES.MEMBER.PROFILE_KEY],
    queryFn: getMemberProfile,
  });
}
