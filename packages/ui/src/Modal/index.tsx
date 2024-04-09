import { ReactNode, useCallback, useState } from 'react';

import ModalContent from './Content';
import { ModalContext } from './Modal.context';
import ModalTrigger from './Trigger';

type ModalProps = {
  defaultState?: boolean;
  children: ReactNode;
};

const Modal = ({ defaultState = false, children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(!!defaultState);
  const setOpen = useCallback((open: boolean) => setIsOpen(open), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <ModalContext.Provider value={{ isOpen, setOpen, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.displayName = 'Modal';
Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;

export default Modal;
