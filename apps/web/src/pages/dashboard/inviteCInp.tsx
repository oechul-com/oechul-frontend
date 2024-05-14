import { MinusIcon, PlusIcon } from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Input, Text } from '@oechul/ui';
import { Fragment, useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import {
  MatchingSuccessDescriptionBoxTop,
  MatchingSuccessDescriptionBoxBottom,
  DescriptionBox,
} from './dashboard.styles.ts';

const DashboardInviteCodeInputPage = () => {
  const [inviteCode, setInviteCode] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onClickInviteCodeButton = () => {
    // 추후 백엔드 api 연동 필요
    if (inviteCode === 'hi') {
      setIsSuccess(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    setIsValid(true);
  }, [inviteCode]);

  return (
    <Layout arrow>
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
            $variant="title"
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
              {'매칭이 성공하면 어떻게 되나요?'}
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
            style={{ marginTop: `${rem(48)}` }}
          >
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
          <Text $variant="title">{'초대 코드 입력'}</Text>
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
            label={isValid ? '초대코드' : '⚠ 초대 코드를 다시 확인해주세요.'}
            isValid={isValid === false ? false : undefined}
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
