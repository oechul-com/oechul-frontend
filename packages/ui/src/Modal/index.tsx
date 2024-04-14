import { ReactNode, useCallback, useEffect, useState } from 'react';

import ModalClose from './Close';
import ModalContent from './Content';
import { ModalContext } from './Modal.context';
import ModalTrigger from './Trigger';

type ModalProps = {
  defaultState?: boolean;
  isOpen?: boolean;
  onStateChange?: (isOpen: boolean) => void;
  children: ReactNode;
};

const Modal = ({
  defaultState = false,
  isOpen: controlledIsOpen,
  onStateChange,
  children,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(!!defaultState);

  const setOpen = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      onStateChange?.(open);
    },
    [onStateChange],
  );

  const toggle = useCallback(() => {
    const newState = !isOpen;
    setIsOpen(newState);
    onStateChange?.(newState);
  }, [isOpen, onStateChange]);

  useEffect(() => {
    if (controlledIsOpen !== undefined && controlledIsOpen !== isOpen)
      setIsOpen(controlledIsOpen);
  }, [controlledIsOpen]);

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
