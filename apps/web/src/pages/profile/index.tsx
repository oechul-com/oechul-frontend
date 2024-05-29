import { ImageAddIcon } from '@oechul/icons';
import { theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from '@/atoms/authState.ts';
import Layout from '@/components/layouts/Layout';
import { MemberRole } from '@/types/member.ts';

import MatchingStatus from './_components/MatchingStatus';
import PreferenceList from './_components/Preference/List.tsx';
import * as styles from './profile.styles.ts';

const ProfilePage = (): ReactElement | null => {
  const user = useRecoilValue(userState);

  if (!user) return null;

  return (
    <Layout title="마이프로필" arrow={true} borderline={true}>
      <styles.ProfileContainer>
        <styles.ProfileImageWrapper $size={150}>
          <ImageAddIcon width={65} height={65} color="#BFBFBF" />
        </styles.ProfileImageWrapper>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
          textAlign="center"
        >
          {user.name}
        </Text>
        <styles.Bio>
          {user.oneLineInfo ? user.oneLineInfo : '한줄 소개를 입력해주세요'}
        </styles.Bio>
        <MatchingStatus requested={1} waiting={2} completed={3} />
      </styles.ProfileContainer>

      <styles.HorizontalRule />

      <PreferenceList
        profileCompletion={true}
        memberVerification={user.role === MemberRole.STUDENT_VERIFIED}
      />
    </Layout>
  );
};

export default ProfilePage;
