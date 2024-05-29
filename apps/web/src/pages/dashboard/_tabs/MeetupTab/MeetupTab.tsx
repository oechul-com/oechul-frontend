import { ReactElement } from 'react';

import * as styles from './MeetupTab.styles.ts';

const MeetupTab = (): ReactElement => {
  // const { data, isLoading } = useGwatingTeamsQuery();

  return (
    <div>
      <styles.TabTitleContainer>
        <h3>내 과팅 팀</h3>
        <button>전체보기</button>
      </styles.TabTitleContainer>

      <styles.MatchingTeamList>
        <styles.MatchingTeamItem>
          아직 과팅 팀이 없습니다.
        </styles.MatchingTeamItem>
      </styles.MatchingTeamList>
    </div>
  );
};

export default MeetupTab;
