import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  ${theme.layout.column};
  padding-block: ${rem(36)};
`;

export const ProfileImageWrapper = styled.span<{ $size: number }>`
  ${theme.layout.center};
  align-self: center;
  width: ${({ $size }) => rem($size)};
  height: ${({ $size }) => rem($size)};
  margin-bottom: ${rem(36)};
  border: ${`${rem(1)} solid ${theme.colors.gray250}`};
  border-radius: 50%;
  background-color: ${theme.colors.gray200};
`;

export const Bio = styled.p`
  align-self: center;
  width: fit-content;
  padding: ${rem(10)};
  margin-block: ${rem(26)};
  color: ${theme.colors.gray600};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${rem(10)};
  background-color: ${theme.colors.gray100};
`;

export const HorizontalRule = styled.hr`
  width: calc(var(--vw, 1vw) * 100);
  height: ${rem(10)};
  margin-left: calc((var(--vw, 1vw) * -50) + 50%);
  border: none;
  background-color: ${theme.colors.gray200};
`;
