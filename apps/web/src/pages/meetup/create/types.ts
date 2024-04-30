export type MeetupForm = {
  groupType: string;
  teamName: string;
  days: string[];
  phoneNumber: string;
  instagram: string;
  kakaoTalk: string;
};

export const initialMeetupForm: MeetupForm = {
  groupType: '',
  teamName: '',
  days: [],
  phoneNumber: '',
  instagram: '',
  kakaoTalk: '',
};

export interface MeetupCreateStepProps {
  formData: MeetupForm;
  proceedToNextStep: (data: Partial<MeetupForm>) => void;
}
