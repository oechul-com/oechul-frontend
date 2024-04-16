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
  school: string;
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
    school: '한국외국어대학교 글로벌캠퍼스',
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
                  <div>
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
                  </div>
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
                  <div>
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
                  </div>
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
                  <div>
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
                  </div>
                  <MatchedSuccess type={current} />
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
          ({ title, school }: MatchingTeamType, index) => {
            return (
              <MatchingTeamItemBox key={index}>
                <MatchingTeamItemBottom>
                  <div>
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
                  </div>
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
  display: flex;
  width: 100%;
  height: ${rem(70)};
  padding: 16px 17px 16px 16px;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  border: 1px solid var(--gray-gray250, #f0f0f0);
  background: var(--white, #fff);
`;

const CustomButton = styled.div`
  display: flex;
  height: 38px;
  padding: 12px 10px;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background: var(--black, #000);
`;

const MyMeetupsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 17px 0 38px 0;
  gap: 16px;
`;

const NewMeetupsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 16px 0 36px 0;
  gap: 16px;
`;

const MatchingTeamTextBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

type MatchedType = {
  type: string;
};

const MatchedSuccess = ({ type }: MatchedType) => {
  return (
    <Fragment>
      {type === '매칭 실패' || type === '매칭 거절' || type === '매칭 중' ? (
        <Text>{type}</Text>
      ) : (
        <MatchedSuccessBox $isSuccess={type === '매칭 성공'}>
          <Text
            fontSize={theme.fontSizes.xs}
            textColor={theme.colors.white}
            fontWeight={theme.fontWeights.semibold}
          >
            {type}
          </Text>
          {type === '매칭 성공' ? <CaratRightIcon stroke="#ffffff" /> : <></>}
        </MatchedSuccessBox>
      )}
    </Fragment>
  );
};

const MatchedSuccessBox = styled.div<{ $isSuccess?: boolean }>`
  display: flex;
  padding: 6px 8px;
  align-items: center;
  gap: 4px;

  border-radius: 100px;
  background: ${props => (props.$isSuccess ? '#ff4b4b' : '#000')};

  cursor: pointer;
`;
