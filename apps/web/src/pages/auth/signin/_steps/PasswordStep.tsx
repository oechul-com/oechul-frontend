import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { ReactElement, useEffect, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInContent } from '@/pages/auth/auth.styles.ts';
import { SignInForm } from '@/pages/auth/signin/types.ts';

interface PasswordStepProps {
  formData: SignInForm;
  handleSignIn: (password: string) => void;
}

const PasswordStep = ({
  formData,
  handleSignIn,
}: PasswordStepProps): ReactElement | null => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>(formData.password);

  useEffect(() => {
    if (!formData.email) navigate('/auth/signin', { replace: true });
  }, [formData.email, navigate]);

  if (!formData.email) return null;

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSignIn(password);
  };

  return (
    <SignInContent as="form" onSubmit={handleFormSubmit}>
      <Input
        label="비밀번호"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        width="100%"
        style={{ marginTop: rem(23) }}
        disabled={password.length < 6}
        aria-invalid={password.length < 6}
      >
        로그인
      </Button>
    </SignInContent>
  );
};

export default PasswordStep;
