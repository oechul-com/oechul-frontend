// atoms/authState.ts
import { atom } from 'recoil';

export const signedInState = atom({
  key: 'signedInState',
  default: false,
});

export const authLoadingState = atom<boolean>({
  key: 'authLoadingState',
  default: true,
});

export const userState = atom<unknown | null>({
  key: 'userState',
  default: null,
});
