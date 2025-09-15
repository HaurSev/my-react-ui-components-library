import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Switch from './Switch';
var meta = {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        onChange: { action: 'changed' },
    },
};
export default meta;
// Basic Switch
export var Default = {
    args: {
        label: 'Switch label',
    },
};
// Checked State
export var Checked = {
    args: {
        label: 'Checked switch',
        checked: true,
    },
};
// Disabled States
export var Disabled = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Switch, { label: "Disabled off", disabled: true }), _jsx(Switch, { label: "Disabled on", checked: true, disabled: true })] })); },
};
// With Error
export var WithError = {
    args: {
        label: 'Switch with error',
        error: 'This setting is required',
    },
};
// With Helper Text
export var WithHelperText = {
    args: {
        label: 'Enable notifications',
        helperText: 'Receive important updates',
    },
};
// Without Label
export var WithoutLabel = {
    args: {},
};
// Switch Group
export var SwitchGroup = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Switch, { label: "Wi-Fi", checked: true }), _jsx(Switch, { label: "Bluetooth" }), _jsx(Switch, { label: "Airplane mode" }), _jsx(Switch, { label: "Location services", checked: true })] })); },
};
//# sourceMappingURL=Switch.stories.js.map