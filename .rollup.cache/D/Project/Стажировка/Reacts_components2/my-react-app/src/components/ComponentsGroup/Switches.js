import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Switch from "../Switch/Switch";
var Switches = function () {
    var _a = useState(false), isEnabled = _a[0], setIsEnabled = _a[1];
    var _b = useState(true), autoSave = _b[0], setAutoSave = _b[1];
    return (_jsxs("div", { style: { padding: '20px' }, children: [_jsx("h3", { children: "Switch Examples" }), _jsx(Switch, { label: "Enable notifications", checked: isEnabled, onChange: setIsEnabled }), _jsx(Switch, { label: "Auto save", checked: autoSave, onChange: setAutoSave }), _jsx(Switch, { label: "Disabled switch", disabled: true }), _jsx(Switch, { label: "Disabled and checked", checked: true, disabled: true }), _jsx(Switch, { label: "With error", error: "This setting is required" }), _jsx(Switch, { label: "With helper text", helperText: "Toggle this setting carefully" }), _jsxs("div", { style: { marginTop: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '4px' }, children: [_jsx("strong", { children: "Current states:" }), _jsxs("div", { children: ["Notifications: ", isEnabled ? 'ON' : 'OFF'] }), _jsxs("div", { children: ["Auto save: ", autoSave ? 'ON' : 'OFF'] })] })] }));
};
export default Switches;
//# sourceMappingURL=Switches.js.map