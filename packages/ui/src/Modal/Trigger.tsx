import React, { ElementType, forwardRef, ReactNode } from 'react';

import { useModal } from './Modal.context';

type BaseModalTriggerProps = {
  children: ReactNode;
};

type ModalTriggerProps<C extends ElementType> = BaseModalTriggerProps & {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof BaseModalTriggerProps>;

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
