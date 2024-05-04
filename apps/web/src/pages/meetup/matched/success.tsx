import { CallIcon, InstagramIcon, MinusIcon, PlusIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Text } from '@oechul/ui';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';

type StudentInfoType = {
  name: string;
  img: string;
  department: string;
  studentId: string;
  selfIntroduction: string;
};

// type MatchedSuccessProps = {
//   matchingTeam: MatchingTeamType;
// };

// type MatchingTeamType = {
//   type: 'HOST' | 'MEMBER';
//   member: StudentInfoType[];
//   title: string;
//   school?: string;
//   current: string;
//   days: string[];
// };

const DAYWEEKS = ['월', '화', '수', '목', '금', '토', '일'];

const MatchedSuccessPage = () => {
  const matchingTeam = {
    type: 'MEMBER',
    member: [
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
      {
        name: 'student',
        img: '/static/assets/common/image-logo.svg',
        department: '컴퓨터공학과',
        studentId: '20학번',
        selfIntroduction:
          '안녕하세요 컴공과 김원정이라는 사람입니다. 말 줄임은 단어 기준으로 ',
      },
    ],
    title: '소통합시다잉',
    school: '한국외국어대학교 글로벌캠퍼스',
    current: '확인하기',
    days: ['월, 화'],
  };

  const [ovrlpDays, setOvrlpDays] = useState<string[]>(['월, 금']);
  const [isBlur, setIsBlur] = useState<boolean>(true);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setOvrlpDays([]);
  }, []);
  return (
    <Layout visibleHeader arrow>
      <div style={{ touchAction: `${isBlur ? 'none' : 'auto'}` }}>
        <div>
          <Text
            fontSize="96px"
            fontWeight="600"
            textAlign="center"
            style={{ marginBottom: '16px' }}
          >
            {'🍻'}
          </Text>
          <Text
            fontSize="32px"
            textAlign="center"
            fontWeight="600"
            style={{ marginBottom: '64px' }}
          >
            {'과팅매칭 성공!'}
          </Text>
        </div>
        <div style={{ position: 'relative' }}>
          {isBlur && (
            <MatchedBlurBox>
              <Button
                bgColor="#FF4B4B"
                width="100%"
                onClick={() => setIsBlur(!isBlur)}
                style={{ marginTop: '297px' }}
              >
                <Text fontSize="18px" fontWeight="600" textColor="#fff">
                  {'매칭 결과 확인하기'}
                </Text>
              </Button>
            </MatchedBlurBox>
          )}
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
        </div>
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
            {'나의 팀과 희망요일이 2개 일치해요!'}
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
        <Text
          fontSize={'20px'}
          fontWeight={'600'}
          textAlign={'center'}
          style={{ marginBottom: '26px' }}
        >
          {'대표연락처'}
        </Text>
        <ContactBox>
          <div style={{ display: 'flex' }}>
            <CallIcon />
            <Text style={{ marginLeft: '10px' }}>{'010-1234-5678'}</Text>
          </div>
          <ContactCopyBox>{'복사'}</ContactCopyBox>
        </ContactBox>
        <ContactBox style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex' }}>
            <InstagramIcon />
            <Text style={{ marginLeft: '10px' }}>{'lovu_bigmc'}</Text>
          </div>
          <ContactCopyBox>{'복사'}</ContactCopyBox>
        </ContactBox>
        <MatchingSuccessDescriptionBoxTop $isExpanded={isExpanded}>
          <Text
            fontSize={theme.fontSizes.md}
            fontWieght={theme.fontWeights.semibold}
            style={{ marginRight: `${rem(8)}` }}
          >
            {'💘'}
          </Text>
          <Text
            fontSize={theme.fontSizes.md}
            fontWieght={theme.fontWeights.semibold}
          >
            {'매칭은 어떤 방식으로 이루어지나요?'}
          </Text>
          {isExpanded ? (
            <MinusIcon
              style={{ marginLeft: 'auto' }}
              onClick={() => setIsExpanded(false)}
            />
          ) : (
            <PlusIcon
              style={{ marginLeft: 'auto' }}
              onClick={() => setIsExpanded(true)}
            />
          )}
        </MatchingSuccessDescriptionBoxTop>
        {isExpanded && (
          <MatchingSuccessDescriptionBoxBottom>
            <Text
              textColor={theme.colors.gray500}
              fontWeight={theme.fontWeights.medium}
              fontSize={theme.fontSizes.xs}
              lineHeight={'170%'}
            >
              {
                '매칭 성공 시 각 팀에게 해당 페이지가 전송됩니다. 대표 연락처를 통해 매칭 날짜와 장소를 정해주세요! 매칭 성공 시 팀 삭제 및 매칭 취소가 불가능해요.'
              }
            </Text>
          </MatchingSuccessDescriptionBoxBottom>
        )}
        <Button bgColor={'#000'} width={'100%'} style={{ margin: '49px 0' }}>
          <Text fontSize={'18px'} fontWeight={600} textColor={'#f8f8f8'}>
            {'확인'}
          </Text>
        </Button>
      </div>
    </Layout>
  );
};

export default MatchedSuccessPage;

const MatchedModalItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 44px;
  margin-bottom: 40px;
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

const MatchedWeeksBox = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 40px;
`;

const MatchedWeekBox = styled.div<{ $isCheckGroup: string }>`
  display: flex;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ $isCheckGroup }) =>
    $isCheckGroup === 'ovrlpDay'
      ? 'var(--accent, #ff4b4b)'
      : $isCheckGroup === 'normal'
        ? '#000'
        : '#999'};

  flex: 1 1 auto; /* 여기에 추가 */
  min-width: 4px; /* 너비가 0보다 작아지지 않도록 설정 */

  & > span {
    color: ${({ $isCheckGroup }) =>
      $isCheckGroup === 'default' ? '#d9d9d9' : '#fff'};
  }
`;

const MatchedBlurBox = styled.div`
  position: absolute;
  width: 339px;
  height: 100%;
  backdrop-filter: blur(1.5px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #fff 100%);
`;

const ContactBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15.5px 0 24px;

  width: 100%;
  height: 68px;

  border-radius: 10px;
  border: 1px solid var(--gray-gray250, #f0f0f0);
  background: var(--white, #fff);
`;

const ContactCopyBox = styled.div`
  display: flex;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 10px;
  background: var(--gray-gray200, #f5f5f5);

  font-size: 14px;
  font-weight: 600;
`;

export const MatchingSuccessDescriptionBoxTop = styled.div<{
  $isExpanded: boolean;
}>`
  ${props => props.theme.layout.centerY}
  width: 100%;
  padding: ${rem(16)};

  border-radius: ${props =>
    props.$isExpanded ? `${rem(10)} ${rem(10)} 0 0` : `${rem(10)}`};
  border-bottom: ${props =>
    props.$isExpanded ? `${rem(1)} solid ${theme.colors.gray200}` : 'none'};
  background: ${theme.colors.gray100};

  margin-top: ${rem(40)};
`;

export const MatchingSuccessDescriptionBoxBottom = styled.div`
  ${props => props.theme.layout.center}
  width: 100%;
  padding: ${rem(10)} ${rem(16)} ${rem(10)} ${rem(36)};
  gap: ${rem(10)};

  border-radius: 0 0 ${rem(10)} ${rem(10)};
  background: ${theme.colors.gray100};
`;
