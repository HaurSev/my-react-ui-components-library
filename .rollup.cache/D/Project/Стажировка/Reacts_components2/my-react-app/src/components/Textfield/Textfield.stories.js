import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Textfield from './Textfield';
var meta = {
    title: 'Components/Textfield',
    component: Textfield,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outlined', 'filled', 'standard'],
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'search'],
        },
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
// Basic Textfield
export var Default = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
    },
};
// Variants
export var Variants = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }, children: [_jsx(Textfield, { label: "Outlined", variant: "outlined", placeholder: "Outlined variant" }), _jsx(Textfield, { label: "Filled", variant: "filled", placeholder: "Filled variant" }), _jsx(Textfield, { label: "Standard", variant: "standard", placeholder: "Standard variant" })] })); },
};
// With Error
export var WithError = {
    args: {
        label: 'Email',
        error: 'Invalid email address',
        defaultValue: 'invalid-email',
    },
};
// With Helper Text
export var WithHelperText = {
    args: {
        label: 'Password',
        type: 'password',
        helperText: 'Must be at least 8 characters',
    },
};
// Disabled
export var Disabled = {
    args: {
        label: 'Disabled Field',
        disabled: true,
        defaultValue: 'Cannot edit this',
    },
};
// Types
export var DifferentTypes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }, children: [_jsx(Textfield, { label: "Email", type: "email", placeholder: "user@example.com" }), _jsx(Textfield, { label: "Password", type: "password", placeholder: "Enter password" }), _jsx(Textfield, { label: "Number", type: "number", placeholder: "Enter number" }), _jsx(Textfield, { label: "Search", type: "search", placeholder: "Search..." })] })); },
};
// Full Width
export var FullWidth = {
    args: {
        label: 'Full Width Field',
        fullWidth: true,
        placeholder: 'This field takes full width',
    },
};
//# sourceMappingURL=Textfield.stories.js.map