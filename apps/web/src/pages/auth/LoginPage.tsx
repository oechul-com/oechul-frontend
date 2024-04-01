import { Button } from '@oechul/ui';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout.tsx';

const Test = styled.p`
  color: ${props => props.theme.colors.gray500};
`;

const LoginPage = () => {
  return (
    <Layout>
      <Test>asdf</Test>
      <Button>버튼 ㅇㅇ</Button>
    </Layout>
  );
};

export default LoginPage;
