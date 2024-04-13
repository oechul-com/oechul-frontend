import { ReactElement, ReactNode } from 'react';

import { BadgeRoot, NewBadgeRoot } from './Badge.styles.ts';

export type colorVariant = 'normal' | 'warning' | 'red' | 'green' | 'blue';

interface BadgeProps {
  variant?: colorVariant;
  children: ReactNode;
}

const Badge = ({ variant = 'normal', children }: BadgeProps): ReactElement => {
  return <BadgeRoot $variant={variant}>{children}</BadgeRoot>;
};
export default Badge;

export const NewBadge = () => {
  return <NewBadgeRoot>NEW</NewBadgeRoot>;
};
