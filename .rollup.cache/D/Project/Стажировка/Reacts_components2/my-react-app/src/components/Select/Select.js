import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';
var Option = function (_a) {
    var children = _a.children, onClick = _a.onClick, isSelected = _a.isSelected, _b = _a.className, className = _b === void 0 ? '' : _b, rest = __rest(_a, ["children", "onClick", "isSelected", "className"]);
    var optionClasses = [
        styles.option,
        isSelected && styles.optionSelected,
        className
    ].filter(Boolean).join(' ');
    return (_jsx("option", __assign({ className: optionClasses, onClick: onClick, role: "option", "aria-selected": isSelected }, rest, { children: children })));
};
Option.displayName = 'Option';
var Select = React.forwardRef(function (_a, _ref) {
    var label = _a.label, error = _a.error, helperText = _a.helperText, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, id = _a.id, required = _a.required, disabled = _a.disabled, children = _a.children, onChange = _a.onChange, value = _a.value;
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var _e = useState(value || ''), internalValue = _e[0], setInternalValue = _e[1];
    var selectRef = useRef(null);
    var generatedId = React.useId();
    var selectId = id || generatedId;
    var wrapperClasses = [
        styles.selectWrapper,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        error && styles.error,
        isOpen && styles.open,
        className
    ].filter(Boolean).join(' ');
    var labelClasses = [
        styles.label,
        error && styles.labelError
    ].filter(Boolean).join(' ');
    var selectClasses = [
        styles.select,
        error && styles.selectError
    ].filter(Boolean).join(' ');
    var helperTextClasses = [
        styles.helperText,
        error && styles.helperTextError
    ].filter(Boolean).join(' ');
    var handleToggle = function () {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
    var handleOptionClick = function (value) {
        setInternalValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        setIsOpen(false);
    };
    var handleClickOutside = function (event) {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(function () {
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, []);
    useEffect(function () {
        if (value !== undefined) {
            setInternalValue(value);
        }
    }, [value]);
    // Типизированный поиск выбранной опции
    var selectedOption = React.Children.toArray(children).find(function (child) {
        return React.isValidElement(child) &&
            child.type === Option &&
            child.props.value === internalValue;
    });
    var selectedLabel = selectedOption
        ? selectedOption.props.children
        : 'Select an option';
    return (_jsxs("div", { ref: selectRef, className: wrapperClasses, children: [label && (_jsxs("label", { htmlFor: selectId, className: labelClasses, children: [label, required && _jsx("span", { className: styles.required, children: "*" })] })), _jsxs("div", { className: selectClasses, onClick: handleToggle, role: "combobox", "aria-expanded": isOpen, "aria-haspopup": "listbox", "aria-disabled": disabled, children: [_jsx("div", { className: styles.selectedValue, children: selectedLabel }), _jsx("span", { className: styles.arrow, children: "\u25BC" })] }), isOpen && (_jsx("div", { className: styles.dropdown, role: "listbox", "aria-labelledby": selectId, children: _jsx("div", { className: styles.optionsList, children: React.Children.map(children, function (child) {
                        if (React.isValidElement(child) && child.type === Option) {
                            var optionValue_1 = child.props.value;
                            return React.cloneElement(child, {
                                onClick: function () { return handleOptionClick(optionValue_1); },
                                isSelected: optionValue_1 === internalValue,
                                className: [
                                    child.props.className,
                                    styles.option,
                                    optionValue_1 === internalValue && styles.optionSelected
                                ].filter(Boolean).join(' ')
                            });
                        }
                        return child;
                    }) }) })), (error || helperText) && (_jsx("div", { className: helperTextClasses, children: error || helperText }))] }));
});
Select.displayName = 'Select';
export { Select, Option };
//# sourceMappingURL=Select.js.map