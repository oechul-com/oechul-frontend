import { rem } from '@oechul/styles';
import { Button, Checkbox, Input } from '@oechul/ui';
import { useState, useMemo, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Tip from '@/components/Tip';
import { POLICY } from '@/constants.ts';
import {
  PrivacyCheckboxContainer,
  RegisterContent,
} from '@/pages/auth/auth.styles.ts';
import { RegisterForm } from '@/pages/auth/register/types.ts';

interface PasswordStepProps {
  formData: RegisterForm;
  handleRegister: (password: string) => void;
}

const PasswordStep = ({ formData, handleRegister }: PasswordStepProps) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>(formData.password);
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isTermsAgreed, setIsTermsAgreed] = useState<boolean>(false);
  const [isPrivacyPolicyAgreed, setIsPrivacyPolicyAgreed] =
    useState<boolean>(false);

  useEffect(() => {
    const { school, major, studentId, gender, name, nickname, email } =
      formData;
    if (
      !school ||
      !major ||
      !studentId ||
      !gender ||
      !name ||
      !nickname ||
      !email
    )
      navigate('/auth/register', { replace: true });
  }, [formData, navigate]);

  const isPasswordValid: boolean | undefined = useMemo(() => {
    if (password === '') return undefined;
    return (
      password.length >= 8 &&
      /[0-9]/.test(password) &&
      /[a-zA-Z]/.test(password)
    );
  }, [password]);

  const isPasswordStepValid = useMemo(() => {
    return (
      isPasswordValid &&
      passwordConfirm !== '' &&
      password === passwordConfirm &&
      isTermsAgreed &&
      isPrivacyPolicyAgreed
    );
  }, [
    isPasswordValid,
    passwordConfirm,
    password,
    isTermsAgreed,
    isPrivacyPolicyAgreed,
  ]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isPasswordStepValid) handleRegister(password);
  };

  return (
    <RegisterContent as="form" onSubmit={handleFormSubmit}>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>정확한 학교 메일을 입력해주세요.</Tip>
        <Input
          type="password"
          label={
            isPasswordValid === false
              ? '⚠ 영문과 숫자를 조합해 8글자 이상 입력해주세요.'
              : '비밀번호'
          }
          value={password}
          onChange={e => setPassword(e.target.value)}
          isValid={isPasswordValid === false ? false : undefined}
        />
        <Input
          type="password"
          style={{ marginTop: rem(16) }}
          label={
            passwordConfirm === '' || password === passwordConfirm
              ? '비밀번호 확인'
              : '⚠ 비밀번호가 일치하지 않습니다.'
          }
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          isValid={
            passwordConfirm === '' || password === passwordConfirm
              ? undefined
              : false
          }
        />
      </div>
      <div>
        <PrivacyCheckboxContainer>
          <Checkbox
            label={
              <span>
                [필수] 외출의&nbsp;
                <a href={POLICY.TERM_OF_SERVICE_URL} target="_blank">
                  서비스 이용 약관
                </a>
                에 동의합니다.
              </span>
            }
            checked={isTermsAgreed}
            onChange={() => setIsTermsAgreed(!isTermsAgreed)}
          />
          <Checkbox
            label={
              <span>
                [필수] 외출의&nbsp;
                <a href={POLICY.PRIVACY_POLICY_URL} target="_blank">
                  개인정보 처리방침
                </a>
                에 동의합니다.
              </span>
            }
            checked={isPrivacyPolicyAgreed}
            onChange={() => setIsPrivacyPolicyAgreed(!isPrivacyPolicyAgreed)}
          />
        </PrivacyCheckboxContainer>
        <Button
          style={{ width: '100%', marginTop: rem(32) }}
          type="submit"
          aria-invalid={!isPasswordStepValid}
        >
          가입 완료하기
        </Button>
      </div>
    </RegisterContent>
  );
};

export default PasswordStep;
