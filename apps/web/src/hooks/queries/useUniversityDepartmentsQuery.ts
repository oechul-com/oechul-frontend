import { useQuery } from '@tanstack/react-query';

import { getUniversityDepartment } from '@/apis/university.ts';
import { QUERIES } from '@/constants.ts';

export default function useUniversityDepartmentsQuery(universityId: string) {
  const query = useQuery({
    queryKey: [QUERIES.UNIVERSITY.DEPARTMENT_KEY, universityId],
    queryFn: () => getUniversityDepartment(universityId),
  });

  if (query.error) throw query.error;

  return query;
}
