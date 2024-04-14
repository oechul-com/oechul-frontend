import {
  MatchingStatusItem,
  MatchingStatusGrid,
  MatchingStatusTitle,
  MatchingStatueValue,
} from './MatchingStatus.styles.ts';

const MatchingStatus = (status: {
  requested: number;
  waiting: number;
  completed: number;
}) => {
  return (
    <MatchingStatusGrid>
      <MatchingStatusItem>
        <MatchingStatueValue>{status.requested}</MatchingStatueValue>
        <MatchingStatusTitle>신청한 매칭</MatchingStatusTitle>
      </MatchingStatusItem>
      <MatchingStatusItem>
        <MatchingStatueValue>{status.waiting}</MatchingStatueValue>
        <MatchingStatusTitle>매칭 대기 중</MatchingStatusTitle>
      </MatchingStatusItem>
      <MatchingStatusItem>
        <MatchingStatueValue>{status.completed}</MatchingStatueValue>
        <MatchingStatusTitle>완료된 매칭</MatchingStatusTitle>
      </MatchingStatusItem>
    </MatchingStatusGrid>
  );
};

export default MatchingStatus;
