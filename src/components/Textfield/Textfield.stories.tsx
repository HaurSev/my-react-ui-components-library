import type { Meta, StoryObj } from '@storybook/react';
import Textfield from './Textfield';

const meta: Meta<typeof Textfield> = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Textfield
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <Textfield label="Outlined" variant="outlined" placeholder="Outlined variant" />
      <Textfield label="Filled" variant="filled" placeholder="Filled variant" />
      <Textfield label="Standard" variant="standard" placeholder="Standard variant" />
    </div>
  ),
};

// With Error
export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Invalid email address',
    defaultValue: 'invalid-email',
  },
};

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};

// Types
export const DifferentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <Textfield label="Email" type="email" placeholder="user@example.com" />
      <Textfield label="Password" type="password" placeholder="Enter password" />
      <Textfield label="Number" type="number" placeholder="Enter number" />
      <Textfield label="Search" type="search" placeholder="Search..." />
    </div>
  ),
};

// Full Width
export const FullWidth: Story = {
  args: {
    label: 'Full Width Field',
    fullWidth: true,
    placeholder: 'This field takes full width',
  },
};