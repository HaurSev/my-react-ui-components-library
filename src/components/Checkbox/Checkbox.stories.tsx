import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Checkbox
export const Default: Story = {
  args: {
    label: 'Checkbox label',
  },
};

// Checked State
export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
};

// Indeterminate State
export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
};

// Disabled States
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" checked disabled />
      <Checkbox label="Disabled indeterminate" indeterminate disabled />
    </div>
  ),
};

// With Error
export const WithError: Story = {
  args: {
    label: 'Checkbox with error',
    error: 'This field is required',
  },
};

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Terms and conditions',
    helperText: 'You must agree to continue',
  },
};

// Without Label
export const WithoutLabel: Story = {
  args: {},
};

// Group of Checkboxes
export const CheckboxGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
    </div>
  ),
};