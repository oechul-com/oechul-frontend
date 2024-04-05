import { rem } from '@oechul/styles';
import { Button, Checkbox, Input } from '@oechul/ui';
import { useState } from 'react';

import Layout from '@/components/layout/Layout.tsx';

const LoginPage = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <Layout>
      <Button>가입 완료하기</Button>
      <Button aria-invalid={true}>가입 완료하기</Button>
      <Input style={{ marginTop: rem(16) }} label="이메일" />
      <Checkbox
        checked={check}
        onChange={() => setCheck(!check)}
        label={
          <span>
            [필수] 외출의{' '}
            <a href="/privacy" target="_blank">
              서비스 이용 약관
            </a>
            에 동의합니다.
          </span>
        }
      />
    </Layout>
  );
};

export default LoginPage;
