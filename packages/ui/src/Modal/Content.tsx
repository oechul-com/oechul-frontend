import { AnimatePresence, AnimationProps, motion } from 'framer-motion';
import { forwardRef, ReactNode, useEffect } from 'react';

import { useModal } from './Modal.context';
import { MotionBackdrop } from './Modal.styles';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: 4, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

type ModalContentProps = {
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  backdropColor?: string;
  children: ReactNode;
} & AnimationProps;

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  (
    {
      disableBackdropClick,
      disableEscapeKeyDown,
      backdropColor = 'rgba(0, 0, 0, 0.5)',
      children,
      ...props
    },
    ref,
  ) => {
    const { isOpen, setOpen } = useModal();

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && !disableEscapeKeyDown) setOpen(false);
      };

      if (isOpen) document.addEventListener('keydown', handleKeyDown);

      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, disableEscapeKeyDown, setOpen]);

    const handleBackdropClick = () => {
      if (!disableBackdropClick) setOpen(false);
    };

    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <MotionBackdrop
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleBackdropClick}
            style={{ backgroundColor: backdropColor }}
          >
            <motion.div
              ref={ref}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={e => e.stopPropagation()}
              {...props}
            >
              {children}
            </motion.div>
          </MotionBackdrop>
        )}
      </AnimatePresence>
    );
  },
);

ModalContent.displayName = 'ModalContent';

export default ModalContent;
