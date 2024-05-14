import { atom } from 'recoil';

import { MemberType } from '@/types/member.ts';

export const signedInState = atom({
  key: 'signedInState',
  default: false,
});

export const authLoadingState = atom<boolean>({
  key: 'authLoadingState',
  default: true,
});

export const userState = atom<MemberType | null>({
  key: 'userState',
  default: null,
});
