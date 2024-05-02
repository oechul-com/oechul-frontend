import {
  IconProps,
  InstagramIcon,
  KakaoTalkIcon,
  MailIcon,
} from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Text, Button } from '@oechul/ui';
import { useState, Fragment, NamedExoticComponent, ElementType } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import BottomSheetDialog from 'src/components/Modal/BottomSheetDialog';

type DescriptionItemType = {
  icon: string;
  description: string;
};

type SocialItemType = {
  Icon: NamedExoticComponent<IconProps> | ElementType;
  description: string;
  bgColor: string;
  color: string;
  link: string;
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

const SOCIAL_LIST: SocialItemType[] = [
  {
    Icon: MailIcon,
    description: '이메일로 문의하기',
    bgColor: `${theme.colors.black}`,
    color: `${theme.colors.white}`,
    link: 'mailto:manage@oechul.com',
  },
  {
    Icon: KakaoTalkIcon,
    description: '공식 카카오 채널',
    bgColor: '#F3E24E',
    color: `${theme.colors.black}`,
    link: 'https://www.naver.com/',
  },
  {
    Icon: InstagramIcon,
    description: '공식 인스타그램',
    bgColor: `${theme.colors.gray200}`,
    color: `${theme.colors.black}`,
    link: '',
  },
  {
    Icon: Fragment,
    description: '외출에 대해 알아보기',
    bgColor: `${theme.colors.gray200}`,
    color: `${theme.colors.black}`,
    link: '',
  },
];

const LandingPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const onHandleCommunicationModal = () => {
    setOpen(open => !open);
  };

  const onClickCommunicationButton = (link: string) => {
    window.open(link);
  };

  const onClickStartButton = () => {
    navigate('/auth/signin');
  };

  return (
    <>
      <LandingLayout>
        <LandingBox $gap={`${rem(27)}`}>
          <ImageLogo src="/static/assets/common/image-logo.svg" />
          <Text textAlign="center" lineHeight="140%">
            {'대학생 블라인드 매칭 서비스\n외출:밖으로 나가다'}
          </Text>
        </LandingBox>
        <LandingBox $gap={`${rem(34)}`}>
          <LandingDescriptionsBox>
            {DESCRIPTION_LIST.map(
              ({ icon, description }: DescriptionItemType, index) => {
                return (
                  <LandingDescriptionBox
                    key={index}
                    $marginLeft={index === 3 ? `${rem(112)}` : '0'}
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
            <Button width={'100%'} onClick={onClickStartButton}>
              <Text
                fontSize={theme.fontSizes['lg']}
                fontWeight={theme.fontWeights['semibold']}
              >
                {'시작하기'}
              </Text>
            </Button>
            <TextSpan>
              <Text
                textColor={theme.colors.gray500}
                fontSize={theme.fontSizes['xs']}
                fontWeight={theme.fontWeights['semibold']}
                style={{ cursor: 'pointer' }}
              >
                {'외출 개인정보수집 및 이용약관'}
              </Text>
              <Text
                textColor={theme.colors.gray500}
                fontSize={theme.fontSizes['xs']}
                fontWeight={theme.fontWeights['semibold']}
                onClick={onHandleCommunicationModal}
                style={{ cursor: 'pointer' }}
              >
                {' ‧ 소통창구'}
              </Text>
            </TextSpan>
          </ButtonBox>
        </LandingBox>
      </LandingLayout>

      <BottomSheetDialog open={open} setOpen={setOpen}>
        <Text
          fontSize={theme.fontSizes['xl']}
          fontWeight={theme.fontWeights['medium']}
          textAlign="center"
        >
          {'소통창구'}
        </Text>
        <LandingSocialsBox>
          {SOCIAL_LIST.map(
            (
              { Icon, description, bgColor, color, link }: SocialItemType,
              index,
            ) => {
              return (
                <Button
                  key={index}
                  bgColor={bgColor}
                  width={'100%'}
                  onClick={() => onClickCommunicationButton(link)}
                >
                  <Icon />
                  <Text
                    fontWeight={theme.fontWeights['semibold']}
                    fontSize={theme.fontSizes.md}
                    textColor={color}
                    lineHeight={`${rem(16)}`}
                  >
                    {description}
                  </Text>
                </Button>
              );
            },
          )}
        </LandingSocialsBox>
      </BottomSheetDialog>
    </>
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

const LandingBox = styled.div<{ $gap: string }>`
  ${props => props.theme.layout.columnCenterY};
  width: calc(100% + ${rem(32)});
  margin-left: ${rem(-16)};
  margin-right: ${rem(-16)};
  gap: ${({ $gap }) => $gap || `0`};
  overflow: hidden;
`;

const LandingDescriptionsBox = styled.div`
  display: flex;
  width: ${rem(843)};
  flex-wrap: wrap;
  gap: ${rem(23)} ${rem(16)};

  margin-left: ${rem(296)};
`;

const LandingDescriptionBox = styled.div<{ $marginLeft?: string }>`
  ${props => props.theme.layout.center};
  border-radius: ${rem(10)};
  background-color: ${props => props.theme.colors.gray200};
  padding: ${rem(10)};
  gap: ${rem(7)};
  margin-left: ${({ $marginLeft }) => $marginLeft};
`;

const ButtonBox = styled.div`
  ${props => props.theme.layout.columnCenterY};
  gap: ${rem(16)};
  width: calc(100% - ${rem(32)});
`;

const TextSpan = styled.span`
  ${props => props.theme.layout.centerX};
`;

const LandingSocialsBox = styled.div`
  ${props => props.theme.layout.columnCenterY};
  width: 100%;
  gap: ${rem(16)};
`;
