import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styles from './Button.module.css';
var Button = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'contained' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, _f = _a.className, className = _f === void 0 ? '' : _f, disabled = _a.disabled, _g = _a.type, type = _g === void 0 ? 'button' : _g, rest = __rest(_a, ["children", "variant", "size", "color", "fullWidth", "className", "disabled", "type"]);
    var buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        styles[color],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className
    ].filter(Boolean).join(' ');
    return (_jsx("button", __assign({ ref: ref, type: type, className: buttonClasses, disabled: disabled }, rest, { children: children })));
});
Button.displayName = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map