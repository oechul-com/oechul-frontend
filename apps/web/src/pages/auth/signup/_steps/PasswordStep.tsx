import { rem } from '@oechul/styles';
import { Button, Checkbox, Input } from '@oechul/ui';
import { useState, useMemo, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Tip from '@/components/Tip';
import { POLICY, URL_PATHS } from '@/constants.ts';
import {
  PrivacyCheckboxContainer,
  SignUpContent,
} from '@/pages/auth/auth.styles.ts';
import { SignUpForm } from '@/pages/auth/signup/types.ts';
import { validateFormStep } from '@/pages/auth/signup/validation.ts';

interface PasswordStepProps {
  formData: SignUpForm;
  handleSignUp: (password: string) => void;
}

const PasswordStep = ({ formData, handleSignUp }: PasswordStepProps) => {
  const [password, setPassword] = useState<string>(formData.password);
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isTermsAgreed, setIsTermsAgreed] = useState<boolean>(false);
  const [isPrivacyPolicyAgreed, setIsPrivacyPolicyAgreed] =
    useState<boolean>(false);

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
    if (isPasswordStepValid) handleSignUp(password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!validateFormStep(formData, 'password'))
      navigate(URL_PATHS.AUTH.SIGN_UP, { replace: true });
  }, [formData, navigate]);

  return (
    <SignUpContent as="form" onSubmit={handleFormSubmit}>
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
    </SignUpContent>
  );
};

export default PasswordStep;
