import { rem, theme } from '@oechul/styles';
import { ReactElement, ReactNode } from 'react';

import { TipEmoji, TipLabel, TipRoot } from '@/components/Tip/Tip.styles.ts';

interface TipProps {
  emoji?: string;
  children: ReactNode;
  padding?: string;
  paddingBlock?: string;
  paddingInline?: string;
  margin?: string;
  marginBlock?: string;
  marginInline?: string;
  emojiSize?: string;
}

const Tip = ({
  emoji = '💡',
  children,
  padding = `${rem(7)} ${rem(10)}`,
  paddingBlock,
  paddingInline,
  margin,
  marginBlock,
  marginInline,
  emojiSize = theme.fontSizes.xl,
}: TipProps): ReactElement => {
  return (
    <TipRoot
      style={{
        padding: padding,
        paddingBlock: paddingBlock,
        paddingInline: paddingInline,
        margin: margin,
        marginBlock: marginBlock,
        marginInline: marginInline,
      }}
    >
      <TipEmoji style={{ fontSize: emojiSize }}>{emoji}</TipEmoji>
      <TipLabel>{children}</TipLabel>
    </TipRoot>
  );
};

export default Tip;
