import { rem, theme } from '@oechul/styles';
import styled from 'styled-components';

export const HorizontalRule = styled.hr`
  width: 100dvw;
  height: ${rem(10)};
  margin-left: calc(-50vw + 50%);
  border: none;
  background-color: ${theme.colors.gray200};
`;
