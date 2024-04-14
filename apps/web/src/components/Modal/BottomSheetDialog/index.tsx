import { CloseIcon } from '@oechul/icons';
import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import Sheet from 'react-modal-sheet';

import { CloseButton, ModalContent } from './BottomSheetDialog.styles.ts';

interface BottomSheetDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  visibleClose?: boolean;
  children: ReactNode;
}

const BottomSheetDialog = ({
  visibleClose = true,
  open = false,
  setOpen,
  children,
}: BottomSheetDialogProps): ReactElement => {
  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Sheet isOpen={open} onClose={handleDialogClose} detent="content-height">
      <Sheet.Backdrop onTap={handleDialogClose} />
      <Sheet.Container style={{ boxShadow: 'none' }}>
        <Sheet.Content style={{ position: 'relative' }}>
          <CloseButton $visibleClose={visibleClose} onClick={handleDialogClose}>
            <CloseIcon width={16} height={16} />
          </CloseButton>
          <ModalContent>{children}</ModalContent>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default BottomSheetDialog;
