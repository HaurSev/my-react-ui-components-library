import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './Checkbox.module.css';
var Checkbox = React.forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, helperText = _a.helperText, _b = _a.indeterminate, indeterminate = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, id = _a.id, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, rest = __rest(_a, ["label", "error", "helperText", "indeterminate", "className", "id", "checked", "disabled", "onChange"]);
    var generatedId = React.useId();
    var checkboxId = id || generatedId;
    var wrapperClasses = [
        styles.checkboxWrapper,
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
    return (_jsxs("div", { className: wrapperClasses, children: [_jsxs("div", { className: styles.checkboxContainer, children: [_jsx("input", __assign({ ref: ref, id: checkboxId, type: "checkbox", className: styles.input, checked: checked, disabled: disabled, onChange: handleChange, "aria-invalid": !!error, "aria-describedby": error ? "".concat(checkboxId, "-error") : undefined, "data-indeterminate": indeterminate }, rest)), _jsxs("span", { className: styles.checkmark, children: [indeterminate && !checked && (_jsx("span", { className: styles.indeterminate })), checked && !indeterminate && (_jsx("span", { className: styles.checkmarkIcon, children: "\u2713" }))] }), label && (_jsx("label", { htmlFor: checkboxId, className: labelClasses, children: label }))] }), (error || helperText) && (_jsx("div", { id: "".concat(checkboxId, "-error"), className: helperTextClasses, children: error || helperText }))] }));
});
Checkbox.displayName = 'Checkbox';
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map