import { useQuery } from '@tanstack/react-query';

import { getGwatingTeams } from '@/apis/gwating.ts';
import { QUERIES } from '@/constants.ts';

export default function useGwatingTeamsQuery() {
  return useQuery({
    queryKey: [QUERIES.GWATING.TEAMS_KEY],
    queryFn: getGwatingTeams,
  });
}
