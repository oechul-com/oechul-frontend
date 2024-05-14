import instance from '@/apis/index.ts';
import { HttpResponse } from '@/types/http.ts';
import { MemberType } from '@/types/member.ts';

export const getMemberProfile = async () => {
  const { data } = await instance.get<HttpResponse<MemberType>>(
    '/v1/members/profile',
  );

  return data;
};
