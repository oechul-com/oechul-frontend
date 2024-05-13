import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Tip from '@/components/Tip';
import { emailRegex } from '@/constants.ts';
import { SignUpContent } from '@/pages/auth/auth.styles.ts';
import { SignUpStepProps } from '@/pages/auth/signup/types.ts';
import { validateFormStep } from '@/pages/auth/signup/validation.ts';

const EmailStep = ({ formData, proceed }: SignUpStepProps) => {
  const [email, setEmail] = useState<string>(formData.email);

  const isEmailValid = useMemo(() => {
    if (email.length === 0) return undefined;
    return emailRegex.test(email);
  }, [email]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isEmailValid) proceed({ email });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!validateFormStep(formData, 'email'))
      navigate('/auth/signup', { replace: true });
  }, [formData, navigate]);

  return (
    <SignUpContent as="form" onSubmit={handleFormSubmit}>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>정확한 학교 메일을 입력해주세요.</Tip>
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
      </div>
      <Button type="submit" aria-invalid={!isEmailValid}>
        다음
      </Button>
    </SignUpContent>
  );
};

export default EmailStep;
