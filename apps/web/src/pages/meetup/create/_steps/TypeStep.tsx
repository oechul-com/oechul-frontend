import { ReactElement, useState } from 'react';

import {
  SaveButtonContainer,
  SaveButton,
  StepContainer,
  Title,
  GroupType,
  OptionSelectorContainer,
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
      <StepContainer>
        <Title>참여 인원을 선택하세요</Title>
        <OptionSelectorContainer>
          {['2', '3', '4'].map(type => (
            <GroupType
              key={type}
              onClick={() => {
                setGroupType(type);
              }}
              $current={groupType === type}
            >
              {type}명
            </GroupType>
          ))}
        </OptionSelectorContainer>
      </StepContainer>
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
