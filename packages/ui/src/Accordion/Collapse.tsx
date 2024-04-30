import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { useRef, useEffect, useState, ReactNode, ReactElement } from 'react';

import { useAccordion } from './Accordion.context';
import { AccordionDivider } from './Accordion.styles';

type AccordionCollapseProps = {
  divider?: boolean;
  children: ReactNode;
} & MotionProps;

const AccordionCollapse = ({
  divider = false,
  children,
  ...props
}: AccordionCollapseProps): ReactElement => {
  const { isOpen } = useAccordion();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }

    updateHeight();

    if (isOpen) {
      window.addEventListener('resize', updateHeight);
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [isOpen, children]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: isOpen ? height : 0 }}
          exit={{ opacity: 0, height: 0 }}
          ref={contentRef}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          {...props}
        >
          {divider && (
            <AccordionDivider
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

AccordionCollapse.displayName = 'AccordionCollapse';

export default AccordionCollapse;
