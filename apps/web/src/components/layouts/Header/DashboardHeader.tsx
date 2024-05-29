import { Logo } from '@oechul/icons';
import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from '@/atoms/authState.ts';

import * as styles from './Header.styles.ts';

// const PROFILE_MODAL_LIST = [
//   { type: '프로필 및 더보기', Icon: AccountIcon, locate: '/profile' },
//   { type: '알림', Icon: AlertIcon, locate: '/alert' },
// ];

interface DashboardHeaderProps {
  borderline: boolean;
}

const DashboardHeader = ({
  borderline,
}: DashboardHeaderProps): ReactElement => {
  const user = useRecoilValue(userState);

  return (
    <styles.HeaderRoot $borderline={borderline}>
      <styles.HeaderInner>
        <styles.BrandingWrapper to="/">
          <Logo width={90} height={20} />
        </styles.BrandingWrapper>
        <styles.ProfileImageWrapper to="/profile">
          {user?.profileUri ? (
            <styles.ProfileImage src={user.profileUri} alt="Profile" />
          ) : (
            <Logo width={32} height={32} />
          )}
        </styles.ProfileImageWrapper>
      </styles.HeaderInner>
    </styles.HeaderRoot>
  );
};

export default DashboardHeader;
