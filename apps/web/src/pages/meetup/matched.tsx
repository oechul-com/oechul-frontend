import { CaratRightIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Text } from '@oechul/ui';
import { Fragment } from 'react';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';

import {
  MatchingTeamItemBox,
  MatchingTeamItemTop,
  MatchingMemberProfilesBox,
  MatchingMemberProfileBox,
  MatchingTypeTag,
  MatchingTeamItemBottom,
} from '../dashboard/dasyboard.styles';

type StudentInfoType = {
  name: string;
  img: string;
};

type MyMatchingTeamType = {
  member: StudentInfoType[];
  title: string;
  school: string;
};

type MatchingTeamType = {
  type: 'HOST' | 'MEMBER';
  member: StudentInfoType[];
  title: string;
  school?: string;
  current: string;
};

const MY_MATCHING_TEAM_LIST: MyMatchingTeamType[] = [
  {
    member: [{ name: 'student', img: '/static/assets/common/image-logo.svg' }],
    title: '소통합시다잉',
    school: '한국외국어대학교',
  },
  {
    member: [{ name: 'student', img: '/static/assets/common/image-logo.svg' }],
    title: '소통합시다잉',
    school: '한국외국어대학교',
  },
];

const MATCHING_TEAM_LIST: MatchingTeamType[] = [
  {
    type: 'HOST',
    member: [{ name: 'student', img: '/static/assets/common/image-logo.svg' }],
    title: '소통합시다잉',
    current: '매칭 중',
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
    current: '매칭 성공',
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
    current: '확인하기',
  },
];

const MatchedMeetupPage = () => {
  return (
    <Layout arrow borderline title={'과팅 매칭'}>
      <Text
        fontSize={theme.fontSizes.xl}
        fontWeight={theme.fontWeights.semibold}
        style={{ marginTop: '28px' }}
      >
        {'나의 과팅'}
      </Text>
      <MyMeetupsCol>
        {MY_MATCHING_TEAM_LIST.map(
          ({ member, title }: MyMatchingTeamType, index) => {
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
                <CustomButton>
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
        {MATCHING_TEAM_LIST.map(
          ({ member, title, school }: MatchingTeamType, index) => {
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
        {MATCHING_TEAM_LIST.map(
          ({ title, school, current }: MatchingTeamType, index) => {
            return (
              <MatchingTeamItemBox key={index} $isTop={false}>
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
                  <MatchedTag type={current} />
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
        {MATCHING_TEAM_LIST.map(
          ({ title, school, current }: MatchingTeamType, index) => {
            return (
              <MatchingTeamItemBox key={index}>
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
                  <MatchedTag type={current} />
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
