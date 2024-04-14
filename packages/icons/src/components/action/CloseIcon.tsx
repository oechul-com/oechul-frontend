import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const CloseIcon = memo<IconProps>(props => (
  <Icon type="stroke" {...props}>
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66699 1.66675L12.3337 12.3334"
        stroke={props.stroke || '#454545'}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M12.3337 1.66675L1.66699 12.3334"
        stroke={props.stroke || '#454545'}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
));

CloseIcon.displayName = 'CloseIcon';

export default CloseIcon;
