import { ReactElement, useState } from 'react';

import useFunnel from '@/components/Funnel/Funnel.hooks.tsx';
import Layout from '@/components/layout/Layout';
import InitialStep from '@/pages/meetup/create/_steps/InitialStep.tsx';
import { initialMeetupForm, MeetupForm } from '@/pages/meetup/create/types.ts';

const MeetupCreatePage = (): ReactElement => {
  const [meetupForm, setMeetupForm] = useState<MeetupForm>(initialMeetupForm);
  alert(meetupForm);
  const steps: string[] = ['initial', 'people', 'name', 'contact', 'complete'];
  const { currentStep, Funnel, Step, goToStep } = useFunnel(steps, {
    stepQueryKey: 'step',
  });

  const handleNextStep = (data: Partial<MeetupForm>) => {
    setMeetupForm(prevForm => ({ ...prevForm, ...data }));
    const nextStep = steps[steps.indexOf(currentStep) + 1];
    goToStep(nextStep);
  };

  const visibleHeader: boolean =
    currentStep !== 'initial' && currentStep !== 'complete';

  const stepComponents: { [key: string]: ReactElement } = {
    initial: <InitialStep proceedToNextStep={handleNextStep} />,
    people: <></>,
    name: <></>,
    contact: <></>,
    complete: <></>,
  };

  return (
    <Layout
      visibleHeader={visibleHeader}
      arrow={true}
      title={'과팅 매칭'}
      progress={(steps.indexOf(currentStep) / (steps.length - 1)) * 100}
      borderline={true}
    >
      <div />
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
