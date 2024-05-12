import { CaratRightIcon, CloseIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';

import {
  APPLY_MATCHING_TEAM_LIST,
  MY_MATCHING_TEAM_LIST,
  NEW_MATCHING_TEAM_LIST,
  REQUEST_MATCHING_TEAM_LIST,
} from './matched/mockData';
import {
  MatchingTeamType,
  MyMatchingTeamType,
  MatchingModalOpenType,
  dayDescriptionType,
  StudentInfoType,
  RequireApplyMatchingTeamType,
} from './matched/type';
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

type MatchingTeamsType = {
  myMatchingTeam: MyMatchingTeamType[];
  newMatchingTeam: MatchingTeamType[];
  applyMatchingTeam: RequireApplyMatchingTeamType[];
  requestMatchingTeam: RequireApplyMatchingTeamType[];
};

const MatchedMeetupPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [matchingTeam, setMatchingTeam] = useState<
    MatchingTeamType | MyMatchingTeamType
  >();
  const navigate = useNavigate();

  ///

  const [matchingTeamList, setMatchingTeamList] = useState<MatchingTeamsType>({
    myMatchingTeam: [],
    newMatchingTeam: [],
    applyMatchingTeam: [],
    requestMatchingTeam: [],
  });

  const [ovrlpDays, setOvrlpDays] = useState<string[]>([]);

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

  const myMatchingTeamDays = ['일', '화', '금'];

  const getActiveModalDescription = () => {
    const activeKey =
      Object.keys(modalState).find(key => modalState[key]) ||
      'myMatchingModalOpen';
    return dayDescription[activeKey];
  };

  const onClickModal = (
    key: keyof MatchingModalOpenType,
    matchingTeam: MatchingTeamType | MyMatchingTeamType,
  ) => {
    const ovlpElements = myMatchingTeamDays.filter(element =>
      matchingTeam.days.includes(element),
    );
    setOvrlpDays(ovlpElements);
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
      myMatchingTeam: MY_MATCHING_TEAM_LIST,
      newMatchingTeam: NEW_MATCHING_TEAM_LIST,
      applyMatchingTeam: APPLY_MATCHING_TEAM_LIST,
      requestMatchingTeam: REQUEST_MATCHING_TEAM_LIST,
    });
  };

  useEffect(() => {
    _onLoadData();
  }, []);

  const renderButton = () => {
    if (
      modalState.registerMatchingModalOpen &&
      matchingTeam?.type === '매칭 중'
    ) {
      return (
        <Button bgColor="#F5F5F5">
          <Text fontSize="18px" fontWeight="600" textColor="#000">
            {'수락 대기중'}
          </Text>
        </Button>
      );
    } else if (
      modalState.requestMatchingModalOpen &&
      matchingTeam?.type === '확인하기'
    ) {
      return (
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button bgColor="#F5F5F5" width="100%">
            <Text fontSize="18px" fontWeight="600" textColor="#000">
              {'거절하기'}
            </Text>
          </Button>
          <Button
            bgColor="#FF4B4B"
            width="100%"
            onClick={() => navigate('/meetup/matched/success')}
          >
            <Text fontSize="18px" fontWeight="600" textColor="#ffffff">
              {'수락하기'}
            </Text>
          </Button>
        </div>
      );
    } else if (modalState.newMatchingModalOpen) {
      return (
        <Button
          bgColor="#FF4B4B"
          onClick={() => navigate('/meetup/matched/success')}
        >
          <Text fontSize="18px" fontWeight="600" textColor="#fff">
            {'신청하기'}
          </Text>
        </Button>
      );
    } else {
      return (
        <Button bgColor="#000000" onClick={() => setOpen(!open)}>
          <Text fontSize="18px" fontWeight="600" textColor="#fff">
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
            >
              <CloseIcon color="#000" />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <Text
                fontSize={theme.fontSizes.xs}
                fontWeight={theme.fontWeights.normal}
                textColor={theme.colors.gray500}
                textAlign={'center'}
                style={{ marginBottom: '6px' }}
              >
                {matchingTeam?.school}
              </Text>
              <Text
                fontSize={theme.fontSizes.xl}
                fontWeight={theme.fontWeights.semibold}
                textAlign={'center'}
              >
                {matchingTeam?.title}
              </Text>
            </div>
            <MatchedModalItemsBox>
              {matchingTeam?.member.map(
                (
                  {
                    name,
                    studentId,
                    img,
                    department,
                    selfIntroduction,
                  }: StudentInfoType,
                  index,
                ) => {
                  return (
                    <MatchedModalItemBox>
                      <MatchedModalProfileImageBox $image={img} key={index} />
                      <MatchedModalProfileIntroductionBox>
                        <Text
                          fontSize={theme.fontSizes.md}
                          fontWeight={theme.fontWeights.medium}
                          style={{ marginBottom: '6px' }}
                        >
                          {name}
                        </Text>
                        <Text
                          fontSize={theme.fontSizes.xs}
                          fontWeight={theme.fontWeights.medium}
                          textColor={theme.colors.red.accent}
                          style={{ marginBottom: '12px' }}
                        >
                          {department + ' • ' + studentId}
                        </Text>
                        <Text
                          textColor={theme.colors.gray500}
                          lineHeight={'140%'}
                        >
                          {selfIntroduction}
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
                style={{ marginBottom: '12px' }}
              >
                {matchingTeam?.title + '팀이 희망하는 요일'}
              </Text>
              <Text
                fontSize={theme.fontSizes.xs}
                fontWeight={theme.fontWeights.medium}
                textColor={theme.colors.gray500}
                textAlign={'center'}
                style={{ marginBottom: '26px' }}
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
                        : matchingTeam?.days.includes(week)
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
        style={{ marginTop: '28px' }}
      >
        {'나의 과팅'}
      </Text>
      <MyMeetupsCol>
        {matchingTeamList.myMatchingTeam.map(
          (
            { member, title, school, days }: MyMatchingTeamType,
            index: number,
          ) => {
            return (
              <MyMeetupBox key={index}>
                <MatchingTeamItemBottom>
                  <MatchedGap>
                    <Text
                      fontSize={theme.fontSizes.md}
                      fontWeight={theme.fontWeights.medium}
                    >
                      {title}
                    </Text>
                    <Text
                      fontSize={theme.fontSizes['2xs']}
                      fontWeight={theme.fontWeights.medium}
                      textColor={theme.colors.gray500}
                    >
                      {member.length}
                    </Text>
                  </MatchedGap>
                </MatchingTeamItemBottom>
                <CustomButton
                  onClick={() =>
                    onClickModal('myMatchingModalOpen', {
                      member,
                      title,
                      school,
                      days,
                    })
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
            );
          },
        )}
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
        {matchingTeamList.newMatchingTeam.map(
          (
            { member, title, school, days }: MatchingTeamType,
            index: number,
          ) => {
            return (
              <MatchingTeamItemBox
                key={index}
                onClick={() =>
                  onClickModal('newMatchingModalOpen', {
                    member,
                    title,
                    school,
                    days,
                  })
                }
              >
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
                  <MatchingTypeTag>
                    <Text
                      textColor={theme.colors.white}
                      fontSize={theme.fontSizes['3xs']}
                      fontWeight={theme.fontWeights.bold}
                    >
                      {'NEW'}
                    </Text>
                  </MatchingTypeTag>
                </MatchingTeamItemTop>
                <MatchingTeamItemBottom>
                  <MatchedGap>
                    <MatchingTeamTextBox>
                      <Text
                        fontSize={theme.fontSizes.md}
                        fontWeight={theme.fontWeights.semibold}
                      >
                        {title}
                      </Text>
                      <CaratRightIcon width={14} />
                    </MatchingTeamTextBox>
                    <Text
                      fontSize={theme.fontSizes['2xs']}
                      fontWeight={theme.fontWeights.normal}
                      textColor={theme.colors.gray500}
                    >
                      {school}
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
        {matchingTeamList.applyMatchingTeam.map(
          (
            { title, school, type, member, days }: RequireApplyMatchingTeamType,
            index: number,
          ) => {
            return (
              <MatchingTeamItemBox
                key={index}
                $isTop={false}
                onClick={() =>
                  onClickModal('registerMatchingModalOpen', {
                    member,
                    title,
                    school,
                    days,
                    type,
                  })
                }
              >
                <MatchingTeamItemBottom $isTop={false}>
                  <MatchedGap>
                    <MatchingTeamTextBox>
                      <Text
                        fontSize={theme.fontSizes.md}
                        fontWeight={theme.fontWeights.semibold}
                      >
                        {title}
                      </Text>
                      <CaratRightIcon width={14} />
                    </MatchingTeamTextBox>
                    <Text
                      fontSize={theme.fontSizes['2xs']}
                      fontWeight={theme.fontWeights.normal}
                      textColor={theme.colors.gray500}
                    >
                      {school}
                    </Text>
                  </MatchedGap>
                  <MatchedTag type={type} />
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
        {matchingTeamList.requestMatchingTeam.map(
          (
            { title, school, type, member, days }: RequireApplyMatchingTeamType,
            index: number,
          ) => {
            return (
              <MatchingTeamItemBox
                key={index}
                onClick={() =>
                  onClickModal('requestMatchingModalOpen', {
                    member,
                    title,
                    school,
                    days,
                    type,
                  })
                }
              >
                <MatchingTeamItemBottom>
                  <MatchedGap>
                    <MatchingTeamTextBox>
                      <Text
                        fontSize={theme.fontSizes.md}
                        fontWeight={theme.fontWeights.semibold}
                      >
                        {title}
                      </Text>
                      <CaratRightIcon width={14} />
                    </MatchingTeamTextBox>
                    <Text
                      fontSize={theme.fontSizes['2xs']}
                      fontWeight={theme.fontWeights.normal}
                      textColor={theme.colors.gray500}
                    >
                      {school}
                    </Text>
                  </MatchedGap>
                  <MatchedTag type={type} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 44px;
  margin-bottom: 64px;
`;

const MatchedModalItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const MatchedModalProfileImageBox = styled.div<{ $image: string }>`
  width: 60px;
  height: 60px;
  border-radius: 75px;
  border: ${rem(1)} solid ${theme.colors.gray250};
  background-image: url(${props => props.$image});
  background-color: ${theme.colors.gray200};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  flex-shrink: 0;
`;

const MatchedModalProfileIntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MatchedMeetupModalLayout = styled.div`
  padding: ${rem(48)} ${rem(30)} ${rem(30)};
  background-color: #fff;
  height: 400px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  border-radius: 10px;

  margin: -30px;

  position: relative;
`;
