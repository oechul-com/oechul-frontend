import axios from 'axios';

import { HttpResponse } from '@/types/http.ts';
import {
  UniversitiesType,
  UniversityDepartmentsType,
} from '@/types/university.ts';

export const getUniversities = async () => {
  const { data } = await axios.get<HttpResponse<UniversitiesType>>(
    '/api/v1/universities',
  );

  return data;
};

export const getUniversityDepartments = async (universityId: string) => {
  const { data } = await axios.get<HttpResponse<UniversityDepartmentsType>>(
    `/api/v1/universities/${universityId}`,
  );

  return data;
};
