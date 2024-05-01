export type AuthSignInPayload = {
  email: string;
  password: string;
};

export type AuthSignUpPayload = {
  university_id: string;
  department_id: string;
  ssn: string;
  sex: string;
  name: string;
  nickname: string;
  email: string;
};

export type AuthSignUp = {
  id: string;
  message: string;
};

export type TokenType = {
  refreshToken: string;
};
