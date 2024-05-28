import { ReactElement, useState } from 'react';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';
import Layout from '@/components/layouts/Layout';
import { steps } from '@/pages/meetup/create/validation.ts';

import CompleteStep from './_steps/CompleteStep.tsx';
import ContactStep from './_steps/ContactStep.tsx';
import InitialStep from './_steps/InitialStep.tsx';
import NameStep from './_steps/NameStep.tsx';
import TypeStep from './_steps/TypeStep.tsx';
import { initialMeetupForm, MeetupForm } from './types.ts';

const MeetupCreatePage = (): ReactElement => {
  const [meetupForm, setMeetupForm] = useState<MeetupForm>(initialMeetupForm);

  const { currentStep, Funnel, Step, goToStep } = useFunnel(steps, {
    stepQueryKey: 'step',
  });

  const handleNextStep = (data: Partial<MeetupForm>) => {
    setMeetupForm(prevForm => ({ ...prevForm, ...data }));
    goToStep(steps[steps.indexOf(currentStep) + 1]);
  };

  const handleCreate = (data: Partial<MeetupForm>) => {
    // todo - meetup create logic
    handleNextStep(data);
  };

  const visibleHeader: boolean =
    currentStep !== 'initial' && currentStep !== 'complete';

  const stepComponents: { [key: string]: ReactElement } = {
    initial: <InitialStep proceedToNextStep={handleNextStep} />,
    type: <TypeStep formData={meetupForm} proceedToNextStep={handleNextStep} />,
    name: <NameStep formData={meetupForm} proceedToNextStep={handleNextStep} />,
    contact: <ContactStep formData={meetupForm} handleCreate={handleCreate} />,
    complete: <CompleteStep formData={meetupForm} />,
  };

  return (
    <Layout
      visibleHeader={visibleHeader}
      arrow={true}
      title="과팅 매칭"
      progress={(steps.indexOf(currentStep) / (steps.length - 1)) * 100}
      borderline={true}
    >
      <Funnel>
        {steps.map(step => (
          <Step key={step} name={step}>
            {stepComponents[step]}
          </Step>
        ))}
      </Funnel>
    </Layout>
  );
};

export default MeetupCreatePage;
