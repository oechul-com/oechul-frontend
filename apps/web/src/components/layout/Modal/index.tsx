import { CloseIcon } from '@oechul/icons';
import { Fragment, ReactNode } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import { ModalHeader, ModalLayout } from './Modal.styles';

interface ModelProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  height?: string;
  visibleHeader?: boolean;
  children: ReactNode;
}

const Modal = ({
  visibleHeader = true,
  open = false,
  setOpen,
  height,
  children,
}: ModelProps) => {
  const onHandleModal = () => {
    setOpen(open => !open);
  };

  return (
    <BottomSheet open={open} onDismiss={onHandleModal}>
      <Fragment>
        <ModalHeader visibleHeader={visibleHeader} onClick={onHandleModal}>
          <CloseIcon width={32} height={32} />
        </ModalHeader>
        <ModalLayout height={height}>{children}</ModalLayout>
      </Fragment>
    </BottomSheet>
  );
};

export default Modal;
