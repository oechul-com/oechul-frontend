import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';

import Layout from '@/components/layout/Layout.tsx';

const LoginPage = () => {
  return (
    <Layout>
      <Button>가입 완료하기</Button>
      <Input
        style={{ marginTop: rem(16) }}
        label={
          <>
            <span>span</span>outer
          </>
        }
        isValid={true}
      />
    </Layout>
  );
};

export default LoginPage;
