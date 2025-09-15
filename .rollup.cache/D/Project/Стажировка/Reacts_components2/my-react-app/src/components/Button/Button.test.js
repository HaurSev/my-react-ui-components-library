import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
describe('Button Component', function () {
    test('renders button with text', function () {
        render(_jsx(Button, { children: "Click me" }));
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });
    test('calls onClick when clicked', function () {
        var handleClick = jest.fn();
        render(_jsx(Button, { onClick: handleClick, children: "Click me" }));
        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('applies correct variant class', function () {
        var container = render(_jsx(Button, { variant: "outlined", children: "Test" })).container;
        expect(container.firstChild).toHaveClass('outlined');
    });
    test('applies correct color class', function () {
        var container = render(_jsx(Button, { color: "secondary", children: "Test" })).container;
        expect(container.firstChild).toHaveClass('secondary');
    });
    test('applies correct size class', function () {
        var container = render(_jsx(Button, { size: "large", children: "Test" })).container;
        expect(container.firstChild).toHaveClass('large');
    });
    test('applies fullWidth class when fullWidth is true', function () {
        var container = render(_jsx(Button, { fullWidth: true, children: "Test" })).container;
        expect(container.firstChild).toHaveClass('fullWidth');
    });
    test('is disabled when disabled prop is true', function () {
        render(_jsx(Button, { disabled: true, children: "Disabled" }));
        expect(screen.getByText('Disabled')).toBeDisabled();
    });
    test('does not call onClick when disabled', function () {
        var handleClick = jest.fn();
        render(_jsx(Button, { disabled: true, onClick: handleClick, children: "Disabled" }));
        fireEvent.click(screen.getByText('Disabled'));
        expect(handleClick).not.toHaveBeenCalled();
    });
    test('applies custom className', function () {
        var container = render(_jsx(Button, { className: "custom-class", children: "Test" })).container;
        expect(container.firstChild).toHaveClass('custom-class');
    });
    test('forwards ref correctly', function () {
        var _a;
        var ref = React.createRef();
        render(_jsx(Button, { ref: ref, children: "Test" }));
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        expect((_a = ref.current) === null || _a === void 0 ? void 0 : _a.textContent).toBe('Test');
    });
    test('applies correct type attribute', function () {
        render(_jsx(Button, { type: "submit", children: "Submit" }));
        expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
    });
});
//# sourceMappingURL=Button.test.js.map