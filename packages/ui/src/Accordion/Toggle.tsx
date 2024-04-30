import { MinusIcon, PlusIcon } from '@oechul/icons';
import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';

import { useAccordion } from './Accordion.context';
import { DefaultToggle } from './Accordion.styles';

type AccordionToggleProps<C extends ElementType> = { children?: ReactNode } & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof { children: ReactNode }>;

const AccordionToggle = forwardRef<
  HTMLButtonElement,
  AccordionToggleProps<ElementType>
>(
  (
    { as: Component = 'button', children, onClick, ...props },
    ref,
  ): ReactElement => {
    const { isOpen, toggle } = useAccordion();

    const handleClick = () => {
      toggle();
      onClick?.();
    };

    return (
      <Component ref={ref} onClick={handleClick} {...props}>
        {children || (
          <DefaultToggle
            initial={{ translateY: '-50%', rotate: 0 }}
            animate={{ translateY: '-50%', rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {isOpen ? (
              <MinusIcon width={16} height={8} />
            ) : (
              <PlusIcon width={16} height={16} />
            )}
          </DefaultToggle>
        )}
      </Component>
    );
  },
);

AccordionToggle.displayName = 'AccordionToggle';

export default AccordionToggle;
