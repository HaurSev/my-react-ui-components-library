import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { Select, Option } from './Select';
describe('Select Component', function () {
    test('renders select with label', function () {
        render(_jsx(Select, { label: "Country", children: _jsx(Option, { value: "us", children: "USA" }) }));
        expect(screen.getByText('Country')).toBeInTheDocument();
    });
    test('displays selected value', function () {
        render(_jsxs(Select, { value: "us", children: [_jsx(Option, { value: "us", children: "USA" }), _jsx(Option, { value: "ca", children: "Canada" })] }));
        expect(screen.getByText('USA')).toBeInTheDocument();
    });
    test('opens dropdown when clicked', function () {
        render(_jsxs(Select, { children: [_jsx(Option, { value: "us", children: "USA" }), _jsx(Option, { value: "ca", children: "Canada" })] }));
        fireEvent.click(screen.getByRole('combobox'));
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    test('calls onChange when option is selected', function () {
        var handleChange = jest.fn();
        render(_jsxs(Select, { onChange: handleChange, children: [_jsx(Option, { value: "us", children: "USA" }), _jsx(Option, { value: "ca", children: "Canada" })] }));
        fireEvent.click(screen.getByRole('combobox'));
        fireEvent.click(screen.getByText('Canada'));
        expect(handleChange).toHaveBeenCalledWith('ca');
    });
    test('displays error message', function () {
        render(_jsx(Select, { error: "Selection required", children: _jsx(Option, { value: "us", children: "USA" }) }));
        expect(screen.getByText('Selection required')).toBeInTheDocument();
    });
    test('is disabled when disabled prop is true', function () {
        render(_jsx(Select, { disabled: true, children: _jsx(Option, { value: "us", children: "USA" }) }));
        expect(screen.getByRole('combobox')).toHaveAttribute('aria-disabled', 'true');
    });
    test('applies fullWidth class when fullWidth is true', function () {
        var container = render(_jsx(Select, { fullWidth: true, children: _jsx(Option, { value: "us", children: "USA" }) })).container;
        expect(container.firstChild).toHaveClass('fullWidth');
    });
    test('closes when clicking outside', function () {
        render(_jsx(Select, { children: _jsx(Option, { value: "us", children: "USA" }) }));
        fireEvent.click(screen.getByRole('combobox'));
        expect(screen.getByRole('listbox')).toBeInTheDocument();
        fireEvent.mouseDown(document.body);
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
    test('applies custom className', function () {
        var container = render(_jsx(Select, { className: "custom-class", children: _jsx(Option, { value: "us", children: "USA" }) })).container;
        expect(container.firstChild).toHaveClass('custom-class');
    });
});
describe('Option Component', function () {
    test('renders option with text', function () {
        render(_jsx(Option, { value: "us", children: "USA" }));
        expect(screen.getByText('USA')).toBeInTheDocument();
    });
    test('applies selected class when isSelected is true', function () {
        var container = render(_jsx(Option, { value: "us", isSelected: true, children: "USA" })).container;
        expect(container.firstChild).toHaveClass('optionSelected');
    });
    test('calls onClick when clicked', function () {
        var handleClick = jest.fn();
        render(_jsx(Option, { value: "us", onClick: handleClick, children: "USA" }));
        fireEvent.click(screen.getByText('USA'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=Select.test.js.map