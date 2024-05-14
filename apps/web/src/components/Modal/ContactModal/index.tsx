import {
  IconProps,
  InstagramIcon,
  KakaoTalkIcon,
  MailIcon,
} from '@oechul/icons';
import { theme } from '@oechul/styles';
import { Button, ButtonVariantType, Modal, Text } from '@oechul/ui';
import { ElementType, Fragment, NamedExoticComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import {
  ContactModalContainer,
  ContactTriggerButton,
  SocialList,
} from './ContactModal.styles.ts';

interface ContactDialogProps {
  children: ReactNode;
}

type SocialItemType = {
  icon: NamedExoticComponent<IconProps> | ElementType;
  description: string;
  variant?: ButtonVariantType;
  link: string;
};

const SOCIAL_LIST: SocialItemType[] = [
  {
    icon: MailIcon,
    description: '이메일로 문의하기',
    link: 'mailto:manage@oechul.com',
  },
  {
    icon: KakaoTalkIcon,
    description: '공식 카카오 채널',
    variant: 'yellow',
    link: 'https://pf.kakao.com/_KVYtxj',
  },
  {
    icon: InstagramIcon,
    description: '공식 인스타그램',
    variant: 'gray',
    link: 'https://instagram.com/oechul',
  },
  {
    icon: Fragment,
    description: '외출에 대해 알아보기',
    variant: 'gray',
    link: 'https://instagram.com/oechul',
  },
];

const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <Modal>
      <Modal.Trigger as="span">
        <ContactTriggerButton>{children}</ContactTriggerButton>
      </Modal.Trigger>
      <Modal.Content maxWidth={theme.sizes.app}>
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
              ({ icon: Icon, description, variant, link }, index) => {
                return (
                  <Link
                    key={index}
                    to={link}
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant={variant} width="100%">
                      <Icon />
                      <Text
                        fontWeight={theme.fontWeights.semibold}
                        fontSize={theme.fontSizes.md}
                      >
                        {description}
                      </Text>
                    </Button>
                  </Link>
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
