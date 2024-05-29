import { ReactElement, useState } from 'react';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';
import Layout from '@/components/layouts/Layout';
import useSignUpMutation from '@/hooks/mutations/useSignUpMutation.ts';
import { Header } from '@/pages/auth/auth.styles.ts';
import { SignUpForm, initialSignUpForm } from '@/pages/auth/signup/types.ts';
import { steps } from '@/pages/auth/signup/validation.ts';
import { AuthSignUpPayload } from '@/types/auth.ts';

import CompleteStep from './_steps/CompleteStep.tsx';
import EmailStep from './_steps/EmailStep.tsx';
import PasswordStep from './_steps/PasswordStep.tsx';
import PersonalStep from './_steps/PersonalStep.tsx';
import SchoolStep from './_steps/SchoolStep.tsx';

const SignUpPage = (): ReactElement => {
  const { currentStep, Funnel, Step, goToStep } = useFunnel(steps, {
    stepQueryKey: 'step',
  });

  const [signUpForm, setSignUpForm] = useState<SignUpForm>(initialSignUpForm);

  const handleNextStep = (data: Partial<SignUpForm>) => {
    setSignUpForm(prevForm => ({ ...prevForm, ...data }));
    goToStep(steps[steps.indexOf(currentStep) + 1]);
  };

  const { mutate: signUp } = useSignUpMutation();

  const handleSignUp = (password: string) => {
    signUp({ ...signUpForm, password } as AuthSignUpPayload, {
      onSuccess: () => {
        handleNextStep({ password });
      },
      onError: () => {
        alert('회원가입에 실패했습니다.');
      },
    });
  };

  const stepComponents: { [key: string]: ReactElement } = {
    school: <SchoolStep formData={signUpForm} proceed={handleNextStep} />,
    personal: <PersonalStep formData={signUpForm} proceed={handleNextStep} />,
    email: <EmailStep formData={signUpForm} proceed={handleNextStep} />,
    password: (
      <PasswordStep formData={signUpForm} handleSignUp={handleSignUp} />
    ),
    complete: <CompleteStep formData={signUpForm} />,
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

export default SignUpPage;
