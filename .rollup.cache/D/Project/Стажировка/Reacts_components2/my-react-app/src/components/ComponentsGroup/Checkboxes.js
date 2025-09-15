import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
var Checkboxes = function () {
    var _a = useState(false), checked = _a[0], setChecked = _a[1];
    var _b = useState(false), indeterminate = _b[0], setIndeterminate = _b[1];
    var handleIndeterminateChange = function () {
        setIndeterminate(function (prev) { return !prev; });
        setChecked(false); // Сбрасываем checked при переключении indeterminate
    };
    var handleCheckedChange = function (isChecked) {
        setChecked(isChecked);
        if (isChecked) {
            setIndeterminate(false); // Сбрасываем indeterminate при установке checked
        }
    };
    return (_jsxs("div", { style: { padding: '20px' }, children: [_jsx("h3", { children: "Checkbox Examples" }), _jsx(Checkbox, { label: "Basic checkbox", checked: checked, onChange: handleCheckedChange }), _jsx(Checkbox, { label: "Indeterminate checkbox", indeterminate: indeterminate, onChange: handleIndeterminateChange }), _jsx(Checkbox, { label: "Disabled checkbox", disabled: true }), _jsx(Checkbox, { label: "Checked and disabled", checked: true, disabled: true }), _jsx(Checkbox, { label: "With error", error: "This field is required" }), _jsx(Checkbox, { label: "With helper text", helperText: "Additional information" }), _jsxs("div", { style: { marginTop: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '4px' }, children: [_jsx("strong", { children: "Current states:" }), _jsxs("div", { children: ["Checked: ", checked.toString()] }), _jsxs("div", { children: ["Indeterminate: ", indeterminate.toString()] })] })] }));
};
export default Checkboxes;
//# sourceMappingURL=Checkboxes.js.map