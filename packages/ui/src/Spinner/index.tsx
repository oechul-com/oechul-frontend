import { ReactElement } from 'react';

import { SpinnerWrapper } from './Spinner.styles';

type SpinnerProps = {
  size?: number;
  width?: number;
};

const Spinner = ({ size = 120, width = 8 }: SpinnerProps): ReactElement => {
  return <SpinnerWrapper $size={size} $width={width} />;
};

export default Spinner;
