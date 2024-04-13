import {
  ForwardToInboxIcon,
  PolicyIcon,
  VerificationIcon,
} from '@oechul/icons';
import { ReactElement } from 'react';

import PreferenceItem from './Item.tsx';
import { ListRoot } from './Preference.styles.ts';
import Badge from '../Badge';

const PreferenceList = (): ReactElement => {
  return (
    <ListRoot>
      <PreferenceItem
        icon={<VerificationIcon />}
        title="재학생 인증"
        href="/profile/verification"
        badge={<Badge variant="red">⚑ 인증을 진행해 주세요</Badge>}
      />
      <PreferenceItem
        icon={<VerificationIcon />}
        title="프로필 작성"
        href="/profile/settings"
        badge={<Badge variant="red">⚑ 작성을 진행해 주세요</Badge>}
      />
      <PreferenceItem
        icon={<VerificationIcon />}
        title="요청 받은 매칭 팀"
        href="/profile/settings"
        badge={<Badge variant="red">⚑ 작성을 진행해 주세요</Badge>}
      />
      <PreferenceItem
        icon={<PolicyIcon />}
        title="이용약관"
        href="/policy/terms"
      />
      <PreferenceItem
        icon={<PolicyIcon />}
        title="개인정보 처리방침"
        href="/policy/privacy"
      />
      <PreferenceItem
        icon={<ForwardToInboxIcon />}
        title="문의하기"
        onAction={() => alert('문의하기')}
      />
    </ListRoot>
  );
};

export default PreferenceList;
