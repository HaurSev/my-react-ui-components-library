import { render, screen, fireEvent } from '@testing-library/react';

import { Select } from './Select';

const baseOptions = [
  { value: 'us', label: 'USA' },
  { value: 'ca', label: 'Canada' },
];

describe('Select Component', () => {
  test('renders select with label', () => {
    render(
      <Select label="Country" options={[{ value: 'us', label: 'USA' }]} />,
    );
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  test('displays selected value', () => {
    render(<Select value="us" options={baseOptions} />);
    expect(screen.getByText('USA')).toBeInTheDocument();
  });

  test('opens dropdown when clicked', () => {
    render(<Select options={baseOptions} />);

    fireEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('calls onChange when option is selected', () => {
    const handleChange = jest.fn();
    render(<Select options={baseOptions} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('Canada'));
    expect(handleChange).toHaveBeenCalledWith('ca');
  });

  test('displays error message', () => {
    render(
      <Select
        error={true}
        helperText="Selection required"
        options={[{ value: 'us', label: 'USA' }]}
      />,
    );
    expect(screen.getByText('Selection required')).toBeInTheDocument();
  });

  test('is disabled when disabled prop is true', () => {
    render(<Select disabled options={[{ value: 'us', label: 'USA' }]} />);
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  test('applies fullWidth class when fullWidth is true', () => {
    const { container } = render(
      <Select fullWidth options={[{ value: 'us', label: 'USA' }]} />,
    );
    expect(container.firstChild).toHaveClass('fullWidth');
  });

  test('closes when clicking outside', () => {
    render(<Select options={[{ value: 'us', label: 'USA' }]} />);

    fireEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('applies custom className', () => {
    const { container } = render(
      <Select
        className="custom-class"
        options={[{ value: 'us', label: 'USA' }]}
      />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
