import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Tip from '@/components/Tip';
import { emailRegex } from '@/constants.ts';
import { RegisterContent } from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const EmailStep = ({ formData, proceedToNextStep }: RegisterStepProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(formData.email);

  useEffect(() => {
    const { school, major, studentId, gender, name, nickname } = formData;
    if (!school || !major || !studentId || !gender || !name || !nickname)
      navigate('/auth/register', { replace: true });
  }, [formData, navigate]);

  const isEmailValid = useMemo(() => {
    if (email.length === 0) return undefined;
    return emailRegex.test(email);
  }, [email]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isEmailValid) proceedToNextStep({ email });
  };

  return (
    <RegisterContent as="form" onSubmit={handleFormSubmit}>
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
    </RegisterContent>
  );
};

export default EmailStep;
