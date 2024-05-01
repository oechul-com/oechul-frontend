import { rem } from '@oechul/styles';
import { Input } from '@oechul/ui';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Day,
  DayGrid,
  SaveButton,
  SaveButtonContainer,
  StepContainer,
  OptionSelectorContainer,
  Subtitle,
  Title,
} from '@/pages/meetup/create/create.styles.ts';
import { MeetupForm } from '@/pages/meetup/create/types.ts';
import { validateFormStep } from '@/pages/meetup/create/validation.ts';

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

  const navigate = useNavigate();
  useEffect(() => {
    if (!validateFormStep(formData, 'contact'))
      navigate('/meetup/create', { replace: true });
  }, [formData, navigate]);

  return (
    <>
      <StepContainer>
        <Title>우리팀이 희망하는 요일</Title>
        <Subtitle>최대 7개까지 선택할 수 있어요</Subtitle>
        <DayGrid>
          {DAYS.map((day: string) => (
            <Day
              key={day}
              $selected={days.includes(day)}
              onClick={() => toggleDay(day)}
            >
              {day}
            </Day>
          ))}
        </DayGrid>
        <Title style={{ marginTop: rem(36) }}>대표 연락처 입력</Title>
        <Subtitle>하나 이상의 연락가능한 대표 연락처를 작성해주세요</Subtitle>
        <OptionSelectorContainer style={{ marginTop: rem(26) }}>
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
        </OptionSelectorContainer>
      </StepContainer>
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
