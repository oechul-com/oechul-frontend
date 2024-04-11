import React from 'react';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';

import EmailStep from './_steps/EmailStep.tsx';
import PasswordStep from './_steps/PasswordStep.tsx';

const LoginFunnel: React.FC = () => {
  const { currentStep, Funnel, Step, goToStep } = useFunnel(
    ['email', 'password', '완료'],
    { stepQueryKey: 'step' },
  );

  const handleNext = () => {
    if (currentStep === 'email') {
      goToStep('password');
    } else {
      goToStep('완료');
    }
  };

  return (
    <Funnel>
      <Step name="email">
        <EmailStep onNext={handleNext} />
      </Step>
      <Step name="password">
        <PasswordStep onNext={handleNext} />
      </Step>
      <Step name="완료">
        <div>로그인 절차가 완료되었습니다!</div>
      </Step>
    </Funnel>
  );
};

export default LoginFunnel;
