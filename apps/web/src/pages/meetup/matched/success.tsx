import { CallIcon, InstagramIcon, MinusIcon, PlusIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Text } from '@oechul/ui';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';
import {
  MatchedWeeksBox,
  MatchedWeekBox,
} from '@/pages/dashboard/matched.styles';

type StudentInfoType = {
  name: string;
  img: string;
  department: string;
  studentId: string;
  selfIntroduction: string;
};

const DAYWEEKS = ['월', '화', '수', '목', '금', '토', '일'];

const MatchedSuccessPage = () => {
  const matchingTeam = {
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
    type: '확인하기',
    days: ['월', '화'],
  };

  const [ovrlpDays, setOvrlpDays] = useState<string[]>(['월', '금']);
  const [isBlur, setIsBlur] = useState<boolean>(true);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [instagramId, setInstagramId] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const onCopyText = (id: string) => {
    window.navigator.clipboard.writeText(id);
  };

  useEffect(() => {
    setOvrlpDays([]);
    setInstagramId('lovu_bigmc');
    setPhoneNumber('010-1234-5678');
  }, []);

  return (
    <Layout visibleHeader arrow>
      <div style={{ touchAction: `${isBlur ? 'none' : 'auto'}` }}>
        <div>
          <Text
            fontSize={theme.fontSizes['6xl']}
            fontWeight={theme.fontWeights.semibold}
            textAlign="center"
            style={{ marginBottom: `${rem(16)}` }}
          >
            {'🍻'}
          </Text>
          <Text
            fontSize={theme.fontSizes['2xl']}
            textAlign="center"
            fontWeight={theme.fontWeights.semibold}
            style={{ marginBottom: `${rem(64)}` }}
          >
            {'과팅매칭 성공!'}
          </Text>
        </div>
        <div style={{ position: 'relative' }}>
          {isBlur && (
            <MatchedBlurBox>
              <Button
                bgColor={theme.colors.red.accent}
                width="100%"
                onClick={() => setIsBlur(!isBlur)}
                style={{ marginTop: `${rem(297)}` }}
              >
                <Text
                  fontSize={theme.fontSizes.lg}
                  fontWeight={theme.fontWeights.semibold}
                  textColor={theme.colors.white}
                >
                  {'매칭 결과 확인하기'}
                </Text>
              </Button>
            </MatchedBlurBox>
          )}
          <div style={{ marginBottom: `${rem(40)}` }}>
            <Text
              fontSize={theme.fontSizes.xs}
              fontWeight={theme.fontWeights.normal}
              textColor={theme.colors.gray500}
              textAlign={'center'}
              style={{ marginBottom: `${rem(6)}` }}
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
            style={{ marginBottom: `${rem(12)}` }}
          >
            {matchingTeam?.title + '팀이 희망하는 요일'}
          </Text>
          <Text
            fontSize={theme.fontSizes.xs}
            fontWeight={theme.fontWeights.medium}
            textColor={theme.colors.gray500}
            textAlign={'center'}
            style={{ marginBottom: `${rem(26)}` }}
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
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.semibold}
          textAlign={'center'}
          style={{ marginBottom: `${rem(26)}` }}
        >
          {'대표연락처'}
        </Text>
        <ContactBox>
          <div style={{ display: 'flex' }}>
            <CallIcon />
            <Text style={{ marginLeft: `${rem(10)}` }}>{phoneNumber}</Text>
          </div>
          <ContactCopyBox
            onClick={() => {
              onCopyText(phoneNumber);
            }}
          >
            {'복사'}
          </ContactCopyBox>
        </ContactBox>
        <ContactBox style={{ marginTop: `${rem(16)}` }}>
          <div style={{ display: 'flex' }}>
            <InstagramIcon />
            <Text style={{ marginLeft: `${rem(10)}` }}>{instagramId}</Text>
          </div>
          <ContactCopyBox
            onClick={() => {
              onCopyText(instagramId);
            }}
          >
            {'복사'}
          </ContactCopyBox>
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
        <Button
          bgColor={theme.colors.black}
          width={'100%'}
          style={{ margin: `${rem(49)} 0` }}
        >
          <Text
            fontSize={theme.fontSizes.lg}
            fontWeight={theme.fontWeights.semibold}
            textColor={theme.colors.gray150}
          >
            {'확인'}
          </Text>
        </Button>
      </div>
    </Layout>
  );
};

export default MatchedSuccessPage;

const MatchedModalItemsBox = styled.div`
  ${theme.layout.columnCenter};

  gap: ${rem(44)};
  margin-bottom: ${rem(40)};
`;

const MatchedModalItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(16)};
`;

const MatchedModalProfileImageBox = styled.div<{ $image: string }>`
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

const MatchedBlurBox = styled.div`
  position: absolute;
  width: ${rem(339)};
  height: 100%;
  backdrop-filter: blur(${rem(1.5)});
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #fff 100%);
`;

const ContactBox = styled.div`
  ${theme.layout.centerY};
  justify-content: space-between;

  padding: 0 ${rem(15.5)} 0 ${rem(24)};

  width: 100%;
  height: ${rem(68)};

  border-radius: ${rem(10)};
  border: ${rem(1)} solid ${theme.colors.gray250};
  background: ${theme.colors.white};
`;

const ContactCopyBox = styled.div`
  ${theme.layout.center};
  padding: ${rem(10)} ${rem(14)};
  gap: ${rem(4)};

  border-radius: ${rem(10)};
  background: ${theme.colors.gray200};

  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};

  cursor: pointer;
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
