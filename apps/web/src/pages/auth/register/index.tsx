import { ReactElement, useState } from 'react';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';
import Layout from '@/components/layout/Layout';
import { Header } from '@/pages/auth/auth.styles.ts';

import CompleteStep from './_steps/CompleteStep.tsx';
import EmailStep from './_steps/EmailStep.tsx';
import PasswordStep from './_steps/PasswordStep.tsx';
import PersonalStep from './_steps/PersonalStep.tsx';
import SchoolStep from './_steps/SchoolStep.tsx';

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

export interface RegisterStepProps {
  formData: RegisterForm;
  proceedToNextStep: (data: Partial<RegisterForm>) => void;
}

const RegisterPage = (): ReactElement => {
  const { currentStep, Funnel, Step, goToStep } = useFunnel(
    ['school', 'personal', 'email', 'password', 'complete'],
    {
      stepQueryKey: 'step',
    },
  );

  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    gender: '',
    major: '',
    name: '',
    nickname: '',
    password: '',
    school: '',
    studentId: '',
  });

  const handleNextStep = (data: Partial<RegisterForm>) => {
    setRegisterForm(prevForm => ({ ...prevForm, ...data }));
    const nextStepIndex =
      ['school', 'personal', 'email', 'password', 'complete'].indexOf(
        currentStep,
      ) + 1;
    const nextStep = ['school', 'personal', 'email', 'password', 'complete'][
      nextStepIndex
    ];
    goToStep(nextStep);
  };

  return (
    <Layout arrow={true}>
      <Header>가입하기</Header>
      <Funnel>
        <Step name="school">
          <SchoolStep
            formData={registerForm}
            proceedToNextStep={handleNextStep}
          />
        </Step>
        <Step name="personal">
          <PersonalStep
            formData={registerForm}
            proceedToNextStep={handleNextStep}
          />
        </Step>
        <Step name="email">
          <EmailStep
            formData={registerForm}
            proceedToNextStep={handleNextStep}
          />
        </Step>
        <Step name="password">
          <PasswordStep
            formData={registerForm}
            proceedToNextStep={handleNextStep}
          />
        </Step>
        <Step name="complete">
          <CompleteStep />
        </Step>
      </Funnel>
    </Layout>
  );
};

export default RegisterPage;
