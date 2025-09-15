import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, Option } from './Select';
var meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
        onChange: { action: 'changed' },
    },
};
export default meta;
// Basic Select
export var Default = {
    render: function (args) { return (_jsxs(Select, __assign({}, args, { children: [_jsx(Option, { value: "", children: "Select an option" }), _jsx(Option, { value: "option1", children: "Option 1" }), _jsx(Option, { value: "option2", children: "Option 2" }), _jsx(Option, { value: "option3", children: "Option 3" })] }))); },
    args: {
        label: 'Select Option',
    },
};
// With Default Value
export var WithDefaultValue = {
    render: function (args) { return (_jsxs(Select, __assign({}, args, { children: [_jsx(Option, { value: "", children: "Select an option" }), _jsx(Option, { value: "option1", children: "Option 1" }), _jsx(Option, { value: "option2", children: "Option 2" }), _jsx(Option, { value: "option3", children: "Option 3" })] }))); },
    args: {
        label: 'Select with default',
        value: 'option2',
    },
};
// With Error
export var WithError = {
    render: function (args) { return (_jsxs(Select, __assign({}, args, { children: [_jsx(Option, { value: "", children: "Select an option" }), _jsx(Option, { value: "option1", children: "Option 1" }), _jsx(Option, { value: "option2", children: "Option 2" })] }))); },
    args: {
        label: 'Select with error',
        error: 'This field is required',
    },
};
// Disabled
export var Disabled = {
    render: function (args) { return (_jsxs(Select, __assign({}, args, { children: [_jsx(Option, { value: "", children: "Select an option" }), _jsx(Option, { value: "option1", children: "Option 1" }), _jsx(Option, { value: "option2", children: "Option 2" })] }))); },
    args: {
        label: 'Disabled Select',
        disabled: true,
    },
};
// Full Width
export var FullWidth = {
    render: function (args) { return (_jsxs(Select, __assign({}, args, { children: [_jsx(Option, { value: "", children: "Select an option" }), _jsx(Option, { value: "option1", children: "Option 1" }), _jsx(Option, { value: "option2", children: "Option 2" })] }))); },
    args: {
        label: 'Full Width Select',
        fullWidth: true,
    },
};
// Many Options
export var ManyOptions = {
    render: function (args) { return (_jsxs(Select, __assign({}, args, { children: [_jsx(Option, { value: "", children: "Choose a country" }), _jsx(Option, { value: "us", children: "United States" }), _jsx(Option, { value: "ca", children: "Canada" }), _jsx(Option, { value: "uk", children: "United Kingdom" }), _jsx(Option, { value: "de", children: "Germany" }), _jsx(Option, { value: "fr", children: "France" }), _jsx(Option, { value: "jp", children: "Japan" }), _jsx(Option, { value: "au", children: "Australia" })] }))); },
    args: {
        label: 'Country',
    },
};
//# sourceMappingURL=Select.stories.js.map