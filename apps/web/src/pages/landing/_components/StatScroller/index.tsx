import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  StatScrollerContainer,
  StatScrollerItem,
  StatScrollerWrapper,
} from './StatScroller.styles.ts';

export type StatItemType = {
  icon: string;
  description: string;
};

type StatScrollerProps = {
  items: StatItemType[];
  direction?: 'left' | 'right';
  speed?: number;
};

const StatScroller = ({
  items,
  direction = 'left',
  speed = 20,
}: StatScrollerProps) => {
  return (
    <StatScrollerContainer>
      <StatScrollerWrapper $direction={direction} $speed={speed}>
        <section>
          {items.map(({ icon, description }) => (
            <StatScrollerItem key={uuidv4()}>
              <div>
                <p>{icon}</p>
                <p>{description}</p>
              </div>
            </StatScrollerItem>
          ))}
        </section>
        <section>
          {items.map(({ icon, description }) => (
            <StatScrollerItem key={uuidv4()}>
              <div>
                <p>{icon}</p>
                <p>{description}</p>
              </div>
            </StatScrollerItem>
          ))}
        </section>
        <section>
          {items.map(({ icon, description }) => (
            <StatScrollerItem key={uuidv4()}>
              <div>
                <p>{icon}</p>
                <p>{description}</p>
              </div>
            </StatScrollerItem>
          ))}
        </section>
      </StatScrollerWrapper>
    </StatScrollerContainer>
  );
};

export default StatScroller;
