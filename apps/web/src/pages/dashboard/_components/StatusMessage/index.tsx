import { ReactNode } from 'react';

import * as styles from './StatusMessage.styles.ts';

interface StatusMessageProps {
  icon?: string;
  message: string;
  subMessage?: ReactNode | string;
}

const StatusMessage = ({
  icon = '😭',
  message,
  subMessage,
}: StatusMessageProps) => {
  return (
    <styles.StatusContainer>
      <styles.StatusIcon>{icon}</styles.StatusIcon>
      <styles.StatusMessage>{message}</styles.StatusMessage>
      {subMessage && (
        <styles.StatusSubMessage>{subMessage}</styles.StatusSubMessage>
      )}
    </styles.StatusContainer>
  );
};

export default StatusMessage;
