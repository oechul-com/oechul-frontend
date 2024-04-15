import { CrownIcon, DefaultProfileIcon, MemberIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';

type MatchingModalOpenType = {
  matchingModalOpen: boolean;
  serviceWaitingModalOpen: boolean;
  matchingStartModalOpen: boolean;
};

type StudentInfoType = {
  name: string;
  img: string;
};

type ParticipateMatchingItemType = {
  icon: string;
  title: string;
  iconFontSize: string;
  iconLineHeight: string;
  bgColor: string;
};

type MatchingTeamType = {
  type: 'HOST' | 'MEMBER';
  member: StudentInfoType[];
  title: string;
  school: string;
};

const PARTICIPATE_MATCHING_LIST: ParticipateMatchingItemType[] = [
  {
    icon: '🍻',
    title: '과팅',
    iconFontSize: theme.fontSizes['5xl'],
    iconLineHeight: '60px',
    bgColor: 'rgba(202, 199, 195, 0.10)',
  },
  {
    icon: '❤️‍🔥',
    title: '연인',
    iconFontSize: theme.fontSizes['4xl'],
    iconLineHeight: '64px',
    bgColor: '#FEF0ED',
  },
  {
    icon: '👋🏻',
    title: '친구',
    iconFontSize: theme.fontSizes['4xl'],
    iconLineHeight: '64px',
    bgColor: 'rgba(255, 181, 99, 0.10)',
  },
];

const MATCHING_TEAM_LIST: MatchingTeamType[] = [
  {
    type: 'HOST',
    member: [{ name: 'student', img: '/static/assets/common/image-logo.svg' }],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
  },
  {
    type: 'MEMBER',
    member: [
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
      { name: 'student', img: '/static/assets/common/image-logo.svg' },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
  },
];

const DashboardPage = () => {
  const [selectMeetingType, setSelectMeetingType] = useState<string>('과팅');
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState<MatchingModalOpenType>({
    matchingModalOpen: false,
    serviceWaitingModalOpen: false,
    matchingStartModalOpen: false,
  });

  const onClickLogo = () => {
    navigate('/dashboard');
  };

  const onHandleModal = (key: keyof MatchingModalOpenType) => {
    setOpen(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const onClickParticipateMeetingType = (type: string) => {
    setSelectMeetingType(type);
  };

  useEffect(() => {
    setIsProfile(false); // 추후 로직
  }, []);

  return (
    <Layout visibleHeader={false}>
      {open.matchingStartModalOpen && (
        <Modal>
          <Layout>
            <Text
              fontSize={theme.fontSizes['2xl']}
              fontWeight={theme.fontWeights.semibold}
            >
              {'매칭 시작하기'}
            </Text>
            <ButtonBox>
              <Button width={'100%'}>
                <Text
                  fontSize={theme.fontSizes['lg']}
                  fontWeight={theme.fontWeights.semibold}
                >
                  {'📢'}
                </Text>
                <Text
                  fontSize={theme.fontSizes['lg']}
                  fontWeight={theme.fontWeights.semibold}
                >
                  {'나의 팀 만들기'}
                </Text>
              </Button>
              <Button bgColor={theme.colors.gray200} width={'100%'}>
                <Text
                  fontSize={theme.fontSizes['lg']}
                  fontWeight={theme.fontWeights.semibold}
                >
                  {'💌'}
                </Text>
                <Text
                  fontSize={theme.fontSizes['lg']}
                  textColor={theme.colors.black}
                  fontWeight={theme.fontWeights.semibold}
                >
                  {'초대 코드로 참가하기'}
                </Text>
              </Button>
            </ButtonBox>
          </Layout>
        </Modal>
      )}
      <DashboardHeader>
        <ImageLogo
          src="/static/assets/common/image-logo.svg"
          onClick={onClickLogo}
        />
        {isProfile ? (
          <ProfileImage $image={'/static/assets/common/image-logo.svg'} />
        ) : (
          <DefaultProfileIcon width={40} height={40} />
        )}
      </DashboardHeader>
      <AdvertisementBox />
      <DashboardCol>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
          style={{ marginTop: `${rem(28)}` }}
        >
          {'매칭 참여하기'}
        </Text>
        <ParticipateMatchingItemsBox>
          {PARTICIPATE_MATCHING_LIST.map(
            (
              {
                icon,
                title,
                iconFontSize,
                iconLineHeight,
                bgColor,
              }: ParticipateMatchingItemType,
              index,
            ) => {
              return (
                <ParticipateMatchingItemBox
                  $selected={title === selectMeetingType}
                  $bgColor={bgColor}
                  onClick={() => onClickParticipateMeetingType(title)}
                  key={index}
                >
                  <Text
                    fontSize={iconFontSize}
                    fontColor={theme.colors.gray200}
                    fontWeight={theme.fontWeights.semibold}
                    lineHeight={iconLineHeight}
                  >
                    {icon}
                  </Text>
                  <ParticipateMatchingTitleBox>
                    <Text
                      fontSize={theme.fontSizes.md}
                      fontColor={theme.colors.gray300}
                      fontWeight={theme.fontWeights.semibold}
                    >
                      {title}
                    </Text>
                  </ParticipateMatchingTitleBox>
                </ParticipateMatchingItemBox>
              );
            },
          )}
        </ParticipateMatchingItemsBox>
      </DashboardCol>
      <DashboardCol>
        <MatchingTeamHeader>
          <Text
            fontSize={theme.fontSizes.xl}
            fontWeight={theme.fontWeights.semibold}
          >
            {'내 과팅 팀'}
          </Text>
          <Text
            fontSize={theme.fontSizes.xs}
            fontWeight={theme.fontWeights.medium}
            textColor={theme.colors.gray500}
            style={{ cursor: 'pointer' }}
          >
            {'전체 보기'}
          </Text>
        </MatchingTeamHeader>
        <MatchingTeamItemsBox>
          {MATCHING_TEAM_LIST.length > 0 ? (
            MATCHING_TEAM_LIST.map(
              ({ type, member, title, school }: MatchingTeamType, index) => {
                return (
                  <MatchingTeamItemBox key={index}>
                    <MatchingTeamItemTop>
                      <MatchingMemberProfilesBox>
                        {member.map(({ img }, index) => {
                          return (
                            <MatchingMemberProfileBox
                              $zIndex={member.length}
                              $image={img}
                              key={index}
                            />
                          );
                        })}
                      </MatchingMemberProfilesBox>
                      <MatchingTypeTag $isHost={type === 'HOST'}>
                        {type === 'HOST' ? (
                          <CrownIcon width={10} fill="white" />
                        ) : (
                          <MemberIcon width={10} fill="white" />
                        )}
                        <Text
                          textColor={theme.colors.white}
                          fontSize={theme.fontSizes['3xs']}
                          fontWeight={theme.fontWeights.bold}
                        >
                          {type}
                        </Text>
                      </MatchingTypeTag>
                    </MatchingTeamItemTop>
                    <MatchingTeamItemBottom>
                      <Text
                        fontSize={theme.fontSizes.md}
                        fontWeight={theme.fontWeights.semibold}
                      >
                        {title}
                      </Text>
                      <Text
                        fontSize={theme.fontSizes['2xs']}
                        fontWeight={theme.fontWeights.normal}
                        textColor={theme.colors.gray500}
                      >
                        {school}
                      </Text>
                    </MatchingTeamItemBottom>
                  </MatchingTeamItemBox>
                );
              },
            )
          ) : (
            <DefaultMatchingTeamBox>
              <Text
                fontSize={theme.fontSizes['2xl']}
                fontWeight={theme.fontWeights.semibold}
              >
                {'😭'}
              </Text>
              <Text
                fontSize={theme.fontSizes['md']}
                fontWeight={theme.fontWeights.semibold}
                style={{ marginTop: `${rem(12)}` }}
              >
                {'아직 매칭에 참여한 기록이 없어요'}
              </Text>
              <Text
                fontSize={theme.fontSizes['2xs']}
                fontWeight={theme.fontWeights.medium}
                textColor={theme.colors.gray500}
                style={{ marginTop: `${rem(6)}` }}
              >
                {'지금 매칭을 시작하고 소중한 인연을 만들어보세요!'}
              </Text>
            </DefaultMatchingTeamBox>
          )}
        </MatchingTeamItemsBox>
        <Button
          width="100%"
          style={{ marginTop: `${rem(33)}` }}
          onClick={() => onHandleModal('matchingStartModalOpen')}
        >
          <Text
            textColor={theme.colors.white}
            fontSize={theme.fontSizes['lg']}
            fontWeigh={theme.fontWeights.semibold}
          >
            {'매칭 프로필 만들기'}
          </Text>
        </Button>
      </DashboardCol>
    </Layout>
  );
};

export default DashboardPage;

const DashboardHeader = styled.div`
  width: 100%;
  ${props => props.theme.layout.centerY};
  justify-content: space-between;
  height: ${rem(70)};
  padding: ${rem(30)} 0;
`;

const ImageLogo = styled.img`
  height: ${rem(23)};
`;

const ProfileImage = styled.div<{ $image?: string }>`
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

const AdvertisementBox = styled.div`
  margin-top: ${rem(11)};
  width: calc(100% + ${rem(60)});
  margin-left: ${rem(-30)};
  margin-right: ${rem(-30)};
  height: ${rem(78)};

  background-color: ${theme.colors.gray200};
`;

const DashboardCol = styled.div`
  padding-bottom: ${rem(27)};
`;

const ParticipateMatchingItemsBox = styled.div`
  ${props => props.theme.layout.centerY};
  gap: ${rem(10)};
  margin-top: ${rem(18)};
  margin-bottom: ${rem(24)};
`;

type ParticipateMatchingItemBoxType = {
  $selected: boolean;
  $bgColor: string;
};

const ParticipateMatchingItemBox = styled.div<ParticipateMatchingItemBoxType>`
  ${props => props.theme.layout.columnCenterY};
  position: relative;
  flex: 1;

  /* width: ${rem(104)}; */
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

const ParticipateMatchingTitleBox = styled.div`
  ${props => props.theme.layout.center};
  padding: ${rem(7)} ${rem(13)};
  border-radius: ${rem(20)};
  border: ${rem(1)} solid ${theme.colors.gray200};

  background-color: ${theme.colors.white};
  position: absolute;
  bottom: ${rem(-16)};
`;

const MatchingTeamHeader = styled.div`
  ${props => props.theme.layout.center};
  justify-content: space-between;
  height: ${rem(45)};
`;

const MatchingTeamItemsBox = styled.div`
  ${props => props.theme.layout.columnCenterY};
  gap: ${rem(8)};
`;

const MatchingTeamItemBox = styled.div`
  ${props => props.theme.layout.columnCenterY};
  width: 100%;
  padding: ${rem(16)};
  gap: ${rem(10)};
  border-radius: ${rem(10)};
  background: ${props => props.theme.colors.gray100};

  cursor: pointer;
`;

const MatchingTeamItemTop = styled.div`
  ${props => props.theme.layout.centerY};
  justify-content: space-between;
  width: 100%;
`;

const MatchingTeamItemBottom = styled.div`
  ${props => props.theme.layout.columnCenterX};

  width: 100%;
  gap: ${rem(4)};
`;

const MatchingMemberProfilesBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

type MatchingMemberProfileBoxType = {
  $zIndex: number;
  $image: string;
};

const MatchingMemberProfileBox = styled.div<MatchingMemberProfileBoxType>`
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

const MatchingTypeTag = styled.div<{ $isHost?: boolean }>`
  background: ${props => (props.$isHost ? '#9747FF' : '#4B88FF')};

  ${props => props.theme.layout.center};

  padding: ${rem(3.5)} ${rem(4)};
  gap: ${rem(3)};
  border-radius: ${rem(4)};
`;

const DefaultMatchingTeamBox = styled.div`
  ${props => props.theme.layout.columnCenter};
  padding: ${rem(26)} 0 ${rem(4)};
`;

const ButtonBox = styled.div`
  ${props => props.theme.layout.columnCenter};
  width: 100%;
  gap: ${rem(16)};
`;
