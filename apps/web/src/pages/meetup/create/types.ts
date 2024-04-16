export type MeetupForm = {
  groupType: number;
  teamName: string;
  day: string[];
  phoneNumber: string;
  instagram: string;
  kakaoTalk: string;
};

export const initialMeetupForm: MeetupForm = {
  groupType: 0,
  teamName: '',
  day: [],
  phoneNumber: '',
  instagram: '',
  kakaoTalk: '',
};
