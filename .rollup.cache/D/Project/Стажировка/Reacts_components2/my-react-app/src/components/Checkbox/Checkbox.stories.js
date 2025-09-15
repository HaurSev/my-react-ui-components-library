import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Checkbox from './Checkbox';
var meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
        },
        indeterminate: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        onChange: { action: 'changed' },
    },
};
export default meta;
// Basic Checkbox
export var Default = {
    args: {
        label: 'Checkbox label',
    },
};
// Checked State
export var Checked = {
    args: {
        label: 'Checked checkbox',
        checked: true,
    },
};
// Indeterminate State
export var Indeterminate = {
    args: {
        label: 'Indeterminate checkbox',
        indeterminate: true,
    },
};
// Disabled States
export var Disabled = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Checkbox, { label: "Disabled unchecked", disabled: true }), _jsx(Checkbox, { label: "Disabled checked", checked: true, disabled: true }), _jsx(Checkbox, { label: "Disabled indeterminate", indeterminate: true, disabled: true })] })); },
};
// With Error
export var WithError = {
    args: {
        label: 'Checkbox with error',
        error: 'This field is required',
    },
};
// With Helper Text
export var WithHelperText = {
    args: {
        label: 'Terms and conditions',
        helperText: 'You must agree to continue',
    },
};
// Without Label
export var WithoutLabel = {
    args: {},
};
// Group of Checkboxes
export var CheckboxGroup = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsx(Checkbox, { label: "Option 1" }), _jsx(Checkbox, { label: "Option 2" }), _jsx(Checkbox, { label: "Option 3" })] })); },
};
//# sourceMappingURL=Checkbox.stories.js.map