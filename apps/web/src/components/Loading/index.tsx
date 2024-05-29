import { Spinner } from '@oechul/ui';
import { ReactElement } from 'react';

import { StyledLoadingWrapper } from './Loading.styles.ts';

const Loading = (): ReactElement => {
  return (
    <StyledLoadingWrapper>
      <Spinner size={96} width={6} />
    </StyledLoadingWrapper>
  );
};

export default Loading;
