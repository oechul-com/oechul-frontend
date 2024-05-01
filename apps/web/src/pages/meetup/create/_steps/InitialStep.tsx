import { rem, theme } from '@oechul/styles';
import { Text, Button } from '@oechul/ui';
import { ReactElement } from 'react';

import { CenterContent } from '@/pages/meetup/create/create.styles.ts';
import { MeetupForm } from '@/pages/meetup/create/types.ts';

interface InitialStepProps {
  proceedToNextStep: (data: Partial<MeetupForm>) => void;
}

const InitialStep = ({ proceedToNextStep }: InitialStepProps): ReactElement => {
  return (
    <>
      <CenterContent>
        <Text fontSize={theme.fontSizes['6xl']}>🍻</Text>
        <Text
          textColor={theme.colors.black}
          fontSize={theme.fontSizes['2xl']}
          fontWeight={theme.fontWeights.semibold}
          style={{ marginTop: rem(26) }}
        >
          과팅 이용 안내
        </Text>
        <Text
          textColor={theme.colors.gray500}
          fontWeight={theme.fontWeights.semibold}
          lineHeight="170%"
          style={{ marginTop: rem(80) }}
        >
          1. 과팅 신청 전에 과팅 참가자 모두 외출 회원가입 및 재학생 인증을
          완료해야 해요.
          <br />
          2. 매칭 전에는 닉네임(가명)으로 나타나며, 매칭 완료 시 실명으로
          표시돼요.
          <br />
          3. 원하는 팀에 중복으로 매칭 신청 및 수락이 가능해요.
        </Text>
      </CenterContent>
      <Button style={{ marginBlock: rem(12) }} onClick={proceedToNextStep}>
        매칭하러 가기
      </Button>
    </>
  );
};

export default InitialStep;
