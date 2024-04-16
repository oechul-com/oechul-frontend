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
  ${props => props.theme.layout.centerY};
  justify-content: space-between;
  height: ${rem(70)};
  padding: ${rem(30)} 0;
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
  ${props => props.theme.layout.centerY};
  gap: ${rem(10)};
  margin-top: ${rem(18)};
  margin-bottom: ${rem(24)};
`;

export const ParticipateMatchingItemBox = styled.div<ParticipateMatchingItemBoxType>`
  ${props => props.theme.layout.centerX};
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
  ${props => props.theme.layout.center};
  padding: ${rem(7)} ${rem(13)};
  border-radius: ${rem(20)};
  border: ${rem(1)} solid ${theme.colors.gray200};

  background-color: ${theme.colors.white};
  position: absolute;
  bottom: ${rem(-16)};
`;

export const MatchingTeamHeader = styled.div`
  ${props => props.theme.layout.center};
  justify-content: space-between;
  height: ${rem(45)};
`;

export const MatchingTeamItemsBox = styled.div`
  ${props => props.theme.layout.columnCenterY};
  gap: ${rem(8)};
`;

export const MatchingTeamItemBox = styled.div`
  ${props => props.theme.layout.columnCenterX};
  width: 100%;
  padding: ${rem(16)};
  gap: ${rem(10)};
  border-radius: ${rem(10)};
  background: ${props => props.theme.colors.gray100};

  cursor: pointer;
`;

export const MatchingTeamItemTop = styled.div`
  ${props => props.theme.layout.centerY};
  justify-content: space-between;
  width: 100%;
`;

export const MatchingTeamItemBottom = styled.div`
  ${props => props.theme.layout.columnCenterY};

  width: 100%;
  gap: ${rem(4)};
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

export const MatchingTypeTag = styled.div<{ $isHost?: boolean }>`
  background: ${props => (props.$isHost ? '#9747FF' : '#4B88FF')};

  ${props => props.theme.layout.center};

  padding: ${rem(3.5)} ${rem(4)};
  gap: ${rem(3)};
  border-radius: ${rem(4)};
`;

export const DefaultMatchingTeamBox = styled.div`
  ${props => props.theme.layout.columnCenter};
  padding: ${rem(26)} 0 ${rem(4)};
`;

export const ButtonBox = styled.div`
  ${props => props.theme.layout.columnCenter};
  width: 100%;
  gap: ${rem(16)};
`;
