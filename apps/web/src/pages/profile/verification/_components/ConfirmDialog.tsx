import { rem, theme } from '@oechul/styles';
import { Button, Modal, Text } from '@oechul/ui';

import Dialog from '@/components/Modal/Dialog';
import { BetweenButtonContainer } from '@/components/Modal/Dialog/Dialog.styles.ts';

interface ConfirmDialogProps {
  isOpen: boolean;
  onToggle: () => void;
  image: File | null;
}

const ConfirmDialog = ({ isOpen, onToggle, image }: ConfirmDialogProps) => {
  return (
    <Dialog isOpen={isOpen} onToggle={onToggle}>
      <Text
        textColor={theme.colors.black}
        textAlign="center"
        fontSize={theme.fontSizes.xl}
        fontWeight={theme.fontWeights.semibold}
      >
        선택한 사진
      </Text>
      {image && (
        <img
          style={{ width: rem(280) }}
          src={URL.createObjectURL(image)}
          alt={image.name}
        />
      )}
      <BetweenButtonContainer>
        <Modal.Close as="span" style={{ width: '50%' }}>
          <Button variant="gray" width="100%">
            다시 선택
          </Button>
        </Modal.Close>
        <Modal.Close as="span" style={{ width: '50%' }}>
          <Button variant="blue" width="100%">
            계속하기
          </Button>
        </Modal.Close>
      </BetweenButtonContainer>
    </Dialog>
  );
};

export default ConfirmDialog;
