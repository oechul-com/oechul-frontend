import { useQuery } from '@tanstack/react-query';

import { getUniversities } from '@/apis/university.ts';
import { QUERIES } from '@/constants.ts';

export default function useUniversitiesQuery() {
  const query = useQuery({
    queryKey: [QUERIES.UNIVERSITY.KEY],
    queryFn: getUniversities,
  });

  if (query.error) throw query.error;

  return query;
}
