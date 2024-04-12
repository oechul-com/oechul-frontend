import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const CaratIcon = memo<IconProps>(props => (
  <Icon type="stroke" {...props}>
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.5L7 6.5L12 1.5"
        stroke={props.stroke || '#8C8C8C'}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
));

CaratIcon.displayName = 'CaratIcon';

export const CaratUpIcon = memo<IconProps>(props => (
  <CaratIcon style={{ transform: 'rotate(180deg)' }} {...props} />
));
CaratUpIcon.displayName = 'CaratUpIcon';

export const CaratDownIcon = memo<IconProps>(props => (
  <CaratIcon style={{ transform: 'rotate(0deg)' }} {...props} />
));
CaratDownIcon.displayName = 'CaratDownIcon';

export const CaratLeftIcon = memo<IconProps>(props => (
  <CaratIcon style={{ transform: 'rotate(90deg)' }} {...props} />
));
CaratLeftIcon.displayName = 'CaratLeftIcon';

export const CaratRightIcon = memo<IconProps>(props => (
  <CaratIcon style={{ transform: 'rotate(-90deg)' }} {...props} />
));
CaratRightIcon.displayName = 'CaratRightIcon';
