import { ImageAddIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Input, Text } from '@oechul/ui';
import { useState, ReactElement } from 'react';

import Layout from '@/components/layout/Layout';

import {
  ProfileImageContainer,
  ProfileSaveButton,
  ProfileSaveButtonContainer,
  ProfileSettingsContent,
} from './settings.styles.ts';

const ProfileSettingsPage = (): ReactElement => {
  const [nickname, setNickname] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');

  const isFormValid = nickname.length > 2;

  const handleFormSubmit = () => {};

  return (
    <Layout title="마이프로필" arrow={true} borderline={true}>
      <ProfileSettingsContent>
        <Text
          textColor={theme.colors.black}
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
        >
          프로필 사진 및 한줄소개
        </Text>
        <Text
          textColor={theme.colors.gray500}
          fontSize={theme.fontSizes.xs}
          fontWeight={theme.fontWeights.semibold}
          style={{ marginTop: rem(9) }}
        >
          나를 표현하는 멋진 프로필 사진과 소개를 입력해주세요.
        </Text>
        <ProfileImageContainer $size={150}>
          <ImageAddIcon width={65} height={65} color="#BFBFBF" />
        </ProfileImageContainer>
        <Input
          label="닉네임"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        <Input
          style={{ marginTop: rem(18) }}
          label="한줄소개"
          value={introduction}
          onChange={e => setIntroduction(e.target.value)}
        />
      </ProfileSettingsContent>

      <ProfileSaveButtonContainer>
        <ProfileSaveButton
          width="100%"
          onClick={handleFormSubmit}
          aria-invalid={!isFormValid}
        >
          작성 완료하기
        </ProfileSaveButton>
      </ProfileSaveButtonContainer>
    </Layout>
  );
};

export default ProfileSettingsPage;
