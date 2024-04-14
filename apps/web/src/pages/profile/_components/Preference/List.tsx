import {
  ForwardToInboxIcon,
  PassIcon,
  PolicyIcon,
  VerificationIcon,
} from '@oechul/icons';
import React, { ReactElement } from 'react';

import Badge from '@/components/Badge';

import PreferenceItem from './Item.tsx';
import { ListRoot } from './Preference.styles';

const preferenceItems = [
  {
    icon: <VerificationIcon />,
    title: '재학생 인증',
    href: '/profile/verification',
    badge: <Badge variant="red">⚑ 인증을 진행해 주세요</Badge>,
  },
  {
    icon: <VerificationIcon />,
    title: '프로필 작성',
    href: '/profile/settings',
    badge: <Badge variant="red">⚑ 작성을 진행해 주세요</Badge>,
  },
  {
    icon: <PassIcon />,
    title: '비밀번호 변경',
    href: '/profile/password',
  },
  {
    icon: <PolicyIcon />,
    title: '이용약관',
    href: '/policy/terms',
  },
  {
    icon: <PolicyIcon />,
    title: '개인정보 처리방침',
    href: '/policy/privacy',
  },
  {
    icon: <ForwardToInboxIcon />,
    title: '문의하기',
    onAction: () => alert('문의하기'),
  },
];

const PreferenceList = (): ReactElement => {
  return (
    <ListRoot>
      {preferenceItems.map(item => (
        <PreferenceItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          href={item.href}
          badge={item.badge}
          onAction={item.onAction}
        />
      ))}
    </ListRoot>
  );
};

export default PreferenceList;
