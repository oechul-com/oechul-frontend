import { CaratRightIcon, CloseIcon, FilterIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';
import {
  ApplyReceivedTeamInfoType,
  MeetupMemberInfoType,
  MeetupTeamType,
  NewMeetupTeamInfoType,
} from '@/types/meetup';

import { renderText } from './\bshared/renderText';
import { MEETUP_TEAM_DETAIL_LIST } from './matched/mockData';
import { MatchingModalOpenType, dayDescriptionType } from './matched/type';
import {
  NewMeetupsCol,
  MatchingTeamTextBox,
  MatchedGap,
  MatchedMeetupModalLayout,
  MatchedModalItemBox,
  MatchedModalItemsBox,
  MatchedModalProfileImageBox,
  MatchedModalProfileIntroductionBox,
} from './meetup.styles';
import { MatchedTag } from './team';
import {
  MatchingTeamItemBox,
  MatchingTeamItemTop,
  MatchingMemberProfilesBox,
  MatchingMemberProfileBox,
  MatchingTypeTag,
  MatchingTeamItemBottom,
  MatchedWeekBox,
  MatchedWeeksBox,
} from '../dashboard/matched.styles';

const DAYWEEKS = ['월', '화', '수', '목', '금', '토', '일'];

const MeetupTeamListPage = ({ teamType }: { teamType: string | null }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    state: { team, myTeam, title },
  } = location;

  const [open, setOpen] = useState<boolean>(false);
  const [ovrlpDays, setOvrlpDays] = useState<string[]>([]);
  const [nonOvrlpDays, setNonOvrlpDays] = useState<string[]>([]);

  const [matchState, setMatchState] = useState<string>('');

  const [modalState, setModalState] = useState<MatchingModalOpenType>({
    newMatchingModalOpen: false,
    applyMatchingModalOpen: false,
    requestMatchingModalOpen: false,
  });
  const [matchingTeam, setMatchingTeam] = useState<MeetupTeamType | null>();

  const dayDescription: dayDescriptionType = {
    myMatchingModalOpen: ['일치하는 요일이 많을 수록 매칭 확률이 높아요.'],
    newMatchingModalOpen: [
      `나의 팀과 희망요일이 ${ovrlpDays.length}개 일치해요!\n\n🟥: 일치하는 요일 ⬛️: 상대팀이 희망하는 요일`,
      '일치하는 요일이 많을 수록 매칭 확률이 높아요.\n희망하는 요일을 선택해주세요.',
    ],
    applyMatchingModalOpen: [
      `나의 팀과 희망요일이 ${ovrlpDays.length}개 일치해요!`,
    ],
    requestMatchingModalOpen: [
      `나의 팀과 희망요일이 ${ovrlpDays.length}개 일치해요!\n\n🟥: 일치하는 요일 ⬛️: 상대팀이 희망하는 요일`,
    ],
  };

  const onClickModal = (
    key: keyof MatchingModalOpenType,
    matchingTeam: MeetupTeamType | undefined | null,
    matchState?: string,
  ) => {
    const teamListDays = myTeam.selectedDays.split(',') || [];
    const teamDays = matchingTeam?.selectedDays.split(',') || [];

    const overlappingDays = teamListDays.filter((day: string) =>
      teamDays.includes(day),
    );

    const unionDays = [...new Set([...teamListDays, ...teamDays])];

    const nonOverlappingDays = unionDays.filter(
      (day: string) => !overlappingDays.includes(day),
    );

    setOvrlpDays(overlappingDays);
    setNonOvrlpDays(nonOverlappingDays);
    if (matchState) setMatchState(matchState);
    setMatchingTeam(matchingTeam);
    setOpen(open => !open);
    setModalState(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const _onLoadModalData = async (
    key: keyof MatchingModalOpenType,
    teamId: number,
    matchState?: string,
  ) => {
    // try {
    //   const response = await getMeetupTeam();
    // } catch (error) {}

    if (matchState === 'SUCCESS') {
      navigate('/meetup/matched/success');
      return;
    }
    onClickModal(
      key,
      MEETUP_TEAM_DETAIL_LIST.find((team: MeetupTeamType) => {
        return team.teamId === Number(teamId);
      }),
      matchState,
    );
  };

  const getActiveModalDescription = () => {
    const activeKey =
      Object.keys(modalState).find(key => modalState[key]) ||
      'myMatchingModalOpen';
    return dayDescription[activeKey][0];
  };

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
      matchState === 'WAITING'
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
    <Layout title={title} visibleHeader arrow borderline>
      <Modal isOpen={open} onStateChange={() => setOpen(!open)}>
        <Modal.Content>
          <MatchedMeetupModalLayout>
            <div
              style={{
                position: 'absolute',
                top: `${rem(26)}`,
                right: `${rem(26)}`,
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
                        : nonOvrlpDays.includes(week)
                          ? 'normal'
                          : 'default'
                    }
                  >
                    <Text>{week}</Text>
                  </MatchedWeekBox>
                );
              })}
            </MatchedWeeksBox>
            {modalState.newMatchingModalOpen && (
              <Fragment>
                <Text
                  fontSize={theme.fontSizes.xl}
                  fontWeight={theme.fontWeights.normal}
                  textAlign={'center'}
                  style={{ marginBottom: `${rem(12)}` }}
                >
                  {'우리팀이 희망하는 요일'}
                </Text>
                <Text
                  fontSize={theme.fontSizes.xs}
                  fontWeight={theme.fontWeights.normal}
                  textColor={theme.colors.gray500}
                  textAlign={'center'}
                  style={{ marginBottom: `${rem(26)}` }}
                >
                  {dayDescription['newMatchingModalOpen'][1]}
                </Text>
                <MatchedWeeksBox>
                  {DAYWEEKS.map(week => {
                    return (
                      <MatchedWeekBox
                        $isCheckGroup={
                          myTeam.selectedDays.split(',').includes(week)
                            ? 'normal'
                            : 'default'
                        }
                      >
                        <Text>{week}</Text>
                      </MatchedWeekBox>
                    );
                  })}
                </MatchedWeeksBox>
              </Fragment>
            )}
            {renderButton()}
          </MatchedMeetupModalLayout>
        </Modal.Content>
      </Modal>
      <SortedButton>
        <FilterIcon />
        {'최신순'}
      </SortedButton>

      {teamType === 'new' && (
        <NewMeetupsCol>
          {team.teamList.map(
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
                    _onLoadModalData('newMatchingModalOpen', opponentTeamId)
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
      )}
      {teamType === 'apply' && (
        <NewMeetupsCol>
          {team.teamList.map(
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
                    _onLoadModalData(
                      'applyMatchingModalOpen',
                      opponentTeamId,
                      matchState,
                    )
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
                    <MatchedTag
                      type={renderText('applyMatchingModalOpen', matchState)}
                    />
                  </MatchingTeamItemBottom>
                </MatchingTeamItemBox>
              );
            },
          )}
        </NewMeetupsCol>
      )}
      {teamType === 'received' && (
        <NewMeetupsCol>
          {team.teamList.map(
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
                    _onLoadModalData(
                      'requestMatchingModalOpen',
                      opponentTeamId,
                      matchState,
                    )
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
                    <MatchedTag
                      type={renderText('requestMatchingModalOpen', matchState)}
                    />
                  </MatchingTeamItemBottom>
                </MatchingTeamItemBox>
              );
            },
          )}
        </NewMeetupsCol>
      )}
    </Layout>
  );
};

export default MeetupTeamListPage;

const SortedButton = styled.div`
  ${theme.layout.center};
  width: ${rem(69)};
  padding: ${rem(5)};
  gap: ${rem(4)};

  border-radius: ${rem(6)};
  background: ${theme.colors.gray200};

  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};

  margin-top: ${rem(30)};

  cursor: pointer;
`;
