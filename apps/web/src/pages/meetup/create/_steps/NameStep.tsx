import { rem, theme } from '@oechul/styles';
import { Text, Input } from '@oechul/ui';
import { FormEvent, ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SaveButton,
  SaveButtonContainer,
  StepContainer,
  Subtitle,
  Title,
} from '@/pages/meetup/create/create.styles.ts';
import { MeetupCreateStepProps } from '@/pages/meetup/create/types.ts';
import { validateFormStep } from '@/pages/meetup/create/validation.ts';

const NameStep = ({
  formData,
  proceedToNextStep,
}: MeetupCreateStepProps): ReactElement => {
  const [teamName, setTeamName] = useState<string>(formData.teamName);

  const isFormValid: boolean = !!teamName;

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!isFormValid) return;
    proceedToNextStep({ teamName });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!validateFormStep(formData, 'name'))
      navigate('/meetup/create', { replace: true });
  }, [formData, navigate]);

  return (
    <form onSubmit={handleFormSubmit}>
      <StepContainer>
        <Title>팀명을 입력해주세요</Title>
        <Subtitle>재미있는 팀명일수록 매칭 확률이 높아요</Subtitle>
        <Input
          label="ex) 한잔 하실?"
          value={teamName}
          onChange={e => setTeamName(e.target.value)}
          maxLength={15}
          style={{ marginTop: rem(19) }}
        />
        <Text
          style={{ marginTop: rem(11) }}
          textColor={theme.colors.gray500}
          textAlign="end"
          fontSize={theme.fontSizes.xs}
          fontWeight={theme.fontWeights.medium}
        >
          {teamName.length}/15
        </Text>
      </StepContainer>
      <SaveButtonContainer>
        <SaveButton width="100%" type="submit" aria-invalid={!isFormValid}>
          다음
        </SaveButton>
      </SaveButtonContainer>
    </form>
  );
};

export default NameStep;
