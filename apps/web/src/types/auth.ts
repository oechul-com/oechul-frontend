export type AuthSignInPayload = {
  email: string;
  password: string;
};

export type AuthSignUpPayload = {
  departmentId: string;
  universityId: string;
  studentNumber: string;
  sex: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
};

export type AuthSignUpType = {
  id: string;
  message: string;
};

export type TokenType = {
  token: string;
  refreshToken: string;
  deviceUuid: string;
};
