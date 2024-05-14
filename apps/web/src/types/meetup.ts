export type MeetupMemberInfoType = {
  name: string;
  department: string;
  studentNumber: string;
  oneLineInfo: string | null;
  profileUri: string | null;
};

export type NewMeetupTeamInfoType = {
  opponentTeamId: string;
  teamName: string;
  teamUniv: string;
  isNew: boolean; // 생성 된지 1일 이내일 경우 true
  isHot: boolean; // 매칭 신청 2개 이상 받았을 경우 true
  teamProf: string[];
};

export type ApplyReceivedTeamInfoType = {
  opponentTeamId: string;
  teamName: string;
  teamUniv: string;
  matchState: 'SUCCESS' | 'WAITING' | 'FAILURE' | 'REJECT';
};

export type MyMeetupTeamsType = {
  isHost: 'Y' | 'N';
  teamId: string;
  teamProfile: string[];
  teamName: string;
  university: string;
};

export type MeetupTeamType = {
  teamId: number;
  teamName: string;
  teamUniv: string;
  selectedDays: string;
  groupType: number;
  teamMembers: MeetupMemberInfoType[];
};

export type NewMeetupTeamListType = {
  teamList: NewMeetupTeamInfoType[];
};

export type ApplyReceivedTeamListType = {
  teamList: ApplyReceivedTeamInfoType[];
};
