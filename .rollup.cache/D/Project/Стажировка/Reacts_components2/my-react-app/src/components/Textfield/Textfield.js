import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './Textfield.module.css';
var Textfield = React.forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, helperText = _a.helperText, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'outlined' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, id = _a.id, required = _a.required, disabled = _a.disabled, rest = __rest(_a, ["label", "error", "helperText", "fullWidth", "variant", "className", "id", "required", "disabled"]);
    var generatedId = React.useId();
    var inputId = id || generatedId;
    var wrapperClasses = [
        styles.textfieldWrapper,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        error && styles.error,
        className
    ].filter(Boolean).join(' ');
    var labelClasses = [
        styles.label,
        error && styles.labelError
    ].filter(Boolean).join(' ');
    var inputClasses = [
        styles.input,
        styles[variant],
        error && styles.inputError
    ].filter(Boolean).join(' ');
    var helperTextClasses = [
        styles.helperText,
        error && styles.helperTextError
    ].filter(Boolean).join(' ');
    return (_jsxs("div", { className: wrapperClasses, children: [label && (_jsxs("label", { htmlFor: inputId, className: labelClasses, children: [label, required && _jsx("span", { className: styles.required, children: "*" })] })), _jsx("input", __assign({ ref: ref, id: inputId, className: inputClasses, disabled: disabled, required: required, "aria-invalid": !!error, "aria-describedby": error ? "".concat(inputId, "-error") : undefined }, rest)), (error || helperText) && (_jsx("div", { id: "".concat(inputId, "-error"), className: helperTextClasses, children: error || helperText }))] }));
});
Textfield.displayName = 'Textfield';
export default Textfield;
//# sourceMappingURL=Textfield.js.map