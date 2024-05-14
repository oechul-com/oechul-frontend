import { atom } from 'recoil';

export const loggedInState = atom({
  key: 'loggedInState',
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
