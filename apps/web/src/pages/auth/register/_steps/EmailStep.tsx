import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { useState } from 'react';

import Tip from '@/components/Tip';
import { RegisterContent } from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const EmailStep = ({ formData, proceedToNextStep }: RegisterStepProps) => {
  const [email, setEmail] = useState<string>(formData.email);

  return (
    <RegisterContent>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          학교 메일은 학생증 인증이 면제돼요.
        </Tip>
        <Input
          label="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <Button onClick={() => proceedToNextStep({ email })}>다음</Button>
    </RegisterContent>
  );
};

export default EmailStep;
