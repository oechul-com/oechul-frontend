import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { ReactElement, useMemo, useState, FormEvent } from 'react';

import { Content } from '@/pages/auth/auth.styles.ts';
import { LoginForm } from '@/pages/auth/login';

interface EmailStepProps {
  formData: LoginForm;
  proceedToNextStep: (email: string) => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EmailStep = ({
  formData,
  proceedToNextStep,
}: EmailStepProps): ReactElement => {
  const [email, setEmail] = useState<string>(formData.email);

  const isEmailValid = useMemo(
    () => email.length > 0 && emailRegex.test(email),
    [email],
  );

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isEmailValid) proceedToNextStep(email);
  };

  return (
    <Content as="form" onSubmit={handleFormSubmit}>
      <Input
        label={isEmailValid ? '이메일' : '⚠ 올바르지 않은 이메일 형식입니다.'}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        isValid={isEmailValid ? undefined : false}
      />
      <Button
        type="submit"
        width="100%"
        style={{ marginTop: rem(23) }}
        disabled={!isEmailValid}
        aria-invalid={!isEmailValid}
      >
        다음
      </Button>
    </Content>
  );
};

export default EmailStep;
