export type RegisterForm = {
  school: string;
  major: string;
  studentId: string;
  gender: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
};

export const initialRegisterForm: RegisterForm = {
  email: '',
  gender: '',
  major: '',
  name: '',
  nickname: '',
  password: '',
  school: '',
  studentId: '',
};

export interface RegisterStepProps {
  formData: RegisterForm;
  proceedToNextStep: (data: Partial<RegisterForm>) => void;
}
