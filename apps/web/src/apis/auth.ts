import axios from 'axios';

import {
  AuthSignInPayload,
  AuthSignUpType,
  AuthSignUpPayload,
  TokenType,
} from '@/types/auth.ts';

export const postSignIn = async (body: AuthSignInPayload) => {
  const { data } = await axios.post<TokenType>('/api/v1/members/signin', body);

  return data;
};

export const postSignUp = async (body: AuthSignUpPayload) => {
  const { data } = await axios.post<AuthSignUpType>(
    '/api/v1/members/signup',
    body,
  );

  return data;
};
