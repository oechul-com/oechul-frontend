import { useQuery } from '@tanstack/react-query';

import { getMemberVerifications } from '@/apis/verification';
import { QUERIES } from '@/constants';

export default function useMemberVerificationQuery(memberId: string) {
  const query = useQuery({
    queryKey: [QUERIES.VERIFICATION.KEY, memberId],
    queryFn: () => getMemberVerifications(memberId),
  });

  if (query.error) throw query.error;

  return query;
}
