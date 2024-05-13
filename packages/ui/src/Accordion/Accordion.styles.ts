import { rem, theme } from '@oechul/styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BaseContent = styled.div<{ $bgColor?: string }>`
  ${theme.layout.column};
  width: 100%;
  border-radius: ${rem(10)};
  background-color: ${({ $bgColor }) =>
    $bgColor ? $bgColor : theme.colors.gray100};
`;

export const DefaultToggle = styled(motion.button)`
  position: absolute;
  top: 50%;
  right: 0;
  border: none;
  outline: none;
  cursor: pointer;
  padding: ${rem(16)};
  background-color: transparent;
`;

export const AccordionDivider = styled(motion.div)`
  width: 100%;
  height: ${rem(1)};
  background-color: ${theme.colors.gray200};
`;
