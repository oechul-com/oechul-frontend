export enum MemberRole {
  STUDENT_UNVERIFIED = 'STUDENT_UNVERIFIED',
  STUDENT_VERIFIED = 'STUDENT_VERIFIED',
}

export type MemberType = {
  id: number;
  email: string;
  studentNumber: string;
  sex: string;
  role: MemberRole;
  name: string;
  nickname: string;
  profileUri: string;
  oneLineInfo: string;
};
