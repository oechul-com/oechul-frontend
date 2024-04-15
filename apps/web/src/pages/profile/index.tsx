import { ImageAddIcon } from '@oechul/icons';
import { theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';

import MatchingStatus from './_components/MatchingStatus';
import PreferenceList from './_components/Preference/List.tsx';
import {
  HorizontalRule,
  ProfileContainer,
  ProfileImageWrapper,
  Bio,
} from './profile.styles.ts';

const ProfilePage = (): ReactElement => {
  return (
    <Layout title="마이프로필" arrow={true} borderline={true}>
      <ProfileContainer>
        <ProfileImageWrapper $size={150}>
          <ImageAddIcon width={65} height={65} color="#BFBFBF" />
        </ProfileImageWrapper>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
          textAlign="center"
        >
          김찬호
        </Text>
        <Bio>한줄소개를 입력해주세요</Bio>
        <MatchingStatus requested={1} waiting={2} completed={3} />
      </ProfileContainer>

      <HorizontalRule />

      <PreferenceList />
    </Layout>
  );
};

export default ProfilePage;
