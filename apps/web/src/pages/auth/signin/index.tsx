import { ReactElement, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useFunnel from '@/components/Funnel/Funnel.hooks';
import Layout from '@/components/layout/Layout';
import useSignInMutation from '@/hooks/mutations/useSignInMutation.ts';
import { Header, SignInNavigationText } from '@/pages/auth/auth.styles';
import { SignInForm, initialSignInForm } from '@/pages/auth/signin/types.ts';
import { AuthSignInPayload } from '@/types/auth.ts';

import EmailStep from './_steps/EmailStep';
import PasswordStep from './_steps/PasswordStep';

const SignInPage = (): ReactElement => {
  const navigate = useNavigate();

  const { Funnel, Step, goToStep } = useFunnel(['email', 'password'], {
    stepQueryKey: 'step',
  });

  const [signInForm, setSignInForm] = useState<SignInForm>(initialSignInForm);

  const handleEmailNextStep = (email: string): void => {
    setSignInForm(prevForm => ({ ...prevForm, email }));
    goToStep('password');
  };

  const { mutate: signIn } = useSignInMutation();

  const handleSignIn = (password: string): void => {
    signIn({ ...signInForm, password } as AuthSignInPayload, {
      onSuccess: () => {
        navigate('/', { replace: true });
      },
      onError: () => {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      },
    });
  };

  return (
    <Layout arrow={true}>
      <Header>로그인</Header>
      <Funnel>
        <Step name="email">
          <EmailStep
            formData={signInForm}
            proceedToNextStep={handleEmailNextStep}
          />
        </Step>
        <Step name="password">
          <PasswordStep formData={signInForm} handleSignIn={handleSignIn} />
        </Step>
      </Funnel>
      <SignInNavigationText>
        <Link to="/auth/register">가입하기</Link> 또는
        <Link to="/auth/recover">계정찾기</Link>
      </SignInNavigationText>
    </Layout>
  );
};

export default SignInPage;
