import { InstagramIcon, KakaoTalkIcon, MailIcon } from '@oechul/icons';
import { theme } from '@oechul/styles';
import { Fragment } from 'react';

import { SocialItemType } from '@/pages/landing/types.ts';

export const SOCIAL_LIST: SocialItemType[] = [
  {
    Icon: MailIcon,
    description: '이메일로 문의하기',
    bgColor: `${theme.colors.black}`,
    color: `${theme.colors.white}`,
    link: 'mailto:manage@oechul.com',
  },
  {
    Icon: KakaoTalkIcon,
    description: '공식 카카오 채널',
    bgColor: '#F3E24E',
    color: `${theme.colors.black}`,
    link: 'https://www.naver.com/',
  },
  {
    Icon: InstagramIcon,
    description: '공식 인스타그램',
    bgColor: `${theme.colors.gray200}`,
    color: `${theme.colors.black}`,
    link: '',
  },
  {
    Icon: Fragment,
    description: '외출에 대해 알아보기',
    bgColor: `${theme.colors.gray200}`,
    color: `${theme.colors.black}`,
    link: '',
  },
];
