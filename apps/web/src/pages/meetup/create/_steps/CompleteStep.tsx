import { rem, theme } from '@oechul/styles';
import { Input, Text } from '@oechul/ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Guideline from '@/components/Guideline';
import { COPY_MESSAGE } from '@/constants.ts';
import {
  GuideContainer,
  CompleteWrapper,
  InviteCodeCopy,
  InviteCodeInputContainer,
  SaveButton,
  SaveButtonContainer,
} from '@/pages/meetup/create/create.styles.ts';
import { MeetupForm } from '@/pages/meetup/create/types.ts';
import { validateFormStep } from '@/pages/meetup/create/validation.ts';
import { copyTextToClipboard } from '@/utils/clipboard.tsx';

interface CompleteStepProps {
  formData: MeetupForm;
}

const guidelines = [
  {
    emoji: '💁🏻‍♀️',
    title: '초대 코드 사용법',
    contents: [
      '팀 코드를 저장하거나 캡쳐해서 팀원들에게 보내주세요!',
      '초기에 설정된 팀 인원은 수정이 불가능해요. 추가하고 싶은 인원이 있으면 새롭게 팀을 만들어보세요!',
    ],
  },
  {
    emoji: '💘',
    title: '매칭은 어떤 방식으로 이루어지나요?',
    contents: [
      '매칭리스트 → 원하는 팀 선택 → 매칭 신청 → 상대방이 매칭 수락 시 매칭 성공',
      '상대방의 매칭 요청 → 매칭 수락 시 매칭 성공',
    ],
  },
  {
    emoji: '💘',
    title: '매칭이 성공하면 어떻게 되나요?',
    contents: [
      '매칭 성공 시 각 팀에게 해당 페이지가 전송됩니다. 대표 연락처를 통해 매칭 날짜와 장소를 정해주세요!\n매칭 성공 시 팀 삭제 및 매칭 취소가 불가능해요.',
    ],
  },
];

const CompleteStep = ({ formData }: CompleteStepProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!validateFormStep(formData, 'complete'))
      navigate('/meetup/create', { replace: true });
  }, [formData, navigate]);

  const handleCopyClick = (inviteCode: string) => {
    if (copyTextToClipboard(inviteCode)) alert(COPY_MESSAGE.SUCCESS);
    else alert(COPY_MESSAGE.FAILURE);
  };

  return (
    <>
      <CompleteWrapper>
        <Text fontSize={rem(96)}>🎊</Text>
        <Text
          style={{ marginTop: rem(28) }}
          fontSize={theme.fontSizes['2xl']}
          fontWeight={theme.fontWeights.semibold}
        >
          팀 생성 완료!
        </Text>

        <GuideContainer>
          <InviteCodeInputContainer>
            <Input
              label="초대 코드"
              value="13D2-4WE2-4KD2-1E2D"
              readOnly={true}
            />
            <InviteCodeCopy
              onClick={() => handleCopyClick('13D2-4WE2-4KD2-1E22D')}
            >
              복사
            </InviteCodeCopy>
          </InviteCodeInputContainer>

          {guidelines.map((data, index) => (
            <Guideline key={index} {...data} />
          ))}
        </GuideContainer>
      </CompleteWrapper>

      <SaveButtonContainer>
        <SaveButton
          variant="accent"
          width="100%"
          onClick={() => navigate('/', { replace: true })}
        >
          매칭하러 가기
        </SaveButton>
      </SaveButtonContainer>
    </>
  );
};

export default CompleteStep;
