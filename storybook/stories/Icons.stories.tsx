import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CallIcon,
  CloseIcon,
  ForwardToInboxIcon,
  MinusIcon,
  PassIcon,
  PlusIcon,
  PolicyIcon,
  SearchIcon,
  UploadIcon,
  VerificationIcon,
  InstagramIcon,
  KakaoTalkIcon,
  MailIcon,
  CrownIcon,
  MemberIcon,
  CaratUpIcon,
  CaratDownIcon,
  CaratLeftIcon,
  CaratRightIcon,
  ImageAddIcon,
  Logo,
  IDCard,
} from '@oechul/icons';
import type { IconProps } from '@oechul/icons';
import { StoryFn, Meta } from '@storybook/react';
import { FC, useState } from 'react';

type IconCategories = {
  [category: string]: { [name: string]: FC<IconProps> };
};

const icons: IconCategories = {
  action: {
    ArrowUpIcon,
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    CallIcon,
    CloseIcon,
    ForwardToInboxIcon,
    MinusIcon,
    PassIcon,
    PlusIcon,
    PolicyIcon,
    SearchIcon,
    UploadIcon,
    VerificationIcon,
    CaratUpIcon,
    CaratDownIcon,
    CaratLeftIcon,
    CaratRightIcon,
    ImageAddIcon,
  },
  social: {
    InstagramIcon,
    KakaoTalkIcon,
    MailIcon,
  },
  tag: {
    CrownIcon,
    MemberIcon,
  },
  assets: {
    Logo,
    IDCard,
  },
};

const IconSelector = () => {
  const [selectedIcon, setSelectedIcon] = useState({
    category: 'action',
    name: 'ArrowUpIcon',
  });

  const IconComponent = icons[selectedIcon.category][selectedIcon.name];

  return (
    <div>
      {Object.entries(icons).map(([category, icons]) => (
        <div key={category}>
          <h3>{category}</h3>
          {Object.keys(icons).map(iconName => (
            <label key={iconName}>
              <input
                type="radio"
                name="icon"
                value={iconName}
                checked={
                  selectedIcon.name === iconName &&
                  selectedIcon.category === category
                }
                onChange={() => setSelectedIcon({ category, name: iconName })}
              />
              {iconName}
            </label>
          ))}
        </div>
      ))}
      <div>
        <IconComponent fill="black" />
      </div>
    </div>
  );
};

export default {
  title: 'icons',
  component: IconSelector,
} as Meta;

const Template: StoryFn = args => <IconSelector {...args} />;

export const Default = Template.bind({});
