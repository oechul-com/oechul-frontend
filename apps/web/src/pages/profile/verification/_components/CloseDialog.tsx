import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CloseDialogProps {
  isOpen: boolean;
  onToggle: () => void;
}

const CloseDialog = ({ isOpen, onToggle }: CloseDialogProps) => {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onStateChange={onToggle}>
      <Modal.Content>
        <DialogContent>
          <Text textAlign="center" fontSize={theme.fontSizes['5xl']}>
            ✋🏻
          </Text>
          <Text
            textColor={theme.colors.black}
            textAlign="center"
            fontSize={theme.fontSizes.xl}
            fontWeight={theme.fontWeights.semibold}
          >
            나중에 제출하시겠어요?
          </Text>
          <Text
            textColor={theme.colors.gray500}
            textAlign="center"
            fontSize={theme.fontSizes.md}
            fontWeight={theme.fontWeights.medium}
            lineHeight="140%"
          >
            재학생 인증 없이는 외출의 매칭 서비스를 이용할 수 없어요.
          </Text>
          <CloseDialogButtonContainer>
            <Button
              variant="gray"
              style={{ width: '50%' }}
              onClick={() => navigate(-1)}
            >
              나중에 제출
            </Button>
            <Modal.Close as="span" style={{ width: '50%' }}>
              <Button variant="blue" width="100%">
                계속하기
              </Button>
            </Modal.Close>
          </CloseDialogButtonContainer>
        </DialogContent>
      </Modal.Content>
    </Modal>
  );
};

export default CloseDialog;

const DialogContent = styled.div`
  ${theme.layout.columnCenterX};
  width: 100%;
  max-width: ${theme.sizes.app};
  padding: ${rem(30)} ${rem(25)};
  margin-inline: auto;
  border-radius: ${rem(10)};
  background-color: ${theme.colors.white};
  gap: ${rem(26)};
`;

const CloseDialogButtonContainer = styled.div`
  ${theme.layout.centerX};
  width: 100%;
  margin-top: ${rem(30)};
  gap: ${rem(16)};
`;
