export type MeetupForm = {
  numberOfPeople: number;
  teamName: string;
  day: string[];
  phoneNumber: string;
  instagram: string;
  kakaoTalk: string;
};

export const initialMeetupForm: MeetupForm = {
  numberOfPeople: 0,
  teamName: '',
  day: [],
  phoneNumber: '',
  instagram: '',
  kakaoTalk: '',
};
