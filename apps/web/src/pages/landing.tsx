import { rem, theme } from '@oechul/styles';
import { Text, Button } from '@oechul/ui';
import { styled } from 'styled-components';

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
    <LandingLayout>
      <LandingBox gap={`${rem(27)}`}>
        <ImageLogo src="/static/assets/common/image-logo.svg" />
        <Text textAlign="center" lineHeight="140%">
          {'대학생 블라인드 매칭 서비스\n외출:밖으로 나가다'}
        </Text>
      </LandingBox>
      <LandingBox gap={`${rem(34)}`}>
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
        <ButtonBox>
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
        </ButtonBox>
      </LandingBox>
    </LandingLayout>
  );
};

export default LandingPage;

const LandingLayout = styled.main`
  ${props => props.theme.layout.columnCenterY};
  flex: 1;
  width: 100%;
  height: calc(100vh);
  max-width: ${theme.sizes.app};
  padding: ${rem(117)} ${rem(16)} ${rem(20)};
  margin-inline: auto;

  justify-content: space-between;
`;

const ImageLogo = styled.img`
  height: ${rem(46)};
`;

const LandingBox = styled.div<{ gap: string }>`
  ${props => props.theme.layout.columnCenterY};
  width: calc(100% + 32px);
  margin-left: -16px;
  margin-right: -16px;
  gap: ${props => props.gap || `0`};
  overflow: hidden;
`;

const LandingDescriptionsBox = styled.div`
  display: flex;
  width: ${rem(843)};
  flex-wrap: wrap;
  gap: ${rem(23)} ${rem(16)};

  margin-left: ${rem(296)};
`;

const LandingDescriptionBox = styled.div<{ marginLeft?: string }>`
  ${props => props.theme.layout.center};
  border-radius: ${rem(10)};
  background-color: ${props => props.theme.colors.gray200};
  padding: ${rem(10)};
  gap: ${rem(7)};
  margin-left: ${props => props.marginLeft};
`;

const ButtonBox = styled.div`
  ${props => props.theme.layout.columnCenterY};
  gap: ${rem(16)};
  width: calc(100% - 32px);
`;
