import { rem, theme } from '@oechul/styles';
import { Button, Input, Text } from '@oechul/ui';
import { Fragment, useState } from 'react';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';

const DashboardInviteCodeInputPage = () => {
  const [inviteCode, setInviteCode] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onClickInviteCodeButton = () => {
    setIsSuccess(isSuccess => !isSuccess);
  };

  return (
    <Layout visibleHeader>
      {isSuccess ? (
        <Fragment>
          <Text
            fontSize={theme.fontSizes['6xl']}
            fontWeight={theme.fontWeights['semibold']}
            textAlign={'center'}
            style={{ marginTop: `${rem(7)}` }}
          >
            {'🍻'}
          </Text>
          <Text
            variant="title"
            textAlign={'center'}
            style={{ marginTop: `${rem(26)}` }}
          >
            {'과팅매칭 입장 완료!'}
          </Text>
          <Text
            fontSize={theme.fontSizes['md']}
            fontWeight={theme.fontWeights['medium']}
            textAlign={'center'}
            style={{ marginTop: `${rem(16)}` }}
          >
            {'00 님이 생성하신 매칭 팀에 들어왔어요!'}
          </Text>
          <MatchingSuccessDescriptionBoxTop>
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
              {'매칭이 성공하면 어떻게 되나요?'}
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="2"
              viewBox="0 0 15 2"
              fill="none"
              style={{ marginLeft: 'auto' }}
            >
              <rect y="0.5" width="15" height="1" fill="black" />
            </svg>
          </MatchingSuccessDescriptionBoxTop>
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
          <Button bgColor={theme.colors.black}>
            <Text
              fontSize={theme.fontSizes['lg']}
              fontWeight={theme.fontWeights['semibold']}
            >
              {'매칭 하러가기'}
            </Text>
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <Text variant="title">{'초대 코드 입력'}</Text>
          <DescriptionBox>
            <Text>{'💡'}</Text>
            <Text
              fontSize={theme.fontSizes.xs}
              fontWeight={theme.fontWeights.semibold}
            >
              {'팀 인원 초과 시 입장이 불가능해요'}
            </Text>
          </DescriptionBox>
          <Input
            label="초대코드"
            value={inviteCode}
            onChange={e => setInviteCode(e.target.value)}
          />
          <Button
            bgColor={inviteCode ? theme.colors.black : theme.colors.gray300}
            style={{ marginTop: 'auto', marginBottom: `${rem(30)}` }}
            onClick={onClickInviteCodeButton}
          >
            <Text
              fontSize={theme.fontSizes.lg}
              textColor={theme.colors.white}
              fontWeight={theme.fontWeights.semibold}
            >
              {'다음'}
            </Text>
          </Button>
        </Fragment>
      )}
    </Layout>
  );
};

export default DashboardInviteCodeInputPage;

const DescriptionBox = styled.div`
  ${props => props.theme.layout.centerY};
  padding: ${rem(10)};
  gap: ${rem(8)};
  border-radius: ${rem(10)};
  background: ${props => props.theme.colors.gray150};

  margin: ${rem(19)} 0 ${rem(28)};
`;

const MatchingSuccessDescriptionBoxTop = styled.div`
  ${props => props.theme.layout.centerY}
  width: 100%;
  padding: ${rem(16)};

  border-radius: ${rem(10)} ${rem(10)} 0 0;
  border-bottom: ${rem(1)} solid ${theme.colors.gray200};
  background: ${theme.colors.gray100};

  margin-top: ${rem(48)};
`;

const MatchingSuccessDescriptionBoxBottom = styled.div`
  ${props => props.theme.layout.center}
  width: 100%;
  padding: ${rem(10)} ${rem(16)} ${rem(10)} ${rem(36)};
  gap: ${rem(10)};

  border-radius: 0 0 ${rem(10)} ${rem(10)};
  background: ${theme.colors.gray100};
  margin-bottom: ${rem(48)};
`;
