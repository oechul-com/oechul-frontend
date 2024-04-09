import React, { ElementType, forwardRef, ReactNode } from 'react';

import { useModal } from './Modal.context';

type ModalCloseProps<C extends ElementType> = { children: ReactNode } & {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof { children: ReactNode }>;

const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps<ElementType>>(
  ({ as: Component = 'button', children, onClick, ...props }, ref) => {
    const { setOpen } = useModal();

    const handleClick = () => {
      onClick?.();
      setOpen(false);
    };

    if (children) {
      return (
        <Component ref={ref} onClick={handleClick} {...props}>
          {children}
        </Component>
      );
    }

    return (
      <Component ref={ref} onClick={handleClick} {...props}>
        // todo icon
        <>X</>
      </Component>
    );
  },
);

ModalClose.displayName = 'ModalClose';

export default ModalClose;
