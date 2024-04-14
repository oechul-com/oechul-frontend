import { Modal } from '@oechul/ui';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'ui/Modal',
  component: Modal,
} as Meta;

const Template: StoryFn<typeof Modal> = args => (
  <Modal {...args}>
    <Modal.Trigger>Trigger</Modal.Trigger>
    <Modal.Content>
      <Modal.Close />
      <div>
        <h2 style={{ marginTop: 0 }}>Modal Title</h2>
        <p>
          Modal content. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam ac ante mollis, fermentum nunc in, fermentum...
        </p>
        <Modal.Close as="button">Close</Modal.Close>
      </div>
    </Modal.Content>
  </Modal>
);

export const Default = Template.bind({});
