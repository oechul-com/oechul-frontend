import { rem, theme } from '@oechul/styles';
import { Button, Text } from '@oechul/ui';

import {
  RegisterCenterContent,
  RegisterContent,
} from '@/pages/auth/auth.styles.ts';

const CompleteStep = () => {
  return (
    <RegisterContent>
      <RegisterCenterContent>
        <Text fontSize={rem(96)}>🎊</Text>
        <Text
          style={{ marginTop: rem(28) }}
          fontSize={theme.fontSizes['2xl']}
          fontWeight={theme.fontWeights.semibold}
        >
          회원가입 완료!
        </Text>
        <Text style={{ marginTop: rem(20) }} textColor={theme.colors.gray500}>
          외출 서비스를 통해 새로운 인연을 찾아보세요
        </Text>
      </RegisterCenterContent>
      <Button>시작하기</Button>
    </RegisterContent>
  );
};

export default CompleteStep;
