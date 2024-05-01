import instance from '@/apis/index.ts';
import {
  AuthSignInPayload,
  AuthSignUp,
  AuthSignUpPayload,
  TokenType,
} from '@/types/auth.ts';

export const postSignIn = async (body: AuthSignInPayload) => {
  const { data } = await instance.post<TokenType>('/v1/members/signin', body);

  return data;
};

export const postSignUp = async (body: AuthSignUpPayload) => {
  const { data } = await instance.post<AuthSignUp>('/v1/members/signup', body);

  return data;
};
