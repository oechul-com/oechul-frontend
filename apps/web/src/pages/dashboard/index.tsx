import {
  CrownIcon,
  DefaultProfileIcon,
  MemberIcon,
  CloseIcon,
  AlertIcon,
  AccountIcon,
  IconProps,
} from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { ElementType, NamedExoticComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/components/layout/Layout';

import {
  ButtonBox,
  DashboardHeader,
  ImageLogo,
  ProfileImage,
  AdvertisementBox,
  DashboardCol,
  ParticipateMatchingItemsBox,
  ParticipateMatchingItemBox,
  ParticipateMatchingTitleBox,
  MatchingTeamHeader,
  MatchingTeamItemsBox,
  MatchingTeamItemBox,
  MatchingTeamItemTop,
  MatchingMemberProfilesBox,
  MatchingMemberProfileBox,
  MatchingTypeTag,
  MatchingTeamItemBottom,
  DefaultMatchingTeamBox,
  ModalLayout,
  ModalButtonsBox,
  ModalHeader,
  ProfileModalItemBox,
  ProfileModalItemsBox,
} from './matched.styles';

type ProfileModalItemType = {
  type: string;
  Icon: NamedExoticComponent<IconProps> | ElementType;
  locate: string;
};

type MatchingModalOpenType = {
  [key: string]: boolean;
  matchingModalOpen: boolean;
  serviceWaitingModalOpen: boolean;
  matchingStartModalOpen: boolean;
};

type ParticipateMatchingItemType = {
  icon: string;
  title: string;
  iconFontSize: string;
  iconLineHeight: string;
  bgColor: string;
};

type MyMatchingTeamType = {
  isHost: 'Y' | 'N';
  teamId: string;
  teamProfile: string[];
  teamName: string;
  university: string;
};

const PARTICIPATE_MATCHING_LIST: ParticipateMatchingItemType[] = [
  {
    icon: '🍻',
    title: '과팅',
    iconFontSize: theme.fontSizes['5xl'],
    iconLineHeight: `${rem(60)}`,
    bgColor: 'rgba(202, 199, 195, 0.10)',
  },
  {
    icon: '❤️‍🔥',
    title: '연인',
    iconFontSize: theme.fontSizes['4xl'],
    iconLineHeight: `${rem(64)}`,
    bgColor: '#FEF0ED',
  },
  {
    icon: '👋🏻',
    title: '친구',
    iconFontSize: theme.fontSizes['4xl'],
    iconLineHeight: `${rem(64)}`,
    bgColor: 'rgba(255, 181, 99, 0.10)',
  },
];

const MATCHING_TEAM_LIST: MyMatchingTeamType[] = [
  {
    teamId: '1',
    isHost: 'Y',
    teamProfile: ['/static/assets/common/image-logo.svg'],
    teamName: '소통합시다잉',
    university: '한국외국어대학교 글로벌캠퍼스',
  },
  {
    teamId: '2',
    isHost: 'N',
    teamProfile: [
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
    ],
    teamName: '소통합시다잉',
    university: '한국외국어대학교 글로벌캠퍼스',
  },
  {
    teamId: '3',
    isHost: 'N',
    teamProfile: [
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
      '/static/assets/common/image-logo.svg',
    ],
    teamName: '소통합시다잉',
    university: '한국외국어대학교 글로벌캠퍼스',
  },
];

const PROFILE_MODAL_LIST: ProfileModalItemType[] = [
  {
    type: '프로필 및 더보기',
    Icon: AccountIcon,
    locate: '/profile',
  },
  {
    type: '알림',
    Icon: AlertIcon,
    locate: '/alert',
  },
];

const DashboardPage = () => {
  const [selectMeetingType, setSelectMeetingType] = useState<string>('');

  // 유저 정보 한 번에 받으면 데이터 구조 따라 변경
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [isStudent, setIsStudent] = useState<boolean>(false);

  // 내 매칭 팀 정보
  const [myMatchingTeamList, setMyMatchingTeamList] = useState<
    MyMatchingTeamType[]
  >([]);

  // 매칭 팀 전부 보여주기 유무
  const [isShowAll, setIsShowAll] = useState<boolean>(false);

  //
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const [modalState, setModalState] = useState<MatchingModalOpenType>({
    matchingModalOpen: false,
    serviceWaitingModalOpen: false,
    matchingStartModalOpen: false,
  });

  //
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const onClickLogo = () => {
    navigate('/dashboard');
  };

  const onHandleModal = (key: keyof MatchingModalOpenType) => {
    setOpen(open => !open);
    setModalState(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const onClickParticipateMeetingType = (type: string) => {
    if (type === '과팅' && !isStudent) {
      onHandleModal('matchingModalOpen');
    } else if (type === '연인' || type === '친구') {
      onHandleModal('serviceWaitingModalOpen');
      return;
    }
    setSelectMeetingType(type);
  };

  const _onLoadData = () => {
    setMyMatchingTeamList(MATCHING_TEAM_LIST);
  };

  useEffect(() => {
    setIsProfile(false); // 추후 로직
    setIsStudent(true);
    _onLoadData();
  }, []);

  useEffect(() => {
    if (!open) {
      setModalState(prevState =>
        Object.keys(prevState).reduce((newState, key) => {
          newState[key] = false;
          return newState;
        }, {} as MatchingModalOpenType),
      );
    }
  }, [open]);

  return (
    <Layout visibleHeader={false}>
      {open && (
        <Modal isOpen={open} onStateChange={() => setOpen(open => !open)}>
          <Modal.Content>
            {modalState.serviceWaitingModalOpen && (
              <ModalLayout>
                <Text
                  fontSize={theme.fontSizes['5xl']}
                  fontWeight={theme.fontWeights['semibold']}
                  style={{ marginBottom: `${rem(16)}` }}
                >
                  {'🛠️'}
                </Text>
                <Text
                  $variant="title"
                  lineHeight={`${rem(46)}`}
                  style={{ marginBottom: `${rem(8)}` }}
                >
                  {'서비스 준비 중'}
                </Text>
                <Text
                  textColor={theme.colors.gray500}
                  lineHeight={`${rem(22)}`}
                  textAlign={'center'}
                  style={{ marginBottom: `${rem(40)}` }}
                >
                  {
                    '이곳에 안내메세지 두줄이상 입력을 권장하고 줄바꿈 영역은 이곳까지'
                  }
                </Text>
                <Button onClick={() => setOpen(open => !open)} width={'100%'}>
                  <Text
                    fontSize={theme.fontSizes['lg']}
                    fontWeight={theme.fontWeights['semibold']}
                  >
                    {'닫기'}
                  </Text>
                </Button>
              </ModalLayout>
            )}
            {modalState.matchingModalOpen && (
              <ModalLayout>
                <Text
                  fontSize={theme.fontSizes['5xl']}
                  fontWeight={theme.fontWeights['semibold']}
                  style={{ marginBottom: `${rem(16)}` }}
                >
                  {'✋🏻'}
                </Text>
                <Text
                  fontSize={theme.fontSizes['xl']}
                  fontWeight={theme.fontWeights['medium']}
                  textAlign={'center'}
                  lineHeight={`${rem(28)}`}
                  style={{ padding: `0 ${rem(24)}` }}
                >
                  {'매칭을 시작하려면\n먼저 재학생 인증이 필요해요'}
                </Text>
                <ModalButtonsBox>
                  <Button
                    onClick={() => setOpen(open => !open)}
                    bgColor={`${theme.colors.gray200}`}
                  >
                    <Text
                      fontSize={theme.fontSizes['lg']}
                      fontWeight={theme.fontWeights['semibold']}
                      textColor={theme.colors.black}
                    >
                      {'닫기'}
                    </Text>
                  </Button>
                  <Button bgColor={`${theme.colors.black}`}>
                    <Text
                      textColor={`${theme.colors.white}`}
                      fontSize={theme.fontSizes['lg']}
                      fontWeight={theme.fontWeights['semibold']}
                    >
                      {'인증하기'}
                    </Text>
                  </Button>
                </ModalButtonsBox>
              </ModalLayout>
            )}
            {modalState.matchingStartModalOpen && (
              <ModalLayout>
                <ModalHeader>
                  <Modal.Close as="span">
                    <CloseIcon />
                  </Modal.Close>
                </ModalHeader>
                <Text
                  fontSize={theme.fontSizes['2xl']}
                  fontWeight={theme.fontWeights.semibold}
                  lineHeight={`${rem(46)}`}
                  textAlign={'center'}
                  style={{
                    marginBottom: `${rem(26)}`,
                    padding: `0 ${rem(50)}`,
                  }}
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
                  <Button
                    bgColor={theme.colors.gray200}
                    width={'100%'}
                    onClick={() => navigate('/dashboard/inviteCInp')}
                  >
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
              </ModalLayout>
            )}
          </Modal.Content>
        </Modal>
      )}
      <DashboardHeader>
        {isProfileModalOpen && (
          <ProfileModalItemsBox>
            {PROFILE_MODAL_LIST.map(
              ({ type, Icon, locate }: ProfileModalItemType, index) => {
                return (
                  <ProfileModalItemBox
                    $isLast={index === PROFILE_MODAL_LIST.length - 1}
                    onClick={() => navigate(locate)}
                  >
                    <Text>{type}</Text>
                    <Icon />
                  </ProfileModalItemBox>
                );
              },
            )}
          </ProfileModalItemsBox>
        )}
        <ImageLogo
          src="/static/assets/common/image-logo.svg"
          onClick={onClickLogo}
        />
        {isProfile ? (
          <ProfileImage
            $image={'/static/assets/common/image-logo.svg'}
            onClick={() =>
              setIsProfileModalOpen(isProfileModalOpen => !isProfileModalOpen)
            }
          />
        ) : (
          <DefaultProfileIcon
            width={40}
            height={40}
            onClick={() =>
              setIsProfileModalOpen(isProfileModalOpen => !isProfileModalOpen)
            }
            style={{ cursor: 'pointer' }}
          />
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
                  $selected={title === '과팅'}
                  $bgColor={bgColor}
                  onClick={() => onClickParticipateMeetingType(title)}
                  key={index}
                >
                  <Text
                    fontSize={iconFontSize}
                    fontColor={theme.colors.gray200}
                    fontWeight={theme.fontWeights.semibold}
                    lineHeight={iconLineHeight}
                    textAlign={'center'}
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
      {isStudent && selectMeetingType === '과팅' && (
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
              onClick={() => setIsShowAll(true)}
            >
              {'전체 보기'}
            </Text>
          </MatchingTeamHeader>
          <MatchingTeamItemsBox>
            {myMatchingTeamList.length > 0 ? (
              (isShowAll
                ? myMatchingTeamList
                : myMatchingTeamList.slice(0, 2)
              ).map(
                ({
                  isHost,
                  teamId,
                  teamProfile,
                  teamName,
                  university,
                }: MyMatchingTeamType) => {
                  return (
                    <MatchingTeamItemBox key={teamId}>
                      <MatchingTeamItemTop>
                        <MatchingMemberProfilesBox>
                          {teamProfile.map((img: string, index: number) => {
                            return (
                              <MatchingMemberProfileBox
                                $zIndex={teamProfile.length}
                                $image={img}
                                key={index}
                              />
                            );
                          })}
                        </MatchingMemberProfilesBox>
                        <MatchingTypeTag $isHost={isHost}>
                          {isHost === 'Y' ? (
                            <CrownIcon width={10} fill="white" />
                          ) : (
                            <MemberIcon width={10} fill="white" />
                          )}
                          <Text
                            textColor={theme.colors.white}
                            fontSize={theme.fontSizes['3xs']}
                            fontWeight={theme.fontWeights.bold}
                          >
                            {isHost === 'Y' ? 'HOST' : 'MEMBER'}
                          </Text>
                        </MatchingTypeTag>
                      </MatchingTeamItemTop>
                      <MatchingTeamItemBottom>
                        <Text
                          fontSize={theme.fontSizes.md}
                          fontWeight={theme.fontWeights.semibold}
                        >
                          {teamName}
                        </Text>
                        <Text
                          fontSize={theme.fontSizes['2xs']}
                          fontWeight={theme.fontWeights.normal}
                          textColor={theme.colors.gray500}
                        >
                          {university}
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
      )}
    </Layout>
  );
};

export default DashboardPage;
