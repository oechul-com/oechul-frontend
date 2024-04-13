import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

import { colorVariant } from '@/components/Badge/index.tsx';

const colorTypes: { [key: string]: { main: string; bg: string } } = {
  normal: { main: theme.colors.black, bg: theme.colors.gray200 },
  warning: { main: theme.colors.warning.main, bg: theme.colors.warning.bg },
  red: { main: theme.colors.red.alert, bg: theme.colors.red.alertBg },
  green: { main: theme.colors.green.main, bg: theme.colors.green.bg },
  blue: { main: theme.colors.blue.main, bg: theme.colors.blue.bg },
};

const getColor = (variant: colorVariant, type: 'main' | 'bg'): string => {
  const colorConfig = colorTypes[variant] || colorTypes.default;
  return colorConfig[type];
};

export const BadgeRoot = styled.span<{ $variant: colorVariant }>`
  width: fit-content;
  padding: ${`${rem(4)} ${rem(6)}`};
  color: ${({ $variant }) => getColor($variant, 'main')};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};
  background-color: ${({ $variant }) => getColor($variant, 'bg')};
`;

export const NewBadgeRoot = styled.span`
  padding: ${rem(4)};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes['3xs']};
  font-weight: ${theme.fontWeights.bold};
  border-radius: ${rem(4)};
  background-color: ${theme.colors.orange.bg};
`;
