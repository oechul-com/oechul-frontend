import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const VerificationIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.09998 17C1.53791 17 1.04739 16.7905 0.628425 16.3715C0.209475 15.9526 0 15.4621 0 14.9V2.1C0 1.53792 0.209475 1.0474 0.628425 0.62845C1.04739 0.209483 1.53791 0 2.09998 0H18.9667C19.5287 0 20.0193 0.209483 20.4382 0.62845C20.8572 1.0474 21.0667 1.53792 21.0667 2.1V14.9C21.0667 15.4621 20.8572 15.9526 20.4382 16.3715C20.0193 16.7905 19.5287 17 18.9667 17H2.09998ZM2.09998 4.16665H18.9667V2.1H2.09998V4.16665ZM9.48333 13.1833L15.2667 7.4L13.775 5.89167L9.48333 10.1834L7.34165 8.025L5.83333 9.53333L9.48333 13.1833Z"
        fill={props.fill || '#1F1F1F'}
      />
    </svg>
  </Icon>
));

VerificationIcon.displayName = 'VerificationIcon';

export default VerificationIcon;
