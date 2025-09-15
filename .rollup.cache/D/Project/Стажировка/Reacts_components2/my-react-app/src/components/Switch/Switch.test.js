import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';
describe('Switch Component', function () {
    test('renders with label', function () {
        render(_jsx(Switch, { label: "Enable" }));
        expect(screen.getByText('Enable')).toBeInTheDocument();
    });
    test('calls onChange with checked=true when toggled from unchecked', function () {
        var handleChange = jest.fn();
        render(_jsx(Switch, { onChange: handleChange }));
        var input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(true);
    });
    test('calls onChange with checked=false when toggled from checked', function () {
        var handleChange = jest.fn();
        render(_jsx(Switch, { checked: true, onChange: handleChange }));
        var input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(false);
    });
    test('shows error message and aria attributes', function () {
        render(_jsx(Switch, { error: "Must be enabled" }));
        expect(screen.getByText('Must be enabled')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
    });
    test('is disabled when disabled prop is true', function () {
        render(_jsx(Switch, { disabled: true }));
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});
//# sourceMappingURL=Switch.test.js.map