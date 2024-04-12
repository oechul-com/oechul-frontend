import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const ArrowIcon = memo<IconProps>(props => (
  <Icon type="stroke" {...props}>
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 7H2.78357"
        stroke={props.stroke || '#454545'}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M7 12L2 7L7 2"
        stroke={props.stroke || '#454545'}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  </Icon>
));

ArrowIcon.displayName = 'ArrowIcon';

export const ArrowDownIcon = memo<IconProps>(props => (
  <ArrowIcon style={{ transform: 'rotate(-90deg)' }} {...props} />
));
ArrowDownIcon.displayName = 'ArrowDownIcon';

export const ArrowUpIcon = memo<IconProps>(props => (
  <ArrowIcon style={{ transform: 'rotate(90deg)' }} {...props} />
));
ArrowUpIcon.displayName = 'ArrowUpIcon';

export const ArrowLeftIcon = memo<IconProps>(props => (
  <ArrowIcon style={{ transform: 'rotate(0deg)' }} {...props} />
));
ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export const ArrowRightIcon = memo<IconProps>(props => (
  <ArrowIcon style={{ transform: 'rotate(180deg)' }} {...props} />
));
ArrowRightIcon.displayName = 'ArrowRightIcon';
