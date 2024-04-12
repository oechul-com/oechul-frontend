import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  height: ${rem(68)};
  border: 1px solid ${theme.colors.gray250};
  border-radius: ${rem(10)};
  background-color: white;
`;

export const BaseSelect = styled.select`
  width: 100%;
  height: 100%;
  padding-inline: ${rem(24)};
  padding-top: ${rem(16)};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.semibold};
  outline: none;
  border: none;

  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;

  & > option {
    color: ${theme.colors.black};
  }

  &:invalid {
    color: transparent;
  }
`;

export const SelectLabel = styled.label<{ $position: string }>`
  position: absolute;
  left: ${rem(24)};
  color: ${theme.colors.gray500};
  top: ${({ $position }) => ($position === 'top' ? rem(16) : '50%')};
  transform: ${({ $position }) =>
    $position === 'top' ? 'translateY(0)' : 'translateY(-50%)'};
  font-size: ${({ $position }) =>
    $position === 'top' ? theme.fontSizes['2xs'] : theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  transition: all 200ms ease;
`;

export const SelectIcon = styled.span`
  position: absolute;
  right: ${rem(24)};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;
