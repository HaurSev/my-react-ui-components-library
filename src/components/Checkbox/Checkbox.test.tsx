import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
    test('renders with label', () => {
        render(<Checkbox label="Accept" />);
        expect(screen.getByText('Accept')).toBeInTheDocument();
    });

    test('calls onChange with checked=true when clicked from unchecked', () => {
        const handleChange = jest.fn();
        render(<Checkbox onChange={handleChange} />);

        const input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    test('calls onChange with checked=false when clicked from checked', () => {
        const handleChange = jest.fn();
        render(<Checkbox checked onChange={handleChange} />);

        const input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(false);
    });

    test('shows error message and aria attributes', () => {
        render(<Checkbox error="Required" />);
        expect(screen.getByText('Required')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
    });

    test('renders indeterminate indicator when indeterminate and not checked', () => {
        const { container } = render(<Checkbox indeterminate />);
        expect(container.querySelector('span')).toBeInTheDocument();
    });

    test('is disabled when disabled prop is true', () => {
        render(<Checkbox disabled />);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});


