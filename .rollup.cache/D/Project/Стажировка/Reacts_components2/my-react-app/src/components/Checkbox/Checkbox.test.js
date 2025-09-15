import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
describe('Checkbox Component', function () {
    test('renders with label', function () {
        render(_jsx(Checkbox, { label: "Accept" }));
        expect(screen.getByText('Accept')).toBeInTheDocument();
    });
    test('calls onChange with checked=true when clicked from unchecked', function () {
        var handleChange = jest.fn();
        render(_jsx(Checkbox, { onChange: handleChange }));
        var input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(true);
    });
    test('calls onChange with checked=false when clicked from checked', function () {
        var handleChange = jest.fn();
        render(_jsx(Checkbox, { checked: true, onChange: handleChange }));
        var input = screen.getByRole('checkbox');
        fireEvent.click(input);
        expect(handleChange).toHaveBeenCalledWith(false);
    });
    test('shows error message and aria attributes', function () {
        render(_jsx(Checkbox, { error: "Required" }));
        expect(screen.getByText('Required')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
    });
    test('renders indeterminate indicator when indeterminate and not checked', function () {
        var container = render(_jsx(Checkbox, { indeterminate: true })).container;
        expect(container.querySelector('span')).toBeInTheDocument();
    });
    test('is disabled when disabled prop is true', function () {
        render(_jsx(Checkbox, { disabled: true }));
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});
//# sourceMappingURL=Checkbox.test.js.map