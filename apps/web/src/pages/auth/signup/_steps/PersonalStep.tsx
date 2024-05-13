import { rem } from '@oechul/styles';
import { Button, Input, Select } from '@oechul/ui';
import { FormEvent, ReactElement, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Tip from '@/components/Tip';
import { SignUpContent } from '@/pages/auth/auth.styles.ts';
import { SignUpStepProps } from '@/pages/auth/signup/types.ts';
import { validateFormStep } from '@/pages/auth/signup/validation.ts';

const genderOptions = [
  { label: '여성', value: 'F' },
  { label: '남성', value: 'M' },
];

const PersonalStep = ({ formData, proceed }: SignUpStepProps): ReactElement => {
  const [gender, setGender] = useState<string>(formData.sex);
  const [name, setName] = useState<string>(formData.name);
  const [nickname, setNickname] = useState<string>(formData.nickname);

  const isPersonalStepValid = useMemo(() => {
    return gender !== '' && name.length > 1 && nickname.length > 1;
  }, [gender, name, nickname]);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (isPersonalStepValid) proceed({ sex: gender, name, nickname });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!validateFormStep(formData, 'personal'))
      navigate('/auth/signup', { replace: true });
  }, [formData, navigate]);

  return (
    <SignUpContent as="form" onSubmit={handleFormSubmit}>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          매칭에 사용할 닉네임(가명)을 입력해주세요.
        </Tip>
        <Select
          label="성별"
          options={genderOptions}
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
      <Button type="submit" aria-invalid={!isPersonalStepValid}>
        다음
      </Button>
    </SignUpContent>
  );
};

export default PersonalStep;
