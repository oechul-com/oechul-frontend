import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const FilterIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <mask
        id="mask0_1689_1067"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <rect width="18" height="18" fill={props.fill || '#D9D9D9'} />
      </mask>
      <g mask="url(#mask0_1689_1067)">
        <path
          d="M7.5 13.5V12H10.5V13.5H7.5ZM4.5 9.75V8.25H13.5V9.75H4.5ZM2.25 6V4.5H15.75V6H2.25Z"
          fill={props.fill || '#8C8C8C'}
        />
      </g>
    </svg>
  </Icon>
));

FilterIcon.displayName = 'FilterIcon';

export default FilterIcon;
