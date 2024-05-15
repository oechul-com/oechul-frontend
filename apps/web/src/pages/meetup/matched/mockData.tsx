import {
  ApplyReceivedTeamListType,
  MeetupTeamType,
  MyMeetupTeamsType,
  NewMeetupTeamListType,
} from '@/types/meetup';

export const MY_MEETUP_TEAM_LIST: MyMeetupTeamsType[] = [
  {
    teamId: 1,
    isHost: 'Y',
    teamProfile: [
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
    ],
    teamName: '소통합시다잉1',
    university: '한국외국어대학교 글로벌캠퍼스',
  },
  {
    teamId: 2,
    isHost: 'N',
    teamProfile: [
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
    ],
    teamName: '소통합시다잉2',
    university: '한국외국어대학교 글로벌캠퍼스',
  },
  {
    teamId: 3,
    isHost: 'N',
    teamProfile: [
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
    ],
    teamName: '소통합시다잉3',
    university: '한국외국어대학교 글로벌캠퍼스',
  },
];

export const MEETUP_TEAM_DETAIL_LIST: MeetupTeamType[] = [
  {
    teamId: 1,
    teamName: '소통합시다잉1',
    teamUniv: '한국외국어대학교 글로벌캠퍼스',
    selectedDays: '월,화,금,토',
    groupType: 2,
    teamMembers: [
      {
        name: 'LEE',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx2',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
    ],
  },
  {
    teamId: 2,
    teamName: '소통합시다잉2',
    teamUniv: '한국외국어대학교 글로벌캠퍼스',
    selectedDays: '월,화,금,토',
    groupType: 4,
    teamMembers: [
      {
        name: 'LEE',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx2',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
    ],
  },
  {
    teamId: 3,
    teamName: '소통합시다잉3',
    teamUniv: '한국외국어대학교 글로벌캠퍼스',
    selectedDays: '월,화,금,토',
    groupType: 2,
    teamMembers: [
      {
        name: 'LEE',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx2',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
    ],
  },
  {
    teamId: 4,
    teamName: '안녕하세요 소통해요1',
    teamUniv: '경희대학교 서울캠퍼스',
    selectedDays: '월,화,금,토',
    groupType: 2,
    teamMembers: [
      {
        name: 'LEE',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx2',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
    ],
  },
  {
    teamId: 5,
    teamName: '안녕하세요 소통해요2',
    teamUniv: '단국대학교 죽전캠퍼스',
    selectedDays: '월,화,금',
    groupType: 2,
    teamMembers: [
      {
        name: 'LEE',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx2',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
    ],
  },
  {
    teamId: 6,
    teamName: '무조건 n빵함',
    teamUniv: '한국외국어대학교 서울캠퍼스',
    selectedDays: '화,목',
    groupType: 2,
    teamMembers: [
      {
        name: 'LEE',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx2',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
    ],
  },
  {
    teamId: 7,
    teamName: '놀사람3',
    teamUniv: '한국외국어대학교',
    selectedDays: '수,목,금',
    groupType: 3,
    teamMembers: [
      {
        name: 'LEE',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx2',
        oneLineInfo: '-',
        profileUri: '-',
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
      {
        name: 'KIM',
        department: '컴퓨터공학부',
        studentNumber: 'xxxxxxxx1',
        oneLineInfo: null,
        profileUri: null,
      },
    ],
  },
];

export const NEW_MATCHING_TEAM_LIST: NewMeetupTeamListType = {
  teamList: [
    {
      opponentTeamId: 4,
      teamName: '안녕하세요 소통해요1',
      teamUniv: '경희대학교 서울캠퍼스',
      isNew: true, // 생성 된지 1일 이내일 경우 true
      isHot: false, // 매칭 신청 2개 이상 받았을 경우 true
      teamProf: ['url1', 'url2'],
    },
    {
      opponentTeamId: 5,
      teamName: '안녕하세요 소통해요2',
      teamUniv: '단국대학교 죽전캠퍼스',
      isNew: false, // 생성 된지 1일 이내일 경우 true
      isHot: true, // 매칭 신청 2개 이상 받았을 경우 true
      teamProf: ['url1', 'url2'],
    },

    {
      opponentTeamId: 6,
      teamName: '무조건 n빵함',
      teamUniv: '한국외국어대학교 서울캠퍼스',
      isNew: true, // 생성 된지 1일 이내일 경우 true
      isHot: false, // 매칭 신청 2개 이상 받았을 경우 true
      teamProf: ['url1', 'url2'],
    },
  ],
};

export const APPLY_MEETUP_TEAM_LIST: ApplyReceivedTeamListType = {
  teamList: [
    {
      opponentTeamId: 4,
      teamName: '안녕하세요 소통해요2',
      teamUniv: '경희대학교 서울캠퍼스',
      matchState: 'SUCCESS',
    },
    {
      opponentTeamId: 5,
      teamName: '안녕하세요 소통해요2',
      teamUniv: '단국대학교 죽전캠퍼스',
      matchState: 'WAITING',
    },
    {
      opponentTeamId: 6,
      teamName: '무조건 n빵함',
      teamUniv: '한국외국어대학교 서울캠퍼스',
      matchState: 'FAILURE',
    },
  ],
};

export const RECEIVED_MEETUP_TEAM_LIST: ApplyReceivedTeamListType = {
  teamList: [
    {
      opponentTeamId: 5,
      teamName: '안녕하세요 소통해요2',
      teamUniv: '단국대학교 죽전캠퍼스',
      matchState: 'SUCCESS',
    },
    {
      opponentTeamId: 6,
      teamName: '무조건 n빵함',
      teamUniv: '한국외국어대학교 서울캠퍼스',
      matchState: 'WAITING',
    },
    {
      opponentTeamId: 7,
      teamName: '놀사람3',
      teamUniv: '한국외국어대학교',
      matchState: 'FAILURE',
    },
  ],
};
