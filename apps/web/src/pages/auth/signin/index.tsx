import { useQueryClient } from '@tanstack/react-query';
import { ReactElement, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useFunnel from '@/components/Funnel/Funnel.hooks';
import Layout from '@/components/layouts/Layout';
import { QUERIES, URL_PATHS } from '@/constants.ts';
import useSignInMutation from '@/hooks/mutations/useSignInMutation.ts';
import { Header, SignInNavigationText } from '@/pages/auth/auth.styles.ts';
import { SignInForm, initialSignInForm } from '@/pages/auth/signin/types.ts';
import { AuthSignInPayload } from '@/types/auth.ts';

import EmailStep from './_steps/EmailStep';
import PasswordStep from './_steps/PasswordStep';

const SignInPage = (): ReactElement => {
  const { Funnel, Step, goToStep } = useFunnel(['email', 'password'], {
    stepQueryKey: 'step',
  });

  const [signInForm, setSignInForm] = useState<SignInForm>(initialSignInForm);

  const handleEmailNextStep = (email: string): void => {
    setSignInForm(prevForm => ({ ...prevForm, email }));
    goToStep('password');
  };

  const { mutate: signIn } = useSignInMutation();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSignIn = (password: string): void => {
    signIn({ ...signInForm, password } as AuthSignInPayload, {
      onSuccess: () => {
        queryClient
          .invalidateQueries({
            queryKey: [QUERIES.MEMBER.PROFILE_KEY],
          })
          .then(() => navigate('/'));
      },
      onError: () => {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      },
    });
  };

  return (
    <Layout arrow={true}>
      <Header>로그인</Header>
      <div>
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
      </div>
      <SignInNavigationText>
        <Link to={URL_PATHS.AUTH.SIGN_UP}>가입하기</Link>또는
        <Link to={URL_PATHS.AUTH.RECOVER}>계정찾기</Link>
      </SignInNavigationText>
    </Layout>
  );
};

export default SignInPage;
