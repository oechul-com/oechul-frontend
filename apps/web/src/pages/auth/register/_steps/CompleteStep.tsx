import { rem, theme } from '@oechul/styles';
import { Button, Text } from '@oechul/ui';
import { useNavigate } from 'react-router-dom';

import { RegisterCompleteContent } from '@/pages/auth/auth.styles.ts';

const CompleteStep = () => {
  const navigate = useNavigate();

  return (
    <>
      <RegisterCompleteContent>
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
      </RegisterCompleteContent>
      <Button
        style={{ marginBottom: rem(30) }}
        onClick={() => navigate('/auth/login', { replace: true })}
      >
        시작하기
      </Button>
    </>
  );
};

export default CompleteStep;
