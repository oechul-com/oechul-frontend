import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { ReactElement, useMemo, useState, FormEvent } from 'react';

import { emailRegex } from '@/constants.ts';
import { SignInContent } from '@/pages/auth/auth.styles.ts';
import { SignInForm } from '@/pages/auth/signin/types.ts';

interface EmailStepProps {
  formData: SignInForm;
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
    <SignInContent as="form" onSubmit={handleFormSubmit}>
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
    </SignInContent>
  );
};

export default EmailStep;
