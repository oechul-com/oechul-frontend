import Layout from '@/components/layout/Layout';

import PreferenceList from './_components/Preference/List.tsx';
import { HorizontalRule } from './profile.styles.ts';

const ProfilePage = () => {
  return (
    <Layout title="마이프로필" arrow={true} borderline={true}>
      <HorizontalRule />
      <PreferenceList />
    </Layout>
  );
};

export default ProfilePage;
