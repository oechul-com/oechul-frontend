import { ReactNode, useCallback, useEffect, useState } from 'react';

import ModalClose from './Close';
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

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, setOpen, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.displayName = 'Modal';
Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Close = ModalClose;

export default Modal;
