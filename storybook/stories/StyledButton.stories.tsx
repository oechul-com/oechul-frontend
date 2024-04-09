import type { StoryFn, Meta } from '@storybook/react';

import StyledButton from './StyledButton';

export default {
  title: 'stories/Button',
  component: StyledButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof StyledButton>;

// 템플릿 정의
const Template: StoryFn<typeof StyledButton> = args => (
  <StyledButton {...args} />
);

// 기본 스토리
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  backgroundColor: '#424242',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  backgroundColor: '#120391',
};
