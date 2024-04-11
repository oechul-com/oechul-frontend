import { rem } from '@oechul/styles';
import { Button, Input } from '@oechul/ui';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import { Content, Header, NavigationText } from '@/pages/auth/auth.styles.ts';
import LoginFunnel from '@/pages/auth/login/LoginFunnel.tsx';

const LoginPage = (): ReactElement => {
  return (
    <Layout arrow={true}>
      <Header>로그인</Header>
      <LoginFunnel />
      <Content>
        <Input label="이메일" />
        <Button width="100%" style={{ marginTop: rem(23) }}>
          다음
        </Button>
      </Content>
      <NavigationText>
        <Link to="/auth/register">가입하기</Link> 또는{' '}
        <Link to="/auth/recover">계정찾기</Link>
      </NavigationText>
    </Layout>
  );
};

export default LoginPage;
