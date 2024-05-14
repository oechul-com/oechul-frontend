import { CaratRightIcon, CloseIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';
import {
  ApplyReceivedTeamInfoType,
  ApplyReceivedTeamListType,
  MeetupMemberInfoType,
  MeetupTeamType,
  NewMeetupTeamInfoType,
  NewMeetupTeamListType,
} from '@/types/meetup';

import {
  MY_MEETUP_TEAM_DETAIL_LIST,
  NEW_MATCHING_TEAM_LIST,
  APPLY_MEETUP_TEAM_LIST,
  RECEIVED_MEETUP_TEAM_LIST,
} from './matched/mockData';
import { MatchingModalOpenType, dayDescriptionType } from './matched/type';
import {
  MatchingTeamItemBox,
  MatchingTeamItemTop,
  MatchingMemberProfilesBox,
  MatchingMemberProfileBox,
  MatchingTypeTag,
  MatchingTeamItemBottom,
  MatchedWeeksBox,
  MatchedWeekBox,
} from '../dashboard/matched.styles';

const DAYWEEKS = ['월', '화', '수', '목', '금', '토', '일'];

type MatchedMeetupPagePropsType = {
  index: string | null;
};

type MatchingTeamsType = {
  myMatchingTeam: MeetupTeamType | null | undefined;
  newMatchingTeam: NewMeetupTeamListType | null;
  applyMatchingTeam: ApplyReceivedTeamListType | null;
  requestMatchingTeam: ApplyReceivedTeamListType | null;
};

const MatchedMeetupPage = ({ index }: MatchedMeetupPagePropsType) => {
  const [open, setOpen] = useState<boolean>(false);
  const [matchingTeam, setMatchingTeam] = useState<MeetupTeamType | null>();
  const navigate = useNavigate();

  ///

  const [matchingTeamList, setMatchingTeamList] = useState<MatchingTeamsType>({
    myMatchingTeam: null,
    newMatchingTeam: null,
    applyMatchingTeam: null,
    requestMatchingTeam: null,
  });

  const [ovrlpDays, setOvrlpDays] = useState<string[]>([]);
  const [matchState, setMatchState] = useState<string>('');

  const [modalState, setModalState] = useState<MatchingModalOpenType>({
    myMatchingModalOpen: false,
    newMatchingModalOpen: false,
    applyMatchingModalOpen: false,
    requestMatchingModalOpen: false,
  });

  const dayDescription: dayDescriptionType = {
    myMatchingModalOpen: '일치하는 요일이 많을 수록 매칭 확률이 높아요',
    newMatchingModalOpen: `나의 팀과 희망요일이 ${ovrlpDays.length}개 일치해요!`,
    registerMatchingModalOpen: `나의 팀과 희망요일이 ${ovrlpDays.length}개 일치해요!`,
    requestMatchingModalOpen:
      '나의 팀과 희망요일이 2개 일치해요!\n🟥: 일치하는 요일 ⬛️: 상대팀이 희망하는 요일',
  };

  const getActiveModalDescription = () => {
    const activeKey =
      Object.keys(modalState).find(key => modalState[key]) ||
      'myMatchingModalOpen';
    return dayDescription[activeKey];
  };

  const onClickModal = (
    key: keyof MatchingModalOpenType,
    matchingTeam: MeetupTeamType | undefined | null,
    matchState?: string,
  ) => {
    const teamListDays =
      matchingTeamList.myMatchingTeam?.selectedDays.split(',');
    const teamDays = matchingTeam?.selectedDays.split(',');

    const overlappingDays = teamListDays?.filter((day: string) =>
      teamDays?.includes(day),
    ) || ['월'];

    setOvrlpDays(overlappingDays);
    if (matchState) setMatchState(matchState);
    setMatchingTeam(matchingTeam);
    setOpen(open => !open);
    setModalState(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

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

  const _onLoadData = () => {
    setMatchingTeamList({
      myMatchingTeam: MY_MEETUP_TEAM_DETAIL_LIST.find((team, index) => {
        return team.teamId === index;
      }),
      newMatchingTeam: NEW_MATCHING_TEAM_LIST,
      applyMatchingTeam: APPLY_MEETUP_TEAM_LIST,
      requestMatchingTeam: RECEIVED_MEETUP_TEAM_LIST,
    });
  };

  useEffect(() => {
    _onLoadData();
  }, []);

  const renderButton = () => {
    if (modalState.registerMatchingModalOpen && matchState === 'WAITING') {
      return (
        <Button bgColor={theme.colors.gray200}>
          <Text
            fontSize={theme.fontSizes.lg}
            fontWeight={theme.fontWeights.semibold}
            textColor={theme.colors.black}
          >
            {'수락 대기중'}
          </Text>
        </Button>
      );
    } else if (
      modalState.requestMatchingModalOpen &&
      matchState === '확인하기'
    ) {
      return (
        <div style={{ display: 'flex', gap: `${rem(16)}` }}>
          <Button bgColor={theme.colors.gray200} width="100%">
            <Text
              fontSize={theme.fontSizes.lg}
              fontWeight={theme.fontWeights.semibold}
              textColor={theme.colors.black}
            >
              {'거절하기'}
            </Text>
          </Button>
          <Button
            bgColor={theme.colors.red.accent}
            width="100%"
            onClick={() => navigate('/meetup/matched/success')}
          >
            <Text
              fontSize={theme.fontSizes.lg}
              fontWeight={theme.fontWeights.semibold}
              textColor={theme.colors.white}
            >
              {'수락하기'}
            </Text>
          </Button>
        </div>
      );
    } else if (modalState.newMatchingModalOpen) {
      return (
        <Button bgColor={theme.colors.red.accent}>
          <Text
            fontSize={theme.fontSizes.lg}
            fontWeight={theme.fontWeights.semibold}
            textColor={theme.colors.white}
          >
            {'신청하기'}
          </Text>
        </Button>
      );
    } else {
      return (
        <Button bgColor={theme.colors.black} onClick={() => setOpen(!open)}>
          <Text
            fontSize={theme.fontSizes.lg}
            fontWeight={theme.fontWeights.semibold}
            textColor={theme.colors.white}
          >
            {'확인'}
          </Text>
        </Button>
      );
    }
  };

  return (
    <Layout arrow borderline title={'과팅 매칭'}>
      <Modal isOpen={open} onStateChange={() => setOpen(!open)}>
        <Modal.Content>
          <MatchedMeetupModalLayout>
            <div
              style={{
                position: 'absolute',
                top: 26,
                right: 26,
                cursor: 'pointer',
              }}
              // onClick={() => setOpen(!open)}
            >
              <CloseIcon color="#000" />
            </div>
            <div style={{ marginBottom: `${rem(40)}` }}>
              <Text
                fontSize={theme.fontSizes.xs}
                fontWeight={theme.fontWeights.normal}
                textColor={theme.colors.gray500}
                textAlign={'center'}
                style={{ marginBottom: `${rem(6)}` }}
              >
                {matchingTeam?.teamUniv}
              </Text>
              <Text
                fontSize={theme.fontSizes.xl}
                fontWeight={theme.fontWeights.semibold}
                textAlign={'center'}
              >
                {matchingTeam?.teamName}
              </Text>
            </div>
            <MatchedModalItemsBox>
              {matchingTeam?.teamMembers.map(
                (
                  {
                    name,
                    studentNumber,
                    profileUri,
                    department,
                    oneLineInfo,
                  }: MeetupMemberInfoType,
                  index: number,
                ) => {
                  return (
                    <MatchedModalItemBox>
                      <MatchedModalProfileImageBox
                        $image={profileUri}
                        key={index}
                      />
                      <MatchedModalProfileIntroductionBox>
                        <Text
                          fontSize={theme.fontSizes.md}
                          fontWeight={theme.fontWeights.medium}
                          style={{ marginBottom: `${rem(6)}` }}
                        >
                          {name}
                        </Text>
                        <Text
                          fontSize={theme.fontSizes.xs}
                          fontWeight={theme.fontWeights.medium}
                          textColor={theme.colors.red.accent}
                          style={{ marginBottom: `${rem(12)}` }}
                        >
                          {department + ' • ' + studentNumber}
                        </Text>
                        <Text
                          textColor={theme.colors.gray500}
                          lineHeight={'140%'}
                        >
                          {oneLineInfo}
                        </Text>
                      </MatchedModalProfileIntroductionBox>
                    </MatchedModalItemBox>
                  );
                },
              )}
            </MatchedModalItemsBox>
            <div>
              <Text
                fontSize={theme.fontSizes.xl}
                fontWeight={theme.fontWeights.semibold}
                textAlign={'center'}
                style={{ marginBottom: `${rem(12)}` }}
              >
                {matchingTeam?.teamName + '팀이 희망하는 요일'}
              </Text>
              <Text
                fontSize={theme.fontSizes.xs}
                fontWeight={theme.fontWeights.medium}
                textColor={theme.colors.gray500}
                textAlign={'center'}
                style={{ marginBottom: `${rem(26)}` }}
              >
                {getActiveModalDescription()}
              </Text>
            </div>
            <MatchedWeeksBox>
              {DAYWEEKS.map(week => {
                return (
                  <MatchedWeekBox
                    $isCheckGroup={
                      ovrlpDays.includes(week)
                        ? 'ovrlpDay'
                        : matchingTeam?.selectedDays.includes(week)
                          ? 'normal'
                          : 'default'
                    }
                  >
                    <Text>{week}</Text>
                  </MatchedWeekBox>
                );
              })}
            </MatchedWeeksBox>
            {renderButton()}
          </MatchedMeetupModalLayout>
        </Modal.Content>
      </Modal>
      <Text
        fontSize={theme.fontSizes.xl}
        fontWeight={theme.fontWeights.semibold}
        style={{ marginTop: `${rem(28)}` }}
      >
        {'나의 과팅'}
      </Text>
      <MyMeetupsCol>
        <MyMeetupBox key={index}>
          <MatchingTeamItemBottom>
            <MatchedGap>
              <Text
                fontSize={theme.fontSizes.md}
                fontWeight={theme.fontWeights.medium}
              >
                {matchingTeamList.myMatchingTeam?.teamName}
              </Text>
              <Text
                fontSize={theme.fontSizes['2xs']}
                fontWeight={theme.fontWeights.medium}
                textColor={theme.colors.gray500}
              >
                {matchingTeamList.myMatchingTeam?.groupType}
              </Text>
            </MatchedGap>
          </MatchingTeamItemBottom>
          <CustomButton
            onClick={() =>
              onClickModal(
                'myMatchingModalOpen',
                matchingTeamList.myMatchingTeam,
              )
            }
          >
            <Text
              fontSize={theme.fontSizes.xs}
              fontWeight={theme.fontWeights.semibold}
              textColor={theme.colors.white}
            >
              {'확인하기'}
            </Text>
          </CustomButton>
        </MyMeetupBox>
      </MyMeetupsCol>
      <MatchedMeetupHeader>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
        >
          {'새로 올라온 과팅'}
        </Text>
        <Text
          fontSize={theme.fontSizes.xs}
          fontWeight={theme.fontWeights.medium}
          textColor={theme.colors.gray500}
        >
          {'전체 보기'}
        </Text>
      </MatchedMeetupHeader>
      <NewMeetupsCol>
        {matchingTeamList.newMatchingTeam?.teamList.map(
          (
            {
              opponentTeamId,
              teamName,
              teamUniv,
              isNew,
              isHot,
              teamProf,
            }: NewMeetupTeamInfoType,
            index: number,
          ) => {
            return (
              <MatchingTeamItemBox
                key={index}
                onClick={() =>
                  onClickModal('newMatchingModalOpen', opponentTeamId)
                }
              >
                <MatchingTeamItemTop>
                  <MatchingMemberProfilesBox>
                    {teamProf.map((img: string, index: number) => {
                      return (
                        <MatchingMemberProfileBox
                          $zIndex={teamProf.length}
                          $image={img}
                          key={index}
                        />
                      );
                    })}
                  </MatchingMemberProfilesBox>
                  {isNew && (
                    <MatchingTypeTag>
                      <Text
                        textColor={theme.colors.white}
                        fontSize={theme.fontSizes['3xs']}
                        fontWeight={theme.fontWeights.bold}
                      >
                        {isHot ? 'HOT' : 'NEW'}
                      </Text>
                    </MatchingTypeTag>
                  )}
                </MatchingTeamItemTop>
                <MatchingTeamItemBottom>
                  <MatchedGap>
                    <MatchingTeamTextBox>
                      <Text
                        fontSize={theme.fontSizes.md}
                        fontWeight={theme.fontWeights.semibold}
                      >
                        {teamName}
                      </Text>
                      <CaratRightIcon width={14} />
                    </MatchingTeamTextBox>
                    <Text
                      fontSize={theme.fontSizes['2xs']}
                      fontWeight={theme.fontWeights.normal}
                      textColor={theme.colors.gray500}
                    >
                      {teamUniv}
                    </Text>
                  </MatchedGap>
                </MatchingTeamItemBottom>
              </MatchingTeamItemBox>
            );
          },
        )}
      </NewMeetupsCol>
      <MatchedMeetupHeader>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
        >
          {'신청한 과팅'}
        </Text>
        <Text
          fontSize={theme.fontSizes.xs}
          fontWeight={theme.fontWeights.medium}
          textColor={theme.colors.gray500}
        >
          {'전체 보기'}
        </Text>
      </MatchedMeetupHeader>
      <NewMeetupsCol>
        {matchingTeamList.applyMatchingTeam?.teamList.map(
          (
            {
              opponentTeamId,
              teamName,
              teamUniv,
              matchState,
            }: ApplyReceivedTeamInfoType,
            index: number,
          ) => {
            return (
              <MatchingTeamItemBox
                key={index}
                $isTop={false}
                onClick={() =>
                  onClickModal('registerMatchingModalOpen', opponentTeamId)
                }
              >
                <MatchingTeamItemBottom $isTop={false}>
                  <MatchedGap>
                    <MatchingTeamTextBox>
                      <Text
                        fontSize={theme.fontSizes.md}
                        fontWeight={theme.fontWeights.semibold}
                      >
                        {teamName}
                      </Text>
                      <CaratRightIcon width={14} />
                    </MatchingTeamTextBox>
                    <Text
                      fontSize={theme.fontSizes['2xs']}
                      fontWeight={theme.fontWeights.normal}
                      textColor={theme.colors.gray500}
                    >
                      {teamUniv}
                    </Text>
                  </MatchedGap>
                  <MatchedTag type={matchState} />
                </MatchingTeamItemBottom>
              </MatchingTeamItemBox>
            );
          },
        )}
      </NewMeetupsCol>
      <MatchedMeetupHeader>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
        >
          {'요청받은 과팅'}
        </Text>
        <Text
          fontSize={theme.fontSizes.xs}
          fontWeight={theme.fontWeights.medium}
          textColor={theme.colors.gray500}
        >
          {'전체 보기'}
        </Text>
      </MatchedMeetupHeader>
      <NewMeetupsCol>
        {matchingTeamList.requestMatchingTeam?.teamList.map(
          (
            {
              opponentTeamId,
              teamName,
              teamUniv,
              matchState,
            }: ApplyReceivedTeamInfoType,
            index: number,
          ) => {
            return (
              <MatchingTeamItemBox
                key={index}
                onClick={() =>
                  onClickModal('requestMatchingModalOpen', opponentTeamId)
                }
              >
                <MatchingTeamItemBottom>
                  <MatchedGap>
                    <MatchingTeamTextBox>
                      <Text
                        fontSize={theme.fontSizes.md}
                        fontWeight={theme.fontWeights.semibold}
                      >
                        {teamName}
                      </Text>
                      <CaratRightIcon width={14} />
                    </MatchingTeamTextBox>
                    <Text
                      fontSize={theme.fontSizes['2xs']}
                      fontWeight={theme.fontWeights.normal}
                      textColor={theme.colors.gray500}
                    >
                      {teamUniv}
                    </Text>
                  </MatchedGap>
                  <MatchedTag type={matchState} />
                </MatchingTeamItemBottom>
              </MatchingTeamItemBox>
            );
          },
        )}
      </NewMeetupsCol>
    </Layout>
  );
};

export default MatchedMeetupPage;

const MatchedMeetupHeader = styled.div`
  ${props => props.theme.layout.centerY}
  justify-content: space-between;
`;

const MyMeetupBox = styled.div`
  ${theme.layout.centerY}
  justify-content: space-between;
  width: 100%;
  height: ${rem(70)};
  padding: ${rem(16)} ${rem(17)} ${rem(16)} ${rem(16)};

  border-radius: ${rem(10)};
  border: ${rem(1)} solid ${theme.colors.gray250};
  background: ${theme.colors.white};
`;

const CustomButton = styled.div`
  ${theme.layout.center}
  height: ${rem(38)};
  padding: ${rem(12)} ${rem(10)};

  border-radius: ${rem(6)};
  background: ${theme.colors.black};

  cursor: pointer;
`;

const MyMeetupsCol = styled.div`
  ${theme.layout.columnCenter}

  margin: ${rem(17)} 0 ${rem(38)} 0;
  gap: ${rem(16)};
`;

const NewMeetupsCol = styled.div`
  ${theme.layout.columnCenter}
  margin: ${rem(16)} 0 ${rem(36)} 0;
  gap: ${rem(16)};
`;

const MatchingTeamTextBox = styled.div`
  ${theme.layout.centerY}
  gap: ${rem(6)};
`;

type MatchedType = {
  type: string;
};

const MatchedTag = ({ type }: MatchedType) => {
  return (
    <Fragment>
      <MatchedColorTagBox $type={type}>
        <Text
          fontSize={theme.fontSizes.xs}
          textColor={
            type === '매칭 성공' || type === '확인하기'
              ? theme.colors.white
              : theme.colors.black
          }
          fontWeight={theme.fontWeights.semibold}
        >
          {type}
        </Text>
        {type === '매칭 성공' && <CaratRightIcon stroke="#ffffff" />}
      </MatchedColorTagBox>
    </Fragment>
  );
};

const MatchedColorTagBox = styled.div<{ $type: string }>`
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

const MatchedGap = styled.div`
  ${theme.layout.column}
  gap: ${rem(4)};
`;

///

const MatchedModalItemsBox = styled.div`
  ${theme.layout.columnCenter};

  gap: ${rem(44)};
  margin-bottom: ${rem(64)};
`;

const MatchedModalItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(16)};
`;

const MatchedModalProfileImageBox = styled.div<{ $image: string | null }>`
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

const MatchedModalProfileIntroductionBox = styled.div`
  ${theme.layout.column};
`;

const MatchedMeetupModalLayout = styled.div`
  padding: ${rem(48)} ${rem(30)} ${rem(30)};
  background-color: #fff;
  height: ${rem(400)};
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  border-radius: ${rem(10)};

  margin: ${rem(-30)};

  position: relative;
`;
