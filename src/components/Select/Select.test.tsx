import { render, screen, fireEvent } from '@testing-library/react';

import { Select, Option } from './Select';

describe('Select Component', () => {
  test('renders select with label', () => {
    render(
      <Select label="Country">
        <Option value="us">USA</Option>
      </Select>
    );
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  test('displays selected value', () => {
    render(
      <Select value="us">
        <Option value="us">USA</Option>
        <Option value="ca">Canada</Option>
      </Select>
    );
    expect(screen.getByText('USA')).toBeInTheDocument();
  });

  test('opens dropdown when clicked', () => {
    render(
      <Select>
        <Option value="us">USA</Option>
        <Option value="ca">Canada</Option>
      </Select>
    );
    
    fireEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('calls onChange when option is selected', () => {
    const handleChange = jest.fn();
    render(
      <Select onChange={handleChange}>
        <Option value="us">USA</Option>
        <Option value="ca">Canada</Option>
      </Select>
    );
    
    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('Canada'));
    expect(handleChange).toHaveBeenCalledWith('ca');
  });

  test('displays error message', () => {
    render(
      <Select error="Selection required">
        <Option value="us">USA</Option>
      </Select>
    );
    expect(screen.getByText('Selection required')).toBeInTheDocument();
  });

  test('is disabled when disabled prop is true', () => {
    render(
      <Select disabled>
        <Option value="us">USA</Option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-disabled', 'true');
  });

  test('applies fullWidth class when fullWidth is true', () => {
    const { container } = render(
      <Select fullWidth>
        <Option value="us">USA</Option>
      </Select>
    );
    expect(container.firstChild).toHaveClass('fullWidth');
  });

  test('closes when clicking outside', () => {
    render(
      <Select>
        <Option value="us">USA</Option>
      </Select>
    );
    
    fireEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('applies custom className', () => {
    const { container } = render(
      <Select className="custom-class">
        <Option value="us">USA</Option>
      </Select>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});

describe('Option Component', () => {
  test('renders option with text', () => {
    render(<Option value="us">USA</Option>);
    expect(screen.getByText('USA')).toBeInTheDocument();
  });

  test('applies selected class when isSelected is true', () => {
    const { container } = render(<Option value="us" isSelected>USA</Option>);
    expect(container.firstChild).toHaveClass('optionSelected');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Option value="us" onClick={handleClick}>USA</Option>);
    
    fireEvent.click(screen.getByText('USA'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});