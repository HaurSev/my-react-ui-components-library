import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Textfield from './Textfield';
describe('Textfield Component', function () {
    test('renders textfield with label', function () {
        render(_jsx(Textfield, { label: "Email" }));
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });
    test('renders without label', function () {
        render(_jsx(Textfield, {}));
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
    test('applies correct variant class', function () {
        var container = render(_jsx(Textfield, { variant: "filled" })).container;
        expect(container.querySelector('input')).toHaveClass('filled');
    });
    test('displays error message', function () {
        render(_jsx(Textfield, { error: "Invalid input" }));
        expect(screen.getByText('Invalid input')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });
    test('displays helper text', function () {
        render(_jsx(Textfield, { helperText: "Additional information" }));
        expect(screen.getByText('Additional information')).toBeInTheDocument();
    });
    test('is disabled when disabled prop is true', function () {
        render(_jsx(Textfield, { disabled: true }));
        expect(screen.getByRole('textbox')).toBeDisabled();
    });
    test('applies fullWidth class when fullWidth is true', function () {
        var container = render(_jsx(Textfield, { fullWidth: true })).container;
        expect(container.firstChild).toHaveClass('fullWidth');
    });
    test('calls onChange when value changes', function () {
        var handleChange = jest.fn();
        render(_jsx(Textfield, { onChange: handleChange }));
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
    test('applies custom className', function () {
        var container = render(_jsx(Textfield, { className: "custom-class" })).container;
        expect(container.firstChild).toHaveClass('custom-class');
    });
    test('forwards ref correctly', function () {
        var ref = React.createRef();
        render(_jsx(Textfield, { ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
    test('applies correct type attribute', function () {
        render(_jsx(Textfield, { type: "email" }));
        expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });
    test('shows required indicator when required', function () {
        render(_jsx(Textfield, { label: "Email", required: true }));
        expect(screen.getByText('*')).toBeInTheDocument();
    });
    test('applies placeholder', function () {
        render(_jsx(Textfield, { placeholder: "Enter text" }));
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Textfield.test.js.map