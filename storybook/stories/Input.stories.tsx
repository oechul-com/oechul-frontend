import { Input } from '@oechul/ui';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

export default {
  title: 'ui/Input',
  component: Input,
  argTypes: {
    isValid: {
      control: 'boolean',
      description: 'input validation status',
    },
    label: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
  },
} as Meta;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input',
  isValid: undefined,
};
