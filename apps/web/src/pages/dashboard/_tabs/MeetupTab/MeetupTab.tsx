import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userState } from '@/atoms/authState.ts';
import StatusMessage from '@/pages/dashboard/_components/StatusMessage';
import { MemberRole } from '@/types/member.ts';

import * as styles from './MeetupTab.styles.ts';

const MeetupTab = (): ReactElement | null => {
  const user = useRecoilValue(userState);

  if (!user) return null;

  return (
    <div>
      <styles.TabTitleContainer>
        <h3>내 과팅 팀</h3>
        <button>전체보기</button>
      </styles.TabTitleContainer>

      <styles.MatchingTeamList>
        {user.role === MemberRole.STUDENT_VERIFIED ? (
          <styles.MatchingTeamItem>
            아직 과팅 팀이 없습니다.
          </styles.MatchingTeamItem>
        ) : (
          <StatusMessage
            message="재학생 인증이 완료되지 않았어요"
            subMessage={
              <>
                <Link to="/profile/verification">여기</Link>에서 재학생 인증을
                진행해주세요!
              </>
            }
          />
        )}
      </styles.MatchingTeamList>
    </div>
  );
};

export default MeetupTab;
