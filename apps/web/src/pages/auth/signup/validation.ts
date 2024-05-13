import { SignUpForm } from '@/pages/auth/signup/types.ts';

export const steps: string[] = [
  'school',
  'personal',
  'email',
  'password',
  'complete',
];

type StepsType = (typeof steps)[number];
type ValidStepsType = Exclude<StepsType, 'school'>;

const requiredFieldsByStep: Record<ValidStepsType, (keyof SignUpForm)[]> = {
  personal: ['universityId', 'departmentId', 'studentNumber'],
  email: [
    'universityId',
    'departmentId',
    'studentNumber',
    'nickname',
    'sex',
    'name',
  ],
  password: [
    'universityId',
    'departmentId',
    'studentNumber',
    'sex',
    'name',
    'nickname',
    'email',
  ],
  complete: [
    'universityId',
    'departmentId',
    'studentNumber',
    'sex',
    'name',
    'nickname',
    'email',
    'password',
  ],
};

export const validateFormStep = (
  formData: SignUpForm,
  step: ValidStepsType,
): boolean => {
  const fields = requiredFieldsByStep[step];
  return fields && fields.every(field => Boolean(formData[field]));
};
