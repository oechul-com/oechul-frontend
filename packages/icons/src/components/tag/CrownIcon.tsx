import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const CrownIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.72399 8.5H1.27583C1.17017 8.5 1.07917 8.41796 1.05817 8.30366L0.00451212 2.60439C-0.0131544 2.50898 0.0219564 2.41112 0.0940669 2.35496C0.166066 2.29867 0.261399 2.29499 0.336954 2.34527L3.17971 4.2364L4.80091 0.636125C4.83814 0.55347 4.91436 0.500738 4.99802 0.500002C5.0768 0.499634 5.15858 0.550404 5.19713 0.632446L6.87212 4.20108L9.66298 2.34539C9.73865 2.29511 9.83376 2.29891 9.90587 2.35508C9.97798 2.41125 10.0131 2.50911 9.99553 2.60452L8.94188 8.30379C8.92054 8.41796 8.82955 8.5 8.72399 8.5Z"
        fill={props.fill}
      />
    </svg>
  </Icon>
));

CrownIcon.displayName = 'CrownIcon';

export default CrownIcon;
