import { MatchingModalOpenType } from '../matched/type';

export const renderText = (
  key: keyof MatchingModalOpenType,
  matchState: string,
) => {
  if (key === 'applyMatchingModalOpen') {
    switch (matchState) {
      case 'SUCCESS':
        return '매칭 성공';
      case 'WAITING':
        return '매칭 중';
      case 'FAILURE':
        return '매칭 실패';
      default:
        return '';
    }
  } else {
    switch (matchState) {
      case 'SUCCESS':
        return '매칭 성공';
      case 'WAITING':
        return '확인하기';
      case 'FAILURE':
        return '매칭 거절';
      default:
        return '';
    }
  }
};
