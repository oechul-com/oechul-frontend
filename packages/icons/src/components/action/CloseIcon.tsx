import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const CloseIcon = memo<IconProps>(props => (
  <Icon type="stroke" {...props}>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3332 10.6667L10.6665 21.3334"
        stroke={props.stroke || '#454545'}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M10.6665 10.6667L21.3332 21.3334"
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
