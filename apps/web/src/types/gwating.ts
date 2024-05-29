export type GwatingType = {
  teamId: string;
  teamName: string;
  university: string;
  isHost: string;
  teamProfile: string[];
};

export type GwatingCreatePayload = {
  groupType: number;
  teamName: string;
  selectedDays: string;
  phoneNumber?: string;
  instaId?: string;
  kakaoId?: string;
};

export type GwatingCreateResponse = {
  myTeamId: string;
  invitationCode: string;
};

export type GwatingJoinPayload = {
  invitationCode: string;
};

export type GwatingJoinResponse = {
  myTeamId: number;
  teamBoss: string;
};
