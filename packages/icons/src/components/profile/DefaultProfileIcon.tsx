import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const DefaultProfileIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M108 54C108 83.8234 83.8234 108 54 108C24.1766 108 0 83.8234 0 54C0 24.1766 24.1766 0 54 0C83.8234 0 108 24.1766 108 54Z"
        fill="#D9D9D9"
      />
      <path
        d="M10.7958 86.4C20.6476 73.284 36.3329 64.8 54 64.8C71.6671 64.8 87.3524 73.284 97.2042 86.4C87.3524 99.516 71.6671 108 54 108C36.3329 108 20.6476 99.516 10.7958 86.4Z"
        fill="#F8F8F8"
      />
      <path
        d="M73.44 41.04C73.44 51.7764 64.7364 60.48 54 60.48C43.2636 60.48 34.56 51.7764 34.56 41.04C34.56 30.3036 43.2636 21.6 54 21.6C64.7364 21.6 73.44 30.3036 73.44 41.04Z"
        fill="#F8F8F8"
      />
    </svg>
  </Icon>
));

DefaultProfileIcon.displayName = 'DefaultProfileIcon';

export default DefaultProfileIcon;
