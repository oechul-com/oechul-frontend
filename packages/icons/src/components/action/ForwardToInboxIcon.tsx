import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const ForwardToInboxIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3 21.0249L16.45 19.1749L17.7 17.8999H13.975V15.2499H17.7L16.425 13.9749L18.3 12.1249L22.75 16.5749L18.3 21.0249ZM2.65 17.8999C1.9 17.8999 1.27083 17.6457 0.7625 17.1374C0.254167 16.6291 0 15.9999 0 15.2499V3.0499C0 2.2999 0.254167 1.67074 0.7625 1.1624C1.27083 0.654069 1.9 0.399902 2.65 0.399902H18.95C19.7 0.399902 20.3292 0.654069 20.8375 1.1624C21.3458 1.67074 21.6 2.2999 21.6 3.0499V11.6249C21.1167 11.3249 20.5958 11.0999 20.0375 10.9499C19.4792 10.7999 18.9083 10.7249 18.325 10.7249C16.5583 10.7249 15.0583 11.3416 13.825 12.5749C12.5917 13.8082 11.975 15.3082 11.975 17.0749V17.8999H2.65ZM10.8 10.7249L18.95 5.7499V3.0499L10.8 8.1499L2.65 3.0499V5.7499L10.8 10.7249Z"
        fill={props.fill || '#262626'}
      />
    </svg>
  </Icon>
));

ForwardToInboxIcon.displayName = 'ForwardToInboxIcon';

export default ForwardToInboxIcon;
