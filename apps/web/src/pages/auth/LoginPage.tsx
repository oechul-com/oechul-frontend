import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout.tsx';

const Test = styled.p`
  color: ${props => props.theme.colors.black[4]};
`;

const LoginPage = () => {
  return (
    <Layout>
      <Test>asdf</Test>
    </Layout>
  );
};

export default LoginPage;
