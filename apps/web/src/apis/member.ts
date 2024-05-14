import instance from '@/apis/index.ts';

export const getMemberProfile = async () => {
  const { data } = await instance.get('/v1/members/profile');

  return data;
};
