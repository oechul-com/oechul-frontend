import { rem, theme } from '@oechul/styles';
import { styled } from 'styled-components';

export const StyledLandingContainer = styled.div`
  ${theme.layout.column};
  height: 100%;
  padding-block: ${rem(19)};
  justify-content: space-between;
`;

export const StyledBrandingWrapper = styled.div`
  ${theme.layout.center};
  flex: 1;
  padding-bottom: ${rem(80)};
`;

export const StyledLandingSection = styled.div<{ $gap: string }>`
  ${theme.layout.columnCenterY};
  gap: ${({ $gap }) => $gap || `0`};
`;

export const StyledStatsScrollerContainer = styled.div`
  ${theme.layout.column};
  width: calc(var(--vw, 1vw) * 100);
  margin-left: calc((var(--vw, 1vw) * -50) + 50%);
  gap: ${rem(23)};
`;

export const StyledPolicyNavigate = styled.div`
  ${theme.layout.centerX};
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};

  & > a {
    color: ${theme.colors.gray500};
    text-decoration: none;
  }
`;
