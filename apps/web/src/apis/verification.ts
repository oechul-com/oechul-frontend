import instance from '@/apis/index.ts';
import { HttpResponse } from '@/types/http.ts';
import { VerificationType } from '@/types/verification.ts';

export const getMemberVerifications = async (memberId: string) => {
  const { data } = await instance.get<HttpResponse<VerificationType>>(
    `/v1/verifications/${memberId}`,
  );

  return data;
};

export const postMemberVerification = async (memberId: string, image: File) => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await instance.post<HttpResponse<VerificationType>>(
    `/v1/verifications/${memberId}`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );

  return data;
};
