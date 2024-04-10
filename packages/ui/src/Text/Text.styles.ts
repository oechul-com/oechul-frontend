import { theme } from '@oechul/styles';
import styled from 'styled-components';

interface TextProps {
  variant?: 'normal' | 'title';
  textColor?: string;
  textWeight?: number;
  lineHeight?: string;
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
  ${({ variant = 'normal', textColor, textWeight, lineHeight }) => {
    const { fontSize, fontWeight } = variantStyles[variant];

    return `
      display: block;
      white-space: pre-wrap;
      color: ${textColor || 'inherit'};
      font-size: ${fontSize};
      font-weight: ${textWeight || fontWeight};
      text-wrap: wrap;
      lineHeight: ${lineHeight};
      word-break: keep-all;
    `;
  }}
`;

export default BaseText;
