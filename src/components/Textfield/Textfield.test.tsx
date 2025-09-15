import { render, screen, fireEvent } from '@testing-library/react';
import { createRef } from 'react';
import Textfield from './Textfield';

describe('Textfield Component', () => {
  test('renders textfield with label', () => {
    render(<Textfield label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  test('renders without label', () => {
    render(<Textfield />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('applies correct variant class', () => {
    const { container } = render(<Textfield variant="filled" />);
    expect(container.querySelector('input')).toHaveClass('filled');
  });

  test('displays error message', () => {
    render(<Textfield error="Invalid input" />);
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  test('displays helper text', () => {
    render(<Textfield helperText="Additional information" />);
    expect(screen.getByText('Additional information')).toBeInTheDocument();
  });

  test('is disabled when disabled prop is true', () => {
    render(<Textfield disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('applies fullWidth class when fullWidth is true', () => {
    const { container } = render(<Textfield fullWidth />);
    expect(container.firstChild).toHaveClass('fullWidth');
  });

  test('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<Textfield onChange={handleChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    const { container } = render(<Textfield className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Textfield ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  test('applies correct type attribute', () => {
    render(<Textfield type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  test('shows required indicator when required', () => {
    render(<Textfield label="Email" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('applies placeholder', () => {
    render(<Textfield placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });
});