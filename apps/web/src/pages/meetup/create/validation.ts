import { MeetupForm } from '@/pages/meetup/create/types.ts';

export const steps: string[] = [
  'initial',
  'type',
  'name',
  'contact',
  'complete',
];

type StepsType = (typeof steps)[number];
type ValidStepsType = Exclude<StepsType, 'initial' | 'type'>;

const requiredFieldsByStep: Record<
  ValidStepsType,
  (keyof MeetupForm | 'contactInfo')[]
> = {
  name: ['groupType'],
  contact: ['groupType', 'teamName'],
  complete: ['groupType', 'teamName', 'days', 'contactInfo'],
};

export const validateFormStep = (
  formData: MeetupForm,
  step: ValidStepsType,
): boolean => {
  const fields = requiredFieldsByStep[step];

  return fields.every(field => {
    if (field === 'days') return formData.days.length > 0;

    if (field === 'contactInfo')
      return formData.phoneNumber || formData.kakaoTalk || formData.instagram;

    return Boolean(formData[field]);
  });
};
