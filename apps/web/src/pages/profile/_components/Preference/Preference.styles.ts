import { rem, theme } from '@oechul/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListRoot = styled.ul`
  padding: 0;
  list-style-type: none;

  & li:not(:last-child) {
    border-bottom: ${`${rem(1)} solid ${theme.colors.gray200}`};
  }
`;

export const ItemRoot = styled.li`
  list-style: none;
`;

export const ItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${rem(22)};
  text-decoration: none;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(12)};
`;

export const ItemTitle = styled.p`
  color: ${theme.colors.gray850};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.semibold};
`;
