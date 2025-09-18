import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Default Switch',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Switch',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Error Switch',
    error: true,
    helperText: 'Error message',
  },
};
