import { Button } from '@oechul/ui';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['normal', 'alert', 'blue', 'accent'],
    },
    children: {
      control: 'text',
    },
    as: {
      control: { type: 'radio' },
      options: ['button', 'div'],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  variant: 'normal',
  as: 'button',
};
