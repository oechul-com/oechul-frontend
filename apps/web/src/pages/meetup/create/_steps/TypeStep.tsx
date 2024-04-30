import { ReactElement, useState } from 'react';

import {
  SaveButtonContainer,
  SaveButton,
  StepContent,
  Title,
  TypeButton,
  StepElementContainer,
} from '@/pages/meetup/create/create.styles.ts';
import { MeetupCreateStepProps } from '@/pages/meetup/create/types.ts';

const TypeStep = ({
  formData,
  proceedToNextStep,
}: MeetupCreateStepProps): ReactElement => {
  const [groupType, setGroupType] = useState<string>(formData.groupType);

  const isFormValid: boolean = !!groupType;

  const handleFormSubmit = () => {
    if (!isFormValid) return;
    proceedToNextStep({ groupType });
  };

  return (
    <>
      <StepContent>
        <Title>참여 인원을 선택하세요</Title>
        <StepElementContainer>
          {['2', '3', '4'].map(type => (
            <TypeButton
              key={type}
              onClick={() => {
                setGroupType(type);
              }}
              $current={groupType === type}
            >
              {type}명
            </TypeButton>
          ))}
        </StepElementContainer>
      </StepContent>
      <SaveButtonContainer>
        <SaveButton
          width="100%"
          onClick={handleFormSubmit}
          disabled={!isFormValid}
          aria-invalid={!isFormValid}
        >
          다음
        </SaveButton>
      </SaveButtonContainer>
    </>
  );
};

export default TypeStep;
