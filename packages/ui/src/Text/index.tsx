// Text.styled.tsx
import React, { ElementType, ReactNode, forwardRef } from 'react';

import BaseText from './Text.styles';

interface TextStylesProps {
  textColor?: string;
  fontWeight?: number;
  fontSize?: string;
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
      fontWeight,
      fontSize,
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
      fontWeight={fontWeight}
      fontSize={fontSize}
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
