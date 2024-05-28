import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { ReactElement, ReactNode } from 'react';

import { ServiceWaitingModalContainer } from './ServiceWaitingModal.styles.ts';

interface ServiceWaitingModalProps {
  children: ReactNode;
}

const ServiceWaitingModal = ({
  children,
}: ServiceWaitingModalProps): ReactElement => {
  return (
    <Modal>
      <Modal.Trigger as="span">{children}</Modal.Trigger>
      <Modal.Content maxWidth={theme.sizes.app}>
        <ServiceWaitingModalContainer>
          <Text
            fontSize={theme.fontSizes['5xl']}
            fontWeight={theme.fontWeights.semibold}
            style={{ marginBottom: rem(16) }}
          >
            🛠️
          </Text>
          <Text
            $variant="title"
            lineHeight={rem(46)}
            style={{ marginBottom: rem(8) }}
          >
            서비스 준비 중
          </Text>
          <Text
            textColor={theme.colors.gray500}
            lineHeight={`${rem(22)}`}
            textAlign="center"
            style={{ marginBottom: `${rem(40)}` }}
          >
            이곳에 안내메세지 두줄이상 입력을 권장하고 줄바꿈 영역은 이곳까지
          </Text>
          <Modal.Close as="span">
            <Button>
              <Text
                fontSize={theme.fontSizes.lg}
                fontWeight={theme.fontWeights.semibold}
              >
                닫기
              </Text>
            </Button>
          </Modal.Close>
        </ServiceWaitingModalContainer>
      </Modal.Content>
    </Modal>
  );
};

export default ServiceWaitingModal;
