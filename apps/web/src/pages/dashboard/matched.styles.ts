import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

type ParticipateMatchingItemBoxType = {
  $selected: boolean;
  $bgColor: string;
};

type MatchingMemberProfileBoxType = {
  $zIndex: number;
  $image: string;
};

export const DashboardHeader = styled.div`
  width: 100%;
  ${theme.layout.centerY};
  justify-content: space-between;
  height: ${rem(70)};
  padding: ${rem(30)} 0;
  position: relative;
`;

export const ImageLogo = styled.img`
  height: ${rem(23)};
`;

export const ProfileImage = styled.div<{ $image?: string }>`
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: ${rem(40)};
  background-image: url(${props => props.$image}),
    linear-gradient(lightgray, lightgray);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: ${rem(1)} solid ${theme.colors.gray200};

  cursor: pointer;
`;

export const AdvertisementBox = styled.div`
  margin-top: ${rem(11)};
  width: calc(100% + ${rem(60)});
  margin-left: ${rem(-30)};
  margin-right: ${rem(-30)};
  height: ${rem(78)};

  background-color: ${theme.colors.gray200};
`;

export const DashboardCol = styled.div`
  padding-bottom: ${rem(27)};
`;

export const ParticipateMatchingItemsBox = styled.div`
  ${theme.layout.centerY};
  gap: ${rem(10)};
  margin-top: ${rem(18)};
  margin-bottom: ${rem(24)};
`;

export const ParticipateMatchingItemBox = styled.div<ParticipateMatchingItemBoxType>`
  ${theme.layout.centerX};
  position: relative;
  flex: 1;

  height: ${rem(107)};
  padding-top: ${rem(18)};

  border-radius: ${rem(10)};
  border: ${rem(1)} solid rgba(0, 0, 0, 0.02);
  background: ${props => props.$bgColor};
  opacity: ${props => (props.$selected ? '1' : `0.5`)};

  cursor: pointer;
  color: ${props =>
    props.$selected ? 'rgba(0, 0, 0, 1)' : `rgba(0, 0, 0, 0.5)`};

  & > div > span {
    color: ${props =>
      props.$selected ? 'rgba(0, 0, 0, 1)' : `${theme.colors.gray300}`};
  }
`;

export const ParticipateMatchingTitleBox = styled.div`
  ${theme.layout.center};
  padding: ${rem(7)} ${rem(13)};
  border-radius: ${rem(20)};
  border: ${rem(1)} solid ${theme.colors.gray200};

  background-color: ${theme.colors.white};
  position: absolute;
  bottom: ${rem(-16)};
`;

export const MatchingTeamHeader = styled.div`
  ${theme.layout.center};
  justify-content: space-between;
  height: ${rem(45)};
`;

export const MatchingTeamItemsBox = styled.div`
  ${theme.layout.columnCenterY};
  gap: ${rem(8)};
`;

export const MatchingTeamItemBox = styled.div<{ $isTop?: boolean }>`
  ${theme.layout.columnCenterX};
  width: 100%;
  padding: ${props => (props.$isTop ? `${rem(16)}` : `${rem(20)} ${rem(16)}`)};
  gap: ${rem(10)};
  border-radius: ${rem(10)};
  background: ${theme.colors.gray100};

  cursor: pointer;
`;

export const MatchingTeamItemTop = styled.div`
  ${theme.layout.centerY};
  justify-content: space-between;
  width: 100%;
`;

export const MatchingTeamItemBottom = styled.div<{ $isTop?: boolean }>`
  ${theme.layout.centerY};
  justify-content: space-between;

  width: 100%;
`;

export const MatchingMemberProfilesBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const MatchingMemberProfileBox = styled.div<MatchingMemberProfileBoxType>`
  width: ${rem(28)};
  height: ${rem(28)};
  border-radius: 50%;
  border: ${rem(1)} solid white;

  background-image: url(${props => props.$image}),
    linear-gradient(lightgray, lightgray);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  margin-right: ${rem(-10)};

  z-index: ${props => props.$zIndex};
`;

export const MatchingTypeTag = styled.div<{ $isHost?: string }>`
  background: ${props =>
    props.$isHost === 'Y'
      ? '#9747FF'
      : props.$isHost === 'N'
        ? '#4B88FF'
        : `${theme.colors.orange.bg}`};

  ${theme.layout.center};

  padding: ${rem(3.5)} ${rem(4)};
  gap: ${rem(3)};
  border-radius: ${rem(4)};
`;

