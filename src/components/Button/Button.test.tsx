import { render, screen, fireEvent } from '@testing-library/react';
import { createRef } from 'react';

import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct variant class', () => {
    const { container } = render(<Button variant="outlined">Test</Button>);
    expect(container.firstChild).toHaveClass('outlined');
  });

  test('applies correct color class', () => {
    const { container } = render(<Button color="secondary">Test</Button>);
    expect(container.firstChild).toHaveClass('secondary');
  });

  test('applies correct size class', () => {
    const { container } = render(<Button size="large">Test</Button>);
    expect(container.firstChild).toHaveClass('large');
  });

  test('applies fullWidth class when fullWidth is true', () => {
    const { container } = render(<Button fullWidth>Test</Button>);
    expect(container.firstChild).toHaveClass('fullWidth');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);

    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies custom className', () => {
    const { container } = render(<Button className="custom-class">Test</Button>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Test</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe('Test');
  });

  test('applies correct type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
  });
});