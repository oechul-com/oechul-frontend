import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { ReactElement, useMemo, useState, FormEvent } from 'react';

import { emailRegex } from '@/constants.ts';
import { LoginContent } from '@/pages/auth/auth.styles.ts';
import { LoginForm } from '@/pages/auth/login';

interface EmailStepProps {
  formData: LoginForm;
  proceedToNextStep: (email: string) => void;
}

const EmailStep = ({
  formData,
  proceedToNextStep,
}: EmailStepProps): ReactElement => {
  const [email, setEmail] = useState<string>(formData.email);

  const isEmailValid = useMemo(() => {
    if (email.length === 0) return undefined;
    return emailRegex.test(email);
  }, [email]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isEmailValid) proceedToNextStep(email);
  };

  return (
    <LoginContent as="form" onSubmit={handleFormSubmit}>
      <Input
        label={
          isEmailValid === false
            ? '⚠ 올바르지 않은 이메일 형식입니다.'
            : '이메일'
        }
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        isValid={isEmailValid === false ? false : undefined}
      />
      <Button
        type="submit"
        width="100%"
        style={{ marginTop: rem(23) }}
        aria-invalid={!isEmailValid}
      >
        다음
      </Button>
    </LoginContent>
  );
};

export default EmailStep;
