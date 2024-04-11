import { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';
import { Header } from '@/pages/auth/auth.styles.ts';

const LoginPage = (): ReactElement => {
  return (
    <Layout arrow={true}>
      <Header>로그인</Header>
    </Layout>
  );
};

export default LoginPage;
