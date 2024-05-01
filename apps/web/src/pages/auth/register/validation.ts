import { RegisterForm } from '@/pages/auth/register/types.ts';

export const steps: string[] = [
  'school',
  'personal',
  'email',
  'password',
  'complete',
];

type StepsType = (typeof steps)[number];
type ValidStepsType = Exclude<StepsType, 'school'>;

const requiredFieldsByStep: Record<ValidStepsType, (keyof RegisterForm)[]> = {
  personal: ['school', 'major', 'studentId'],
  email: ['school', 'major', 'studentId', 'nickname', 'gender', 'name'],
  password: [
    'school',
    'major',
    'studentId',
    'gender',
    'name',
    'nickname',
    'email',
  ],
  complete: [
    'school',
    'major',
    'studentId',
    'gender',
    'name',
    'nickname',
    'email',
    'password',
  ],
};

export const validateFormStep = (
  formData: RegisterForm,
  step: ValidStepsType,
): boolean => {
  const fields = requiredFieldsByStep[step];
  return fields && fields.every(field => Boolean(formData[field]));
};
