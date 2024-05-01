import { ReactElement, useState } from 'react';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';
import Layout from '@/components/layout/Layout';
import { Header } from '@/pages/auth/auth.styles.ts';
import {
  RegisterForm,
  initialRegisterForm,
} from '@/pages/auth/register/types.ts';
import { steps } from '@/pages/auth/register/validation.ts';

import CompleteStep from './_steps/CompleteStep.tsx';
import EmailStep from './_steps/EmailStep.tsx';
import PasswordStep from './_steps/PasswordStep.tsx';
import PersonalStep from './_steps/PersonalStep.tsx';
import SchoolStep from './_steps/SchoolStep.tsx';

const RegisterPage = (): ReactElement => {
  const { currentStep, Funnel, Step, goToStep } = useFunnel(steps, {
    stepQueryKey: 'step',
  });

  const [registerForm, setRegisterForm] =
    useState<RegisterForm>(initialRegisterForm);

  const handleNextStep = (data: Partial<RegisterForm>) => {
    setRegisterForm(prevForm => ({ ...prevForm, ...data }));
    goToStep(steps[steps.indexOf(currentStep) + 1]);
  };

  const handleRegister = (password: string) => {
    // todo - register logic
    handleNextStep({ password });
  };

  const stepComponents: { [key: string]: ReactElement } = {
    school: <SchoolStep formData={registerForm} proceed={handleNextStep} />,
    personal: <PersonalStep formData={registerForm} proceed={handleNextStep} />,
    email: <EmailStep formData={registerForm} proceed={handleNextStep} />,
    password: (
      <PasswordStep formData={registerForm} handleRegister={handleRegister} />
    ),
    complete: <CompleteStep formData={registerForm} />,
  };

  return (
    <Layout visibleHeader={currentStep !== 'complete'} arrow={true}>
      {currentStep !== 'complete' && <Header>가입하기</Header>}
      <Funnel>
        {steps.map(step => (
          <Step key={step} name={step}>
            {stepComponents[step]}
          </Step>
        ))}
      </Funnel>
    </Layout>
  );
};

export default RegisterPage;
