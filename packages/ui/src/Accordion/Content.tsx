import { ReactNode } from 'react';

import { BaseContent } from './Accordion.styles';

type AccordionContentProps = {
  bgColor?: string;
  children: ReactNode;
};

const AccordionContent = ({ bgColor, children }: AccordionContentProps) => {
  return <BaseContent $bgColor={bgColor}>{children}</BaseContent>;
};

AccordionContent.displayName = 'AccordionContent';
export default AccordionContent;
