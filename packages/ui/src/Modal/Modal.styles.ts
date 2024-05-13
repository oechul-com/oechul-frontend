import { rem } from '@oechul/styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MotionBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2048;
`;

export const BaseButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const DefaultCloseButton = styled.span`
  position: absolute;
  top: ${rem(16)};
  right: ${rem(16)};
  padding: 0;
  margin: 0;
  border: none;
  background: none;
`;
