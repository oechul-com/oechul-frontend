import { rem } from '@oechul/styles';
import { Button, Input, Select } from '@oechul/ui';
import { FormEvent, ReactElement, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Tip from '@/components/Tip';
import { RegisterContent } from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const genderOptions = [
  { label: '여성', value: 'female' },
  { label: '남성', value: 'male' },
];

const PersonalStep = ({
  formData,
  proceedToNextStep,
}: RegisterStepProps): ReactElement => {
  const navigate = useNavigate();

  const [gender, setGender] = useState<string>(formData.gender);
  const [name, setName] = useState<string>(formData.name);
  const [nickname, setNickname] = useState<string>(formData.nickname);

  useEffect(() => {
    const { school, major, studentId } = formData;
    if (!school || !major || !studentId)
      navigate('/auth/register', { replace: true });
  }, [formData, navigate]);

  const isPersonalStepValid = useMemo(() => {
    return gender !== '' && name.length > 1 && nickname.length > 1;
  }, [gender, name, nickname]);

  const checkNicknameAvailability = async (
    nickname: string,
  ): Promise<boolean> => {
    alert(`nickname: ${nickname}`);
    // todo API call to check if the nickname is available
    return true;
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nicknameAvailable = await checkNicknameAvailability(nickname);
    if (!nicknameAvailable) {
      alert('이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해주세요.');
      return;
    }

    if (isPersonalStepValid) proceedToNextStep({ gender, name, nickname });
  };

  return (
    <RegisterContent as="form" onSubmit={handleFormSubmit}>
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
    </RegisterContent>
  );
};

export default PersonalStep;
