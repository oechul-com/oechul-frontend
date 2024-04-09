import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

interface ButtonStylesProps {
  $variant: 'normal' | 'alert' | 'blue' | 'accent';
  $bgColor?: string;
  $hoverBgColor?: string;
  $invalidBgColor?: string;
  $textColor?: string;
  $hoverTextColor?: string;
  $invalidTextColor?: string;
}

const variantStyles = {
  normal: {
    textColor: theme.colors.white,
    hoverTextColor: theme.colors.white,
    invalidTextColor: theme.colors.white,
    bgColor: theme.colors.black,
    hoverBgColor: theme.colors.gray750,
    invalidBgColor: theme.colors.gray300,
  },
  alert: {
    textColor: theme.colors.red.alert,
    hoverTextColor: theme.colors.red.alert,
    invalidTextColor: theme.colors.red.alert,
    bgColor: theme.colors.red.alertBg,
    hoverBgColor: theme.colors.red.alertHover,
    invalidBgColor: theme.colors.red.alertBg,
  },
  blue: {
    textColor: theme.colors.blue.main,
    hoverTextColor: theme.colors.blue.main,
    invalidTextColor: theme.colors.blue.main,
    bgColor: theme.colors.blue.bg,
    hoverBgColor: theme.colors.blue.bgHover,
    invalidBgColor: theme.colors.blue.bg,
  },
  accent: {
    textColor: theme.colors.white,
    hoverTextColor: theme.colors.white,
    invalidTextColor: theme.colors.white,
    bgColor: theme.colors.red.accent,
    hoverBgColor: theme.colors.red.accentHover,
    invalidBgColor: theme.colors.red.accent,
  },
};

export const BaseButton = styled.button<ButtonStylesProps>`
  ${({
    $variant,
    $textColor,
    $hoverTextColor,
    $invalidTextColor,
    $bgColor,
    $hoverBgColor,
    $invalidBgColor,
  }) => {
    const {
      textColor: defaultTextColor,
      hoverTextColor: defaultHoverTextColor,
      invalidTextColor: defaultInvalidTextColor,
      bgColor: defaultBgColor,
      hoverBgColor: defaultHoverBgColor,
      invalidBgColor: defaultInvalidBgColor,
    } = variantStyles[$variant] || {};

    const finalTextColor = $textColor || defaultTextColor;
    const finalHoverTextColor = $hoverTextColor || defaultHoverTextColor;
    const finalInvalidTextColor = $invalidTextColor || defaultInvalidTextColor;
    const finalBgColor = $bgColor || defaultBgColor;
    const finalHoverBgColor = $hoverBgColor || defaultHoverBgColor;
    const finalInvalidBgColor = $invalidBgColor || defaultInvalidBgColor;

    return `
      display:flex;
      align-items:center;
      justify-content:center;
      padding-block: ${rem(25)};
      color: ${finalTextColor};
      font-size: ${theme.fontSizes.lg};
      font-weight: ${theme.fontWeights.semibold};
      outline: none;
      cursor: pointer;
      border: none;
      border-radius: ${rem(10)};
      transition: background-color 0.2s ease-in-out;
      background-color: ${finalBgColor};
      gap: ${rem(6)};
      
      &:hover {
        color:${finalHoverTextColor};
        background-color: ${finalHoverBgColor};
      }
      
      &[aria-invalid='true'] {
        color:${finalInvalidTextColor};
        background-color: ${finalInvalidBgColor};
      }
    `;
  }}
`;
