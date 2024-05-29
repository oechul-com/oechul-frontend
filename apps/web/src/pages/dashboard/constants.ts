export const PARTICIPATE_MATCHING_LIST = [
  {
    icon: '🍻',
    title: '과팅',
    code: 'meetup',
    bgColor: 'rgba(202, 199, 195, 0.10)',
  },
  {
    icon: '❤️‍🔥',
    title: '연인',
    code: 'partner',
    bgColor: '#FEF0ED',
  },
  {
    icon: '👋🏻',
    title: '친구',
    code: 'friend',
    bgColor: 'rgba(255, 181, 99, 0.10)',
  },
];

type StudentInfoType = {
  name: string;
  img: string;
};

type MatchingTeamType = {
  type: 'HOST' | 'MEMBER';
  member: StudentInfoType[];
  title: string;
  school: string;
};

export const MATCHING_TEAM_LIST: MatchingTeamType[] = [
  {
    type: 'HOST',
    member: [{ name: 'student', img: '/static/assets/common/image-logo.svg' }],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
  },
  {
    type: 'MEMBER',
    member: [
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
  },
];
