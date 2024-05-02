export type SignUpForm = {
  universityId: string;
  departmentId: string;
  studentNumber: string;
  sex: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
};

export const initialSignUpForm: SignUpForm = {
  email: '',
  sex: '',
  departmentId: '',
  name: '',
  nickname: '',
  password: '',
  universityId: '',
  studentNumber: '',
};

export interface SignUpStepProps {
  formData: SignUpForm;
  proceed: (data: Partial<SignUpForm>) => void;
}
