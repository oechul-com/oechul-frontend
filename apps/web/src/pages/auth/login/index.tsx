import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';
import Layout from '@/components/layout/Layout';
import { Header, LoginNavigationText } from '@/pages/auth/auth.styles.ts';

import EmailStep from './_steps/EmailStep.tsx';
import PasswordStep from './_steps/PasswordStep.tsx';

export type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = (): ReactElement => {
  const { Funnel, Step, goToStep } = useFunnel(['email', 'password'], {
    stepQueryKey: 'step',
  });

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleEmailNextStep = (email: string) => {
    setLoginForm(prevForm => ({ ...prevForm, email }));
    goToStep('password');
  };

  const handleLogin = (password: string) => {
    setLoginForm(prevForm => ({ ...prevForm, password }));

    // todo - login logic
  };

  return (
    <Layout arrow={true}>
      <Header>로그인</Header>
      <Funnel>
        <Step name="email">
          <EmailStep
            formData={loginForm}
            proceedToNextStep={handleEmailNextStep}
          />
        </Step>
        <Step name="password">
          <PasswordStep formData={loginForm} handleLogin={handleLogin} />
        </Step>
      </Funnel>
      <LoginNavigationText>
        <Link to="/auth/register">가입하기</Link>또는
        <Link to="/auth/recover">계정찾기</Link>
      </LoginNavigationText>
    </Layout>
  );
};

export default LoginPage;
