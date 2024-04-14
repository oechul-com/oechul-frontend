import { rem, theme } from '@oechul/styles';
import { Button, Text } from '@oechul/ui';
import Lottie from 'lottie-react';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import completeAnim from 'public/static/assets/animation/l7OJ0tWxvK.json';

import Layout from '@/components/layout/Layout';

import {
  CompleteAnimation,
  CompleteButtonContainer,
  CompleteContent,
} from './verification.styles.ts';

const VerificationCompletePage = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Layout close={true}>
      <CompleteContent>
        <CompleteAnimation $size={120}>
          <Lottie animationData={completeAnim} />
        </CompleteAnimation>
        <Text
          textColor={theme.colors.black}
          textAlign="center"
          fontSize={theme.fontSizes['2xl']}
          fontWeight={theme.fontWeights.semibold}
          style={{ marginTop: rem(24) }}
        >
          제출 완료
        </Text>
        <Text
          textColor={theme.colors.gray500}
          textAlign="center"
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.medium}
          lineHeight="140%"
          style={{ marginTop: rem(16) }}
        >
          완료되면 검토 결과를 알려드릴게요.
          <br />
          결과 통보까지 최대 48시간이 소요될 수 있어요.
        </Text>
        <CompleteButtonContainer>
          <Button width="100%" onClick={() => navigate(-1)}>
            마이프로필로 돌아가기
          </Button>
        </CompleteButtonContainer>
      </CompleteContent>
    </Layout>
  );
};

export default VerificationCompletePage;
