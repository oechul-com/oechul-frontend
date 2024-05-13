import { CloseIcon } from '@oechul/icons';
import React, { ElementType, forwardRef, ReactElement, ReactNode } from 'react';

import { useModal } from './Modal.context';
import { BaseButton, DefaultCloseButton } from './Modal.styles';

type ModalCloseProps<C extends ElementType> = { children: ReactNode } & {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof { children: ReactNode }>;

const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps<ElementType>>(
  (
    { as: Component = BaseButton, children, onClick, ...props },
    ref,
  ): ReactElement => {
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
        <DefaultCloseButton>
          <CloseIcon />
        </DefaultCloseButton>
      </Component>
    );
  },
);

ModalClose.displayName = 'ModalClose';

export default ModalClose;
