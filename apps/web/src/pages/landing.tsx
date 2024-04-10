import { rem, theme } from '@oechul/styles';
import { Text, Button } from '@oechul/ui';
import { styled } from 'styled-components';

import Layout from '@/components/layout/Layout';
// import ImageLogo from 'public/static/assets/common/image-logo.svg';

type DescriptionItemType = {
  icon: string;
  description: string;
};
const DESCRIPTION_LIST: DescriptionItemType[] = [
  {
    icon: '👫🏻',
    description: '1148명의 서울시 소재 대학생이 활동 중',
  },
  {
    icon: '🫶🏻',
    description: '60% 이상의 매칭성사율',
  },
  {
    icon: '🫶🏻',
    description: '60% 이상의 매칭성사율',
  },
  {
    icon: '🤝🏻',
    description: '지금까지 1327건의 매칭 신청',
  },
  {
    icon: '👍🏻',
    description: '74%의 사용자가 긍정적으로 답변',
  },
  {
    icon: '👍🏻',
    description: '74%의 사용자가 긍정적으로 답변',
  },
];

const LandingPage = () => {
  return (
    <Layout visibleHeader={true}>
      <LandingCol>
        <LandingBox gap={`${rem(27)}`}>
          <ImageLogo src="/static/assets/common/image-logo.svg" />
          <Text textAlign="center" lineHeight="140%">
            {'대학생 블라인드 매칭 서비스\n외출:밖으로 나가다'}
          </Text>
        </LandingBox>
        <LandingBox gap={`${rem(16)}`}>
          <LandingDescriptionsBox>
            {DESCRIPTION_LIST.map(
              ({ icon, description }: DescriptionItemType, index) => {
                return (
                  <LandingDescriptionBox
                    key={index}
                    marginLeft={index === 3 ? `${rem(112)}` : '0'}
                  >
                    {icon}
                    <Text fontWeight={theme.fontWeights['semibold']}>
                      {description}
                    </Text>
                  </LandingDescriptionBox>
                );
              },
            )}
          </LandingDescriptionsBox>
          <Button width={'100%'}>
            <Text
              fontSize={theme.fontSizes['lg']}
              fontWeight={theme.fontWeights['semibold']}
            >
              {'시작하기'}
            </Text>
          </Button>
          <Text
            textColor={theme.colors.gray500}
            fontSize={theme.fontSizes['xs']}
            fontWeight={theme.fontWeights['semibold']}
          >
            {'외출 개인정보수집 및 이용약관 ‧ 소통창구'}
          </Text>
        </LandingBox>
      </LandingCol>
    </Layout>
  );
};

export default LandingPage;

const ImageLogo = styled.img`
  height: ${rem(46)};
`;

const LandingCol = styled.div`
  ${props => props.theme.layout.columnCenterY};
  justify-content: space-between;

  height: calc(100vh - ${rem(117)});
  padding: ${rem(47)} ${rem(16)} 0;
`;

const LandingBox = styled.div<{ gap: string }>`
  ${props => props.theme.layout.columnCenterY};

  width: 100%;
  gap: ${props => props.gap || `0`};

  overflow: hidden;
`;

const LandingDescriptionsBox = styled.div`
  display: flex;
  width: ${rem(843)};
  flex-wrap: wrap;
  gap: ${rem(23)} ${rem(16)};
`;

const LandingDescriptionBox = styled.div<{ marginLeft?: string }>`
  ${props => props.theme.layout.center};
  border-radius: ${rem(10)};
  background-color: ${props => props.theme.colors.gray200};
  padding: ${rem(10)};
  gap: ${rem(7)};
  margin-left: ${props => props.marginLeft};
`;
