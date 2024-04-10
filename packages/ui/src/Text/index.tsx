// Text.styled.tsx
import React, { ElementType, ReactNode, forwardRef } from 'react';

import BaseText from './Text.styles';

interface TextStylesProps {
  textColor?: string;
  textWeight?: number;
  lineHeight?: string;
  textAlign?: string;
}

type TextProps<C extends ElementType> = TextStylesProps & {
  as?: C;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof TextStylesProps>;

const Text = forwardRef<HTMLSpanElement, TextProps<ElementType>>(
  (
    {
      as: Component = 'span',
      textColor,
      textWeight,
      lineHeight,
      textAlign,
      children,
      ...props
    },
    ref,
  ) => (
    <BaseText
      as={Component}
      ref={ref}
      textColor={textColor}
      textWeight={textWeight}
      lineHeight={lineHeight}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </BaseText>
  ),
);

Text.displayName = 'Text';

export default Text;
