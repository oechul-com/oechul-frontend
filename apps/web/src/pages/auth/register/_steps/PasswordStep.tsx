import { rem } from '@oechul/styles';
import { Button, Checkbox, Input } from '@oechul/ui';
import { useState } from 'react';

import Tip from '@/components/Tip';
import { POLICY } from '@/constants.ts';
import {
  PrivacyCheckboxContainer,
  RegisterContent,
} from '@/pages/auth/auth.styles.ts';
import { RegisterStepProps } from '@/pages/auth/register';

const PasswordStep = ({ formData, proceedToNextStep }: RegisterStepProps) => {
  const [password, setPassword] = useState<string>(formData.password);
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isTermsAgreed, setIsTermsAgreed] = useState<boolean>(false);
  const [isPrivacyPolicyAgreed, setIsPrivacyPolicyAgreed] =
    useState<boolean>(false);

  const handleSubmit = () => {
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!isTermsAgreed || !isPrivacyPolicyAgreed) {
      alert('모든 약관에 동의해주세요.');
      return;
    }
    proceedToNextStep({ password });
  };

  return (
    <RegisterContent>
      <div>
        <Tip margin={`0 0 ${rem(28)} 0`}>
          학교 메일은 학생증 인증이 면제돼요.
        </Tip>
        <Input
          type="password"
          label="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          style={{ marginTop: rem(16) }}
          label="비밀번호 재입력"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
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
          onClick={handleSubmit}
        >
          가입 완료하기
        </Button>
      </div>
    </RegisterContent>
  );
};

export default PasswordStep;
