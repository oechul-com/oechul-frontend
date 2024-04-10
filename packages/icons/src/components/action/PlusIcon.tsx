import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const PlusIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="7.5" width="15" height="1" fill="black" />
      <rect
        x="7"
        y="15.5"
        width="15"
        height="1"
        transform="rotate(-90 7 15.5)"
        fill={props.fill}
      />
    </svg>
  </Icon>
));

PlusIcon.displayName = 'PlusIcon';

export default PlusIcon;
