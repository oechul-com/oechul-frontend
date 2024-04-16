import { ReactElement } from 'react';

import { MeetupForm } from '@/pages/meetup/create/types.ts';

interface InitialStepProps {
  formData: MeetupForm;
  proceedToNextStep: (data: Partial<MeetupForm>) => void;
}

const InitialStep = ({
  formData,
  proceedToNextStep,
}: InitialStepProps): ReactElement => {
  alert(formData);
  alert(proceedToNextStep);
  return <></>;
};

export default InitialStep;
