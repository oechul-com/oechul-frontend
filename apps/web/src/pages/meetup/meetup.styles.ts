import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const MatchedMeetupHeader = styled.div`
  ${props => props.theme.layout.centerY}
  justify-content: space-between;
`;

export const MyMeetupBox = styled.div`
  ${theme.layout.centerY}
  justify-content: space-between;
  width: 100%;
  height: ${rem(70)};
  padding: ${rem(16)} ${rem(17)} ${rem(16)} ${rem(16)};

  border-radius: ${rem(10)};
  border: ${rem(1)} solid ${theme.colors.gray250};
  background: ${theme.colors.white};
`;

export const CustomButton = styled.div`
  ${theme.layout.center}
  height: ${rem(38)};
  padding: ${rem(12)} ${rem(10)};

  border-radius: ${rem(6)};
  background: ${theme.colors.black};

  cursor: pointer;
`;

export const MyMeetupsCol = styled.div`
  ${theme.layout.columnCenter}

  margin: ${rem(17)} 0 ${rem(38)} 0;
  gap: ${rem(16)};
`;

export const NewMeetupsCol = styled.div`
  ${theme.layout.columnCenter}
  margin: ${rem(16)} 0 ${rem(36)} 0;
  gap: ${rem(16)};
`;

export const MatchingTeamTextBox = styled.div`
  ${theme.layout.centerY}
  gap: ${rem(6)};
`;

export const MatchedColorTagBox = styled.div<{ $type: string }>`
  ${theme.layout.centerY}
  padding: ${rem(6)} ${rem(8)};
  gap: ${rem(4)};

  border-radius: ${rem(100)};
  background: ${({ $type }) =>
    $type === '매칭 성공'
      ? `${theme.colors.red.accent}`
      : $type === '확인하기'
        ? `${theme.colors.black}`
        : `${theme.colors.white}`};

  cursor: pointer;
`;

export const MatchedGap = styled.div`
  ${theme.layout.column}
  gap: ${rem(4)};
`;

///

export const MatchedModalItemsBox = styled.div`
  ${theme.layout.columnCenter};

  gap: ${rem(44)};
  margin-bottom: ${rem(64)};
`;

export const MatchedModalItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(16)};
`;

export const MatchedModalProfileImageBox = styled.div<{
  $image: string | null;
}>`
  width: ${rem(60)};
  height: ${rem(60)};
  border-radius: ${rem(75)};
  border: ${rem(1)} solid ${theme.colors.gray250};
  background-image: url(${props => props.$image});
  background-color: ${theme.colors.gray200};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  flex-shrink: 0;
`;

export const MatchedModalProfileIntroductionBox = styled.div`
  ${theme.layout.column};
`;

export const MatchedMeetupModalLayout = styled.div`
  width: 100vw;
  max-width: ${theme.sizes.app};
  padding: ${rem(48)} ${rem(30)} ${rem(30)};
  background-color: #fff;
  height: ${rem(400)};
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  border-radius: ${rem(10)};

  position: relative;
`;
