import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Switch
export const Default: Story = {
  args: {
    label: 'Switch label',
  },
};

// Checked State
export const Checked: Story = {
  args: {
    label: 'Checked switch',
    checked: true,
  },
};

// Disabled States
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" checked disabled />
    </div>
  ),
};

// With Error
export const WithError: Story = {
  args: {
    label: 'Switch with error',
    error: 'This setting is required',
  },
};

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Enable notifications',
    helperText: 'Receive important updates',
  },
};

// Without Label
export const WithoutLabel: Story = {
  args: {},
};

// Switch Group
export const SwitchGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="Wi-Fi" checked />
      <Switch label="Bluetooth" />
      <Switch label="Airplane mode" />
      <Switch label="Location services" checked />
    </div>
  ),
};