export const DefaultMatchingTeamBox = styled.div`
  ${theme.layout.columnCenter};
  padding: ${rem(26)} 0 ${rem(4)};
`;

export const ButtonBox = styled.div`
  ${theme.layout.columnCenter};
  width: 100%;
  gap: ${rem(16)};
`;

export const ModalLayout = styled.div`
  ${theme.layout.columnCenter};
  width: 100%;
  padding: ${rem(48)} ${rem(30)} ${rem(30)};

  background-color: #fff;

  border-radius: ${rem(10)};

  position: relative;
`;

export const ModalHeader = styled.div`
  width: 100%;
  top: ${rem(30)};
  right: ${rem(30)};
  display: flex;
  justify-content: flex-end;

  position: absolute;
`;

export const ModalButtonsBox = styled.div`
  display: flex;
  width: 100%;
  gap: ${rem(10)};

  margin-top: ${rem(40)};

  & > button {
    flex: 1;
  }
`;

export const ProfileModalItemsBox = styled.div`
  ${theme.layout.column};

  position: absolute;
  right: ${rem(0)};
  top: ${rem(38)};

  border-radius: ${rem(10)};
  border: ${rem(0.5)} solid var(--gray-gray250, #f0f0f0);
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    0 ${rem(149)} ${rem(42)} 0 rgba(0, 0, 0, 0),
    0 ${rem(95)} ${rem(38)} 0 rgba(0, 0, 0, 0.01),
    0 ${rem(53)} ${rem(32)} 0 rgba(0, 0, 0, 0.05),
    0 ${rem(24)} ${rem(24)} 0 rgba(0, 0, 0, 0.09);
  backdrop-filter: blur(${rem(30)});
`;

export const ProfileModalItemBox = styled.div<{ $isLast: boolean }>`
  ${theme.layout.centerY};
  width: ${rem(250)};
  padding: ${rem(16)} ${rem(18)};
  justify-content: space-between;
  gap: ${rem(10)};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    border-radius: ${props =>
      props.$isLast
        ? `0 0 ${rem(10)} ${rem(10)}`
        : `${rem(10)} ${rem(10)} 0 0`};
  }

  border-bottom: ${props =>
    props.$isLast ? 'none' : `${rem(0.5)}solid #d9d9d9`};

  cursor: pointer;
`;

///

export const DescriptionBox = styled.div`
  ${theme.layout.centerY};
  padding: ${rem(10)};
  gap: ${rem(8)};
  border-radius: ${rem(10)};
  background: ${theme.colors.gray150};

  margin: ${rem(19)} 0 ${rem(28)};
`;

export const MatchingSuccessDescriptionBoxTop = styled.div<{
  $isExpanded: boolean;
}>`
  ${theme.layout.centerY}
  width: 100%;
  padding: ${rem(16)};

  border-radius: ${props =>
    props.$isExpanded ? `${rem(10)} ${rem(10)} 0 0` : `${rem(10)}`};
  border-bottom: ${props =>
    props.$isExpanded ? `${rem(1)} solid ${theme.colors.gray200}` : 'none'};
  background: ${theme.colors.gray100};

  margin-top: ${rem(48)};
`;

export const MatchingSuccessDescriptionBoxBottom = styled.div`
  ${theme.layout.center}
  width: 100%;
  padding: ${rem(10)} ${rem(16)} ${rem(10)} ${rem(36)};
  gap: ${rem(10)};

  border-radius: 0 0 ${rem(10)} ${rem(10)};
  background: ${theme.colors.gray100};
`;

//

export const MatchedWeeksBox = styled.div`
  display: flex;
  gap: ${rem(6)};
  margin-bottom: ${rem(40)};
`;

export const MatchedWeekBox = styled.div<{ $isCheckGroup: string }>`
  ${theme.layout.center};

  height: ${rem(42)};
  border-radius: ${rem(10)};
  background: ${({ $isCheckGroup }) =>
    $isCheckGroup === 'ovrlpDay'
      ? `${theme.colors.red.accent}`
      : $isCheckGroup === 'normal'
        ? `${theme.colors.black}`
        : `${theme.colors.gray100}`};

  flex: 1 1 auto;
  min-width: ${rem(4)};

  & > span {
    color: ${({ $isCheckGroup }) =>
      $isCheckGroup === 'default'
        ? `${theme.colors.gray300}`
        : `${theme.colors.white}`};
  }
`;
