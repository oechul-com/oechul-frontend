import { Select } from '@oechul/ui';
import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'ui/Select',
  component: Select,
  argTypes: {
    label: { control: 'text', description: 'Select Label' },
    options: { control: 'object', description: 'Select Options' },
    value: {
      control: 'select',
      description: 'Selected Value',
      options: ['option1', 'option2', 'option3'],
    },
  },
} as Meta;

const Template: StoryFn<typeof Select> = args => {
  const [value, setValue] = useState(args.value);
  return (
    <Select {...args} value={value} onChange={e => setValue(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: '',
};
