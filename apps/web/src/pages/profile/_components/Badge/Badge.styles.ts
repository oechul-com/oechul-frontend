import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

import { colorVariant } from '@/pages/profile/_components/Badge/index.tsx';

const colorTypes: { [key: string]: { main: string; bg: string } } = {
  red: { main: theme.colors.red.alert, bg: theme.colors.red.alertBg },
  warning: { main: theme.colors.warning.main, bg: theme.colors.warning.bg },
  green: { main: theme.colors.green.main, bg: theme.colors.green.bg },
  blue: { main: theme.colors.blue.main, bg: theme.colors.blue.bg },
  default: { main: theme.colors.black, bg: theme.colors.gray200 },
};

const getColor = (
  variant: colorVariant,
  type: 'main' | 'bg' = 'main',
): string => {
  const colorConfig = colorTypes[variant] || colorTypes.default;
  return colorConfig[type];
};

export const BadgeRoot = styled.span<{ $variant: colorVariant }>`
  width: fit-content;
  padding: ${`${rem(4)} ${rem(6)}`};
  color: ${({ $variant }) => getColor($variant)};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};
  background-color: ${({ $variant }) => getColor($variant, 'bg')};
`;
