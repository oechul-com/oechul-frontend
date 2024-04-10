import { theme } from '@oechul/styles';
import styled from 'styled-components';

interface TextProps {
  variant?: 'normal' | 'title';
  textColor?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
}

const variantStyles = {
  normal: {
    fontSize: theme.fontSizes.xs,
    fontWeight: theme.fontWeights.normal,
    textColor: theme.colors.black,
  },
  title: {
    fontSize: theme.fontSizes['2xl'],
    fontWeight: theme.fontWeights.semibold,
    textColor: theme.colors.black,
  },
};

const BaseText = styled.span<TextProps>`
  ${({
    variant = 'normal',
    textColor,
    fontWeight,
    fontSize,
    lineHeight,
    textAlign,
  }) => {
    const { fontWeight: defaultFontWeight, fontSize: defaultFontSize } =
      variantStyles[variant] || {};

    const finalFontWeight = fontWeight || defaultFontWeight;
    const finalFontSize = fontSize || defaultFontSize;

    return `
      display: block;
      white-space: pre-wrap;
      color: ${textColor || 'inherit'};
      font-size: ${finalFontSize};
      font-weight: ${finalFontWeight};
      text-wrap: wrap;
      line-height: ${lineHeight};
      word-break: keep-all;
      text-align: ${textAlign};
    `;
  }}
`;

export default BaseText;
