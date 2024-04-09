import { Checkbox } from '@oechul/ui';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

export default {
  title: 'ui/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
      description: 'checkbox label',
    },
    checked: {
      control: 'boolean',
      description: 'checkbox checked',
    },
  },
} as Meta;

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox Label',
  checked: true,
};
