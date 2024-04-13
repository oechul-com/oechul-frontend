import { ReactElement, ReactNode, MouseEvent } from 'react';

import {
  ItemContent,
  ItemLink,
  ItemRoot,
  ItemTitle,
} from './Preference.styles';

interface PreferenceItemProps {
  href?: string;
  icon: ReactNode;
  title: string;
  badge?: ReactNode;
  onAction?: () => void;
}

const PreferenceItem = ({
  href,
  icon,
  title,
  badge,
  onAction,
}: PreferenceItemProps): ReactElement => {
  const handleItemClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onAction && !href) {
      event.preventDefault();
      onAction();
    }
  };

  return (
    <ItemRoot>
      <ItemLink to={href || '#'} onClick={handleItemClick}>
        <ItemContent>
          {icon}
          <ItemTitle>{title}</ItemTitle>
        </ItemContent>
        {badge}
      </ItemLink>
    </ItemRoot>
  );
};

export default PreferenceItem;
