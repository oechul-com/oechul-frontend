import { ReactElement, ReactNode } from 'react';

import { BadgeRoot } from './Badge.styles.ts';

export type colorVariant =
  | 'normal'
  | 'red'
  | 'warning'
  | 'green'
  | 'blue'
  | 'default';

interface BadgeProps {
  variant?: colorVariant;
  children: ReactNode;
}

const Badge = ({ variant = 'normal', children }: BadgeProps): ReactElement => {
  return <BadgeRoot $variant={variant}>{children}</BadgeRoot>;
};
export default Badge;
