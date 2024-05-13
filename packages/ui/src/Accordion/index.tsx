import { ReactNode, useState, useCallback, ReactElement } from 'react';

import { AccordionContext } from './Accordion.context';
import AccordionCollapse from './Collapse';
import AccordionContent from './Content';
import AccordionToggle from './Toggle';

type AccordionProps = {
  children: ReactNode;
};

const Accordion = ({ children }: AccordionProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;

Accordion.displayName = 'Accordion';
Accordion.Content = AccordionContent;
Accordion.Collapse = AccordionCollapse;
Accordion.Toggle = AccordionToggle;
