import {
  IconProps,
  InstagramIcon,
  KakaoTalkIcon,
  MailIcon,
} from '@oechul/icons';
import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { ElementType, Fragment, NamedExoticComponent, ReactNode } from 'react';

import {
  ContactModalContainer,
  ContactTriggerButton,
  SocialList,
} from './ContactModal.styles.ts';

interface ContactDialogProps {
  children: ReactNode;
}

type SocialItemType = {
  Icon: NamedExoticComponent<IconProps> | ElementType;
  description: string;
  bgColor: string;
  color: string;
  link: string;
};

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

const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <Modal>
      <Modal.Trigger as="span">
        <ContactTriggerButton>{children}</ContactTriggerButton>
      </Modal.Trigger>
      <Modal.Content>
        <ContactModalContainer>
          <Modal.Close />

          <Text
            textColor={theme.colors.black}
            fontSize={theme.fontSizes.xl}
            fontWeight={theme.fontWeights.medium}
            textAlign="center"
          >
            소통창구
          </Text>

          <SocialList>
            {SOCIAL_LIST.map(
              (
                { Icon, description, bgColor, color, link }: SocialItemType,
                index,
              ) => {
                return (
                  <Button
                    key={index}
                    bgColor={bgColor}
                    width="100%"
                    onClick={() => window.open(link)}
                  >
                    <Icon />
                    <Text
                      fontWeight={theme.fontWeights.semibold}
                      fontSize={theme.fontSizes.md}
                      textColor={color}
                      lineHeight={rem(16)}
                    >
                      {description}
                    </Text>
                  </Button>
                );
              },
            )}
          </SocialList>
        </ContactModalContainer>
      </Modal.Content>
    </Modal>
  );
};

export default ContactDialog;
