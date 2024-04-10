import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const MinusIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="15"
      height="2"
      viewBox="0 0 15 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="15" height="1" fill={props.fill} />
    </svg>
  </Icon>
));

MinusIcon.displayName = 'MinusIcon';

export default MinusIcon;
