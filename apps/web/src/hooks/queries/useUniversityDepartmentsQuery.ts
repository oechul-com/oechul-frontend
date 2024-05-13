import { useQuery } from '@tanstack/react-query';

import { getUniversityDepartments } from '@/apis/university.ts';
import { QUERIES } from '@/constants.ts';

export default function useUniversityDepartmentsQuery(universityId: string) {
  const query = useQuery({
    queryKey: [QUERIES.UNIVERSITY.DEPARTMENT_KEY, universityId],
    queryFn: () => getUniversityDepartments(universityId),
    enabled: !!universityId,
  });

  if (query.error) throw query.error;

  return query;
}
