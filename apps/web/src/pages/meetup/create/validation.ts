import { MeetupForm } from '@/pages/meetup/create/types.ts';

const requiredFieldsByStep: Record<
  'name' | 'contact' | 'complete',
  (keyof MeetupForm | 'contactInfo')[]
> = {
  name: ['groupType'],
  contact: ['groupType', 'teamName'],
  complete: ['groupType', 'teamName', 'days', 'contactInfo'],
};

const hasRequiredFields = (
  formData: MeetupForm,
  fields: (keyof MeetupForm | 'contactInfo')[],
): boolean => {
  return fields.every(field => {
    if (field === 'days') {
      return formData.days.length > 0;
    }
    if (field === 'contactInfo') {
      return formData.phoneNumber || formData.kakaoTalk || formData.instagram;
    }
    return Boolean(formData[field]);
  });
};

export const validateFormStep = (
  formData: MeetupForm,
  step: 'name' | 'contact' | 'complete',
): boolean => {
  return hasRequiredFields(formData, requiredFieldsByStep[step]);
};
