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

export const MY_MATCHING_TEAM_LIST: MyMatchingTeamType[] = [
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교',
    days: ['월', '화'],
  },
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교',
    days: ['수'],
  },
];

export const NEW_MATCHING_TEAM_LIST: MatchingTeamType[] = [
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    days: ['월', '화'],
  },
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
    days: ['월', '화'],
  },
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
    days: ['월', '화'],
  },
];

export const REQUEST_MATCHING_TEAM_LIST: RequireApplyMatchingTeamType[] = [
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    type: '매칭 중',
    days: ['월', '화'],
  },
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
    type: '매칭 성공',
    days: ['월', '화'],
  },
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
    type: '확인하기',
    days: ['월', '화'],
  },
];

export const APPLY_MATCHING_TEAM_LIST: RequireApplyMatchingTeamType[] = [
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    type: '매칭 중',
    days: ['월', '화'],
  },
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
    type: '매칭 성공',
    days: ['월', '화'],
  },
  {
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
    type: '확인하기',
    days: ['월', '화'],
  },
];
