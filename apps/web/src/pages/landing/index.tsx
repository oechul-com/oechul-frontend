import { Logo } from '@oechul/icons';
import { rem } from '@oechul/styles';
import { Text, Button } from '@oechul/ui';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import ContactDialog from '@/components/Modal/ContactModal';
import { POLICY } from '@/constants.ts';

import StatScroller, { StatItemType } from './_components/StatScroller';
import {
  StyledLandingContainer,
  StyledBrandingWrapper,
  StyledLandingSection,
  StyledStatsScrollerContainer,
  StyledPolicyNavigate,
} from './landing.styles.ts';

const STATS: StatItemType[] = [
  { icon: '👫🏻', description: '수도권 소재 대학생이 활동 중' },
  { icon: '🫶🏻', description: '60% 이상의 매칭 성사율' },
  { icon: '🤝🏻', description: '지금까지 1327건의 매칭 신청' },
  { icon: '👍🏻', description: '74%의 사용자가 긍정적으로 답변' },
];

const LandingPage = (): ReactElement => {
  const navigate = useNavigate();

  const onClickStartButton = () => {
    navigate('/auth/signin');
  };

  return (
    <Layout visibleHeader={false}>
      <StyledLandingContainer>
        <StyledBrandingWrapper>
          <StyledLandingSection $gap={`${rem(27)}`}>
            <Logo width="100%" height={46} />
            <Text textAlign="center" lineHeight="140%">
              대학생 블라인드 매칭 서비스
              <br />
              외출:밖으로 나가다
            </Text>
          </StyledLandingSection>
        </StyledBrandingWrapper>

        <StyledLandingSection $gap={`${rem(34)}`}>
          <StyledStatsScrollerContainer>
            <StatScroller items={STATS} direction="left" speed={20} />
            <StatScroller items={STATS} direction="right" speed={20} />
          </StyledStatsScrollerContainer>

          <StyledLandingSection $gap={`${rem(16)}`}>
            <Button onClick={onClickStartButton}>시작하기</Button>
            <StyledPolicyNavigate>
              <a href={POLICY.PRIVACY_POLICY_URL} target="_blank">
                개인정보처리방침
              </a>
              &nbsp;및&nbsp;
              <a href={POLICY.TERM_OF_SERVICE_URL} target="_blank">
                이용약관
              </a>
              &nbsp;‧&nbsp;
              <ContactDialog>소통창구</ContactDialog>
            </StyledPolicyNavigate>
          </StyledLandingSection>
        </StyledLandingSection>
      </StyledLandingContainer>
    </Layout>
  );
};

export default LandingPage;
