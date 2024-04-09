import React, { ElementType, forwardRef, ReactNode } from 'react';

import { useModal } from './Modal.context';

type ModalTriggerProps<C extends ElementType> = { children: ReactNode } & {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof { children: ReactNode }>;

const ModalTrigger = forwardRef<
  HTMLButtonElement,
  ModalTriggerProps<ElementType>
>(({ as: Component = 'button', children, onClick, ...props }, ref) => {
  const { toggle } = useModal();

  const handleClick = () => {
    toggle();
    onClick?.();
  };

  return (
    <Component ref={ref} onClick={handleClick} {...props}>
      {children}
    </Component>
  );
});

ModalTrigger.displayName = 'ModalTrigger';

export default ModalTrigger;
