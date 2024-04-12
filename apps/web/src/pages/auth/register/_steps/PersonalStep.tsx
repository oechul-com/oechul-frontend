import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { ReactElement, useState } from 'react';

import Tip from '@/components/Tip';
import { RegisterContent } from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const PersonalStep = ({
  formData,
  proceedToNextStep,
}: RegisterStepProps): ReactElement => {
  const [gender, setGender] = useState<string>(formData.gender);
  const [name, setName] = useState<string>(formData.name);
  const [nickname, setNickname] = useState<string>(formData.nickname);

  return (
    <RegisterContent>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          매칭에 사용할 닉네임(가명)을 입력해주세요.
        </Tip>
        <Input
          label="성별"
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
        <Input
          style={{ marginTop: rem(16) }}
          label="이름"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          style={{ marginTop: rem(16) }}
          label="닉네임(가명)"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
      </div>
      <Button onClick={() => proceedToNextStep({ gender, name, nickname })}>
        다음
      </Button>
    </RegisterContent>
  );
};

export default PersonalStep;
