import { createContext, useContext } from 'react';

interface ModalControls {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

export const ModalContext = createContext<ModalControls>({
  isOpen: false,
  setOpen: () => {},
  toggle: () => {},
});

export const useModal = (): ModalControls => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};
