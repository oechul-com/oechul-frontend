import { rem } from '@oechul/styles';
import { Input } from '@oechul/ui';
import { ReactElement, useState } from 'react';

import {
  DayElement,
  DayElementContainer,
  SaveButton,
  SaveButtonContainer,
  StepContent,
  StepElementContainer,
  Subtitle,
  Title,
} from '@/pages/meetup/create/create.styles.ts';
import { MeetupForm } from '@/pages/meetup/create/types.ts';

const DAYS: string[] = ['월', '화', '수', '목', '금', '토', '일'];

interface ContactStepProps {
  formData: MeetupForm;
  handleCreate: (data: Partial<MeetupForm>) => void;
}

const ContactStep = ({
  formData,
  handleCreate,
}: ContactStepProps): ReactElement => {
  const [days, setDays] = useState<string[]>(formData.days);
  const [phoneNumber, setPhoneNumber] = useState<string>(formData.phoneNumber);
  const [instagram, setInstagram] = useState<string>(formData.instagram);
  const [kakaoTalk, setKakaoTalk] = useState<string>(formData.kakaoTalk);

  const toggleDay = (day: string) => {
    if (days.includes(day)) setDays(days.filter(d => d !== day));
    else setDays([...days, day]);
  };

  const isFormValid: boolean =
    days.length > 0 &&
    [phoneNumber, instagram, kakaoTalk].some(value => !!value);

  const handleFormSubmit = () => {
    if (!isFormValid) return;

    handleCreate({
      days,
      phoneNumber,
      instagram,
      kakaoTalk,
    });
  };

  return (
    <>
      <StepContent>
        <Title>우리팀이 희망하는 요일</Title>
        <Subtitle>최대 7개까지 선택할 수 있어요</Subtitle>
        <DayElementContainer>
          {DAYS.map((day: string) => (
            <DayElement
              key={day}
              $selected={days.includes(day)}
              onClick={() => toggleDay(day)}
            >
              {day}
            </DayElement>
          ))}
        </DayElementContainer>
        <Title style={{ marginTop: rem(36) }}>대표 연락처 입력</Title>
        <Subtitle>하나 이상의 연락가능한 대표 연락처를 작성해주세요</Subtitle>
        <StepElementContainer style={{ marginTop: rem(26) }}>
          <Input
            label="전화번호"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <Input
            label="인스타그램 아이디"
            value={instagram}
            onChange={e => setInstagram(e.target.value)}
          />
          <Input
            label="카카오톡 아이디"
            value={kakaoTalk}
            onChange={e => setKakaoTalk(e.target.value)}
          />
        </StepElementContainer>
      </StepContent>
      <SaveButtonContainer>
        <SaveButton
          width="100%"
          aria-invalid={!isFormValid}
          onClick={handleFormSubmit}
        >
          다음
        </SaveButton>
      </SaveButtonContainer>
    </>
  );
};

export default ContactStep;
