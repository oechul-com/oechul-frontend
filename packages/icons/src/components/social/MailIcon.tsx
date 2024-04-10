import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const MailIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.4 15.6C1.8775 15.6 1.43021 15.414 1.05813 15.0419C0.686042 14.6698 0.5 14.2225 0.5 13.7V2.30002C0.5 1.77752 0.686042 1.33023 1.05813 0.958149C1.43021 0.586066 1.8775 0.400024 2.4 0.400024H17.6C18.1225 0.400024 18.5698 0.586066 18.9419 0.958149C19.314 1.33023 19.5 1.77752 19.5 2.30002V13.7C19.5 14.2225 19.314 14.6698 18.9419 15.0419C18.5698 15.414 18.1225 15.6 17.6 15.6H2.4ZM10 8.95002L17.6 4.20002V2.30002L10 7.05002L2.4 2.30002V4.20002L10 8.95002Z"
        fill={props.fill || 'white'}
      />
    </svg>
  </Icon>
));

MailIcon.displayName = 'MailIcon';

export default MailIcon;
