import type { Meta, StoryObj } from '@storybook/react';
import { Select, Option } from './Select';

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

// Basic Select
export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <Option value="">Select an option</Option>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  ),
  args: {
    label: 'Select Option',
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  render: (args) => (
    <Select {...args}>
      <Option value="">Select an option</Option>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  ),
  args: {
    label: 'Select with default',
    value: 'option2',
  },
};

// With Error
export const WithError: Story = {
  render: (args) => (
    <Select {...args}>
      <Option value="">Select an option</Option>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
    </Select>
  ),
  args: {
    label: 'Select with error',
    error: 'This field is required',
  },
};

// Disabled
export const Disabled: Story = {
  render: (args) => (
    <Select {...args}>
      <Option value="">Select an option</Option>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
    </Select>
  ),
  args: {
    label: 'Disabled Select',
    disabled: true,
  },
};

// Full Width
export const FullWidth: Story = {
  render: (args) => (
    <Select {...args}>
      <Option value="">Select an option</Option>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
    </Select>
  ),
  args: {
    label: 'Full Width Select',
    fullWidth: true,
  },
};

// Many Options
export const ManyOptions: Story = {
  render: (args) => (
    <Select {...args}>
      <Option value="">Choose a country</Option>
      <Option value="us">United States</Option>
      <Option value="ca">Canada</Option>
      <Option value="uk">United Kingdom</Option>
      <Option value="de">Germany</Option>
      <Option value="fr">France</Option>
      <Option value="jp">Japan</Option>
      <Option value="au">Australia</Option>
    </Select>
  ),
  args: {
    label: 'Country',
  },
};