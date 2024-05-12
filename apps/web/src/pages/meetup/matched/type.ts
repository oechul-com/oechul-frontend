type dayDescriptionType = {
  [key: string]: string;
};

type MatchingModalOpenType = {
  [key: string]: boolean;
};

type StudentInfoType = {
  name: string;
  img: string;
  department: string;
  studentId: string;
  selfIntroduction: string;
};

type MyMatchingTeamType = {
  member: StudentInfoType[];
  title: string;
  school: string;
  days: string[];
};

type MatchingTeamType = {
  member: StudentInfoType[];
  title: string;
  school?: string;
  days: string[];
};

type RequireApplyMatchingTeamType = MatchingTeamType & {
  type: string;
};

export type {
  dayDescriptionType,
  MatchingModalOpenType,
  StudentInfoType,
  MyMatchingTeamType,
  MatchingTeamType,
  RequireApplyMatchingTeamType,
};
