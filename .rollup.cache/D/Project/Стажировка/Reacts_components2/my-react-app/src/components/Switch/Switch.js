import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './Switch.module.css';
var Switch = React.forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, helperText = _a.helperText, _b = _a.className, className = _b === void 0 ? '' : _b, id = _a.id, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, rest = __rest(_a, ["label", "error", "helperText", "className", "id", "checked", "disabled", "onChange"]);
    var generatedId = React.useId();
    var switchId = id || generatedId;
    var wrapperClasses = [
        styles.switchWrapper,
        disabled && styles.disabled,
        error && styles.error,
        className
    ].filter(Boolean).join(' ');
    var labelClasses = [
        styles.label,
        error && styles.labelError
    ].filter(Boolean).join(' ');
    var helperTextClasses = [
        styles.helperText,
        error && styles.helperTextError
    ].filter(Boolean).join(' ');
    var handleChange = function (event) {
        if (onChange) {
            onChange(event.target.checked);
        }
    };
    return (_jsxs("div", { className: wrapperClasses, children: [_jsxs("div", { className: styles.switchContainer, children: [_jsx("input", __assign({ ref: ref, id: switchId, type: "checkbox", className: styles.input, checked: checked, disabled: disabled, onChange: handleChange, "aria-invalid": !!error, "aria-describedby": error ? "".concat(switchId, "-error") : undefined }, rest)), _jsx("span", { className: styles.track, children: _jsx("span", { className: styles.thumb }) }), label && (_jsx("label", { htmlFor: switchId, className: labelClasses, children: label }))] }), (error || helperText) && (_jsx("div", { id: "".concat(switchId, "-error"), className: helperTextClasses, children: error || helperText }))] }));
});
Switch.displayName = 'Switch';
export default Switch;
//# sourceMappingURL=Switch.js.map