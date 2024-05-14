import { theme } from '@oechul/styles';
import { Modal } from '@oechul/ui';
import { ReactNode } from 'react';

import { DialogContent } from './Dialog.styles.ts';

interface DialogProps {
  isOpen?: boolean;
  onToggle?: () => void;
  children: ReactNode;
}

const Dialog = ({ isOpen, onToggle, children }: DialogProps) => {
  return (
    <Modal isOpen={isOpen} onStateChange={onToggle}>
      <Modal.Content maxWidth={theme.sizes.app}>
        <DialogContent>{children}</DialogContent>
      </Modal.Content>
    </Modal>
  );
};

export default Dialog;
