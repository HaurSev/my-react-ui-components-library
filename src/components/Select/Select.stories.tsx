import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseOptions = [
  { value: '', label: 'Select an option' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

// Basic Select
export const Default: Story = {
  render: (args) => <Select {...args} options={baseOptions} />,
  args: {
    label: 'Select Option',
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  render: (args) => <Select {...args} options={baseOptions} />,
  args: {
    label: 'Select with default',
    value: 'option2',
  },
};

// With Error
export const WithError: Story = {
  render: (args) => <Select {...args} options={baseOptions} />,
  args: {
    label: 'Select with error',
    helperText: 'This field is required',
    error: true,
  },
};

// Disabled
export const Disabled: Story = {
  render: (args) => <Select {...args} options={baseOptions} />,
  args: {
    label: 'Disabled Select',
    disabled: true,
  },
};

// Full Width
export const FullWidth: Story = {
  render: (args) => <Select {...args} options={baseOptions} />,
  args: {
    label: 'Full Width Select',
    fullWidth: true,
  },
};

// Many Options
export const ManyOptions: Story = {
  render: (args) => (
    <Select
      {...args}
      options={[
        { value: '', label: 'Choose a country' },
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'jp', label: 'Japan' },
        { value: 'au', label: 'Australia' },
      ]}
    />
  ),
  args: {
    label: 'Country',
  },
};
