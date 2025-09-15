import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch Component', () => {
    test('renders with label', () => {
        render(<Switch label="Enable" />);
        expect(screen.getByText('Enable')).toBeInTheDocument();
    });

    test('calls onChange with checked=true when toggled from unchecked', () => {
        const handleChange = jest.fn();
        render(<Switch onChange={handleChange} />);

        const input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    test('calls onChange with checked=false when toggled from checked', () => {
        const handleChange = jest.fn();
        render(<Switch checked onChange={handleChange} />);

        const input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(false);
    });

    test('shows error message and aria attributes', () => {
        render(<Switch error="Must be enabled" />);
        expect(screen.getByText('Must be enabled')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
    });

    test('is disabled when disabled prop is true', () => {
        render(<Switch disabled />);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});


