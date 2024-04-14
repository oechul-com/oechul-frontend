import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const ImageAddIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.4167 17.9167V28.1325C55.4167 28.1325 48.6175 28.1667 48.5833 28.1325V17.9167H38.3333C38.3333 17.9167 38.3675 11.1175 38.3333 11.0834H48.5833V0.833374H55.4167V11.0834H65.6667V17.9167H55.4167ZM45.1667 31.5834V21.3334H34.9167V11.0834H7.58333C3.825 11.0834 0.75 14.1584 0.75 17.9167V58.9167C0.75 62.675 3.825 65.75 7.58333 65.75H48.5833C52.3417 65.75 55.4167 62.675 55.4167 58.9167V31.5834H45.1667ZM7.58333 58.9167L17.8333 45.25L24.6667 55.5L34.9167 41.8334L48.5833 58.9167H7.58333Z"
        fill={props.fill || '#BFBFBF'}
      />
    </svg>
  </Icon>
));

ImageAddIcon.displayName = 'ImageAddIcon';

export default ImageAddIcon;
