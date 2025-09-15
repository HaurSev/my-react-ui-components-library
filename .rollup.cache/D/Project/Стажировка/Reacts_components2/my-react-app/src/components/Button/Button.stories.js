import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from './Button';
var meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['text', 'contained', 'outlined'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error'],
        },
        disabled: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        onClick: { action: 'clicked' },
    },
};
export default meta;
// Basic Button
export var Primary = {
    args: {
        children: 'Button',
        variant: 'contained',
        color: 'primary',
    },
};
// All Variants
export var Variants = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' }, children: [_jsx(Button, { variant: "contained", children: "Contained" }), _jsx(Button, { variant: "outlined", children: "Outlined" }), _jsx(Button, { variant: "text", children: "Text" })] })); },
};
// All Colors
export var Colors = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' }, children: [_jsx(Button, { color: "primary", children: "Primary" }), _jsx(Button, { color: "secondary", children: "Secondary" }), _jsx(Button, { color: "success", children: "Success" }), _jsx(Button, { color: "error", children: "Error" })] })); },
};
// Sizes
export var Sizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' }, children: [_jsx(Button, { size: "small", children: "Small" }), _jsx(Button, { size: "medium", children: "Medium" }), _jsx(Button, { size: "large", children: "Large" })] })); },
};
// Disabled States
export var Disabled = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' }, children: [_jsx(Button, { variant: "contained", disabled: true, children: "Contained Disabled" }), _jsx(Button, { variant: "outlined", disabled: true, children: "Outlined Disabled" }), _jsx(Button, { variant: "text", disabled: true, children: "Text Disabled" })] })); },
};
// Full Width
export var FullWidth = {
    args: {
        children: 'Full Width Button',
        fullWidth: true,
        variant: 'contained',
    },
};
// Interactive Example
export var Interactive = {
    args: {
        children: 'Click me',
        variant: 'contained',
        color: 'primary',
    },
};
//# sourceMappingURL=Button.stories.js.map