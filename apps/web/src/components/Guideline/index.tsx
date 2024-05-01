import { Accordion } from '@oechul/ui';

import {
  AccordionContent,
  AccordionHeader,
  AccordionToggleContainer,
} from './Guideline.styles.ts';

interface GuidelineProps {
  emoji: string;
  title: string;
  contents: string[];
}

const Guideline = ({ emoji, title, contents }: GuidelineProps) => {
  return (
    <Accordion>
      <Accordion.Content>
        <AccordionHeader>
          <span>{emoji}</span>
          <span>{title}</span>
          <Accordion.Toggle as={AccordionToggleContainer} />
        </AccordionHeader>
        <Accordion.Collapse divider={true}>
          <AccordionContent>
            {contents.length === 1 ? (
              <>{contents[0]}</>
            ) : (
              contents.map((content, index) => <li key={index}>{content}</li>)
            )}
          </AccordionContent>
        </Accordion.Collapse>
      </Accordion.Content>
    </Accordion>
  );
};

export default Guideline;
