import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useRef, useEffect, useCallback } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = "._2ZuB7dbB{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-family:inherit;font-weight:500;justify-content:center;outline:none;text-decoration:none;transition:all .3s ease}._2ZuB7dbB:hover:not(.Tl9fhKB4){transform:translateY(-1px)}._2ZuB7dbB:active:not(.Tl9fhKB4){transform:translateY(0)}._2ZuB7dbB.Tl9fhKB4{cursor:not-allowed;opacity:.6}._2ZuB7dbB._36oJTKkF{width:100%}._2ZuB7dbB.l39ohdZP{font-size:14px;padding:8px 16px}._2ZuB7dbB.KTxdkdUP{font-size:16px;padding:12px 24px}._2ZuB7dbB._6bsb72bh{font-size:18px;padding:16px 32px}._2ZuB7dbB.IDK7tHO-{background:transparent;border:none;color:#1976d2}._2ZuB7dbB.IDK7tHO-:hover:not(.Tl9fhKB4){background-color:rgba(25,118,210,.1)}._2ZuB7dbB.IDK7tHO-:active:not(.Tl9fhKB4){background-color:rgba(25,118,210,.2)}._2ZuB7dbB.lfmGL7zJ{border:2px solid transparent}._2ZuB7dbB.lfmGL7zJ:hover:not(.Tl9fhKB4){box-shadow:0 4px 8px rgba(0,0,0,.2)}._2ZuB7dbB.jlrKyVpc{background:transparent;border:2px solid}._2ZuB7dbB.s1sM6UMp.IDK7tHO-{color:#1976d2}._2ZuB7dbB.s1sM6UMp.IDK7tHO-:hover:not(.Tl9fhKB4){background-color:rgba(25,118,210,.1)}._2ZuB7dbB.s1sM6UMp.lfmGL7zJ{background-color:#1976d2;color:#fff}._2ZuB7dbB.s1sM6UMp.lfmGL7zJ:hover:not(.Tl9fhKB4){background-color:#1565c0}._2ZuB7dbB.s1sM6UMp.jlrKyVpc{border-color:#1976d2;color:#1976d2}._2ZuB7dbB.s1sM6UMp.jlrKyVpc:hover:not(.Tl9fhKB4){background-color:rgba(25,118,210,.1)}._2ZuB7dbB.R0waJ1E5.IDK7tHO-{color:#6c757d}._2ZuB7dbB.R0waJ1E5.IDK7tHO-:hover:not(.Tl9fhKB4){background-color:hsla(208,7%,46%,.1)}._2ZuB7dbB.R0waJ1E5.lfmGL7zJ{background-color:#6c757d;color:#fff}._2ZuB7dbB.R0waJ1E5.lfmGL7zJ:hover:not(.Tl9fhKB4){background-color:#5a6268}._2ZuB7dbB.R0waJ1E5.jlrKyVpc{border-color:#6c757d;color:#6c757d}._2ZuB7dbB.R0waJ1E5.jlrKyVpc:hover:not(.Tl9fhKB4){background-color:hsla(208,7%,46%,.1)}._2ZuB7dbB.w6qB6lCD.IDK7tHO-{color:#28a745}._2ZuB7dbB.w6qB6lCD.IDK7tHO-:hover:not(.Tl9fhKB4){background-color:rgba(40,167,69,.1)}._2ZuB7dbB.w6qB6lCD.lfmGL7zJ{background-color:#28a745;color:#fff}._2ZuB7dbB.w6qB6lCD.lfmGL7zJ:hover:not(.Tl9fhKB4){background-color:#218838}._2ZuB7dbB.w6qB6lCD.jlrKyVpc{border-color:#28a745;color:#28a745}._2ZuB7dbB.w6qB6lCD.jlrKyVpc:hover:not(.Tl9fhKB4){background-color:rgba(40,167,69,.1)}._2ZuB7dbB.piEdSEWs.IDK7tHO-{color:#dc3545}._2ZuB7dbB.piEdSEWs.IDK7tHO-:hover:not(.Tl9fhKB4){background-color:rgba(220,53,69,.1)}._2ZuB7dbB.piEdSEWs.lfmGL7zJ{background-color:#dc3545;color:#fff}._2ZuB7dbB.piEdSEWs.lfmGL7zJ:hover:not(.Tl9fhKB4){background-color:#c82333}._2ZuB7dbB.piEdSEWs.jlrKyVpc{border-color:#dc3545;color:#dc3545}._2ZuB7dbB.piEdSEWs.jlrKyVpc:hover:not(.Tl9fhKB4){background-color:rgba(220,53,69,.1)}._2ZuB7dbB.Tl9fhKB4.IDK7tHO-{color:#999}._2ZuB7dbB.Tl9fhKB4.lfmGL7zJ{background-color:#ccc;color:#666}._2ZuB7dbB.Tl9fhKB4.jlrKyVpc{border-color:#ccc;color:#999}";
var styles$5 = {"button":"_2ZuB7dbB","disabled":"Tl9fhKB4","fullWidth":"_36oJTKkF","small":"l39ohdZP","medium":"KTxdkdUP","large":"_6bsb72bh","text":"IDK7tHO-","contained":"lfmGL7zJ","outlined":"jlrKyVpc","primary":"s1sM6UMp","secondary":"R0waJ1E5","success":"w6qB6lCD","error":"piEdSEWs"};
styleInject(css_248z$5);

var Button = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'contained' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, _f = _a.className, className = _f === void 0 ? '' : _f, disabled = _a.disabled, _g = _a.type, type = _g === void 0 ? 'button' : _g, rest = __rest(_a, ["children", "variant", "size", "color", "fullWidth", "className", "disabled", "type"]);
    var buttonClasses = [
        styles$5.button,
        styles$5[variant],
        styles$5[size],
        styles$5[color],
        fullWidth && styles$5.fullWidth,
        disabled && styles$5.disabled,
        className
    ].filter(Boolean).join(' ');
    return (jsx("button", __assign({ ref: ref, type: type, className: buttonClasses, disabled: disabled }, rest, { children: children })));
});
Button.displayName = 'Button';

var css_248z$4 = ".-lVibCx3{display:inline-flex;flex-direction:column;margin-bottom:16px}.-lVibCx3.e2n7fgBe{width:100%}.-lVibCx3.r3-g1ArH{opacity:.7}.-lVibCx3.btXiOMXu{color:#d32f2f}.lCn7VPO0{color:#333;cursor:pointer;display:block;font-size:14px;font-weight:500;margin-bottom:8px}.bLm86Jkj,.lCn7VPO0.qtKYHEBn{color:#d32f2f}.bLm86Jkj{margin-left:2px}.OlAg6RpF{background-color:#fff;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-family:inherit;font-size:16px;outline:none;padding:12px 16px;transition:all .3s ease;width:100%}.OlAg6RpF:hover{border-color:#999}.OlAg6RpF:focus{border-color:#1976d2;box-shadow:0 0 0 3px rgba(25,118,210,.2)}.OlAg6RpF:disabled{background-color:#f5f5f5;border-color:#ddd;color:#999;cursor:not-allowed}.OlAg6RpF:disabled:hover{border-color:#ddd}.OlAg6RpF.ArMNiVag{background-color:#fff;border:1px solid #ccc}.OlAg6RpF.ArMNiVag:hover{border-color:#999}.OlAg6RpF.pa-jhlTn{background-color:#f5f5f5;border:none;border-bottom:1px solid #ccc;border-radius:4px 4px 0 0}.OlAg6RpF.pa-jhlTn:hover{background-color:#eee;border-bottom-color:#999}.OlAg6RpF.pa-jhlTn:focus{background-color:#e3f2fd;border-bottom-color:#1976d2;border-bottom-width:2px}.OlAg6RpF._3LKtF0CU{background-color:transparent;border:none;border-bottom:1px solid #ccc;border-radius:0;padding-left:0;padding-right:0}.OlAg6RpF._3LKtF0CU:hover{border-bottom-color:#999}.OlAg6RpF._3LKtF0CU:focus{border-bottom-color:#1976d2;border-bottom-width:2px}.OlAg6RpF.CpFC22mW{border-color:#d32f2f}.OlAg6RpF.CpFC22mW:hover{border-color:#c62828}.OlAg6RpF.CpFC22mW:focus{border-color:#d32f2f;box-shadow:0 0 0 3px rgba(211,47,47,.2)}.-lVibCx3.btXiOMXu .OlAg6RpF.pa-jhlTn{background-color:#ffebee;border-bottom-color:#d32f2f}.-lVibCx3.btXiOMXu .OlAg6RpF._3LKtF0CU{border-bottom-color:#d32f2f}._3VTOKjQO{color:#666;font-size:12px;margin-top:4px;min-height:20px}._3VTOKjQO.yvo--2s-{color:#d32f2f}.-lVibCx3.r3-g1ArH .OlAg6RpF{background-color:#f5f5f5;color:#999}";
var styles$4 = {"textfieldWrapper":"-lVibCx3","fullWidth":"e2n7fgBe","disabled":"r3-g1ArH","error":"btXiOMXu","label":"lCn7VPO0","labelError":"qtKYHEBn","required":"bLm86Jkj","input":"OlAg6RpF","outlined":"ArMNiVag","filled":"pa-jhlTn","standard":"_3LKtF0CU","inputError":"CpFC22mW","helperText":"_3VTOKjQO","helperTextError":"yvo--2s-"};
styleInject(css_248z$4);

var Textfield = React.forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, helperText = _a.helperText, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'outlined' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, id = _a.id, required = _a.required, disabled = _a.disabled, rest = __rest(_a, ["label", "error", "helperText", "fullWidth", "variant", "className", "id", "required", "disabled"]);
    var generatedId = React.useId();
    var inputId = id || generatedId;
    var wrapperClasses = [
        styles$4.textfieldWrapper,
        fullWidth && styles$4.fullWidth,
        disabled && styles$4.disabled,
        error && styles$4.error,
        className
    ].filter(Boolean).join(' ');
    var labelClasses = [
        styles$4.label,
        error && styles$4.labelError
    ].filter(Boolean).join(' ');
    var inputClasses = [
        styles$4.input,
        styles$4[variant],
        error && styles$4.inputError
    ].filter(Boolean).join(' ');
    var helperTextClasses = [
        styles$4.helperText,
        error && styles$4.helperTextError
    ].filter(Boolean).join(' ');
    return (jsxs("div", { className: wrapperClasses, children: [label && (jsxs("label", { htmlFor: inputId, className: labelClasses, children: [label, required && jsx("span", { className: styles$4.required, children: "*" })] })), jsx("input", __assign({ ref: ref, id: inputId, className: inputClasses, disabled: disabled, required: required, "aria-invalid": !!error, "aria-describedby": error ? "".concat(inputId, "-error") : undefined }, rest)), (error || helperText) && (jsx("div", { id: "".concat(inputId, "-error"), className: helperTextClasses, children: error || helperText }))] }));
});
Textfield.displayName = 'Textfield';

var css_248z$3 = ".KFh3zyhf{display:inline-flex;flex-direction:column;margin-bottom:16px;position:relative}.KFh3zyhf.l-JJV-T5{width:100%}.KFh3zyhf._8YgjSXqW{cursor:not-allowed;opacity:.6}.KFh3zyhf.sw9MUsUj{color:#d32f2f}.KFh3zyhf.PADOKK0x .cjdcruKC{border-color:#1976d2;box-shadow:0 0 0 3px rgba(25,118,210,.2)}.Lmgos2Z2{color:#333;cursor:pointer;display:block;font-size:14px;font-weight:500;margin-bottom:8px}.Lmgos2Z2.Zvf4bGkR,.PvDVJRXr{color:#d32f2f}.PvDVJRXr{margin-left:2px}.cjdcruKC{align-items:center;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;font-size:16px;justify-content:space-between;min-height:48px;outline:none;padding:12px 16px;transition:all .3s ease}.cjdcruKC:hover:not(._8YgjSXqW){border-color:#999}.cjdcruKC:focus{border-color:#1976d2}.cjdcruKC._3wfsPvXN{border-color:#d32f2f}.cjdcruKC._3wfsPvXN:hover:not(._8YgjSXqW){border-color:#c62828}.KFh3zyhf._8YgjSXqW .cjdcruKC{background-color:#f5f5f5;border-color:#ddd;color:#999;cursor:not-allowed}.zKc6M8CF{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.w35wW41C{color:#666;margin-left:8px;transition:transform .3s ease}.KFh3zyhf.PADOKK0x .w35wW41C{transform:rotate(180deg)}.glgl4Fdj{background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,.15);left:0;margin-top:4px;max-height:250px;overflow-y:auto;position:absolute;right:0;top:100%;z-index:1000}.mKHJhTE3{padding:8px 0}.Hvo8nqa1{cursor:pointer;font-size:16px;padding:12px 16px;transition:background-color .2s ease}.Hvo8nqa1:hover{background-color:#f5f5f5}.Hvo8nqa1.egAHPvgP,.egAHPvgP{background-color:#e3f2fd;color:#1976d2;font-weight:500}.Hvo8nqa1:active{background-color:#bbdefb}.RJnFjl-K{color:#666;font-size:12px;margin-top:4px;min-height:20px}.RJnFjl-K.S-m-eFy4{color:#d32f2f}.glgl4Fdj::-webkit-scrollbar{width:8px}.glgl4Fdj::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.glgl4Fdj::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.glgl4Fdj::-webkit-scrollbar-thumb:hover{background:#a8a8a8}";
var styles$3 = {"selectWrapper":"KFh3zyhf","fullWidth":"l-JJV-T5","disabled":"_8YgjSXqW","error":"sw9MUsUj","open":"PADOKK0x","select":"cjdcruKC","label":"Lmgos2Z2","labelError":"Zvf4bGkR","required":"PvDVJRXr","selectError":"_3wfsPvXN","selectedValue":"zKc6M8CF","arrow":"w35wW41C","dropdown":"glgl4Fdj","optionsList":"mKHJhTE3","option":"Hvo8nqa1","optionSelected":"egAHPvgP","helperText":"RJnFjl-K","helperTextError":"S-m-eFy4"};
styleInject(css_248z$3);

var Option = function (_a) {
    var children = _a.children, onClick = _a.onClick, isSelected = _a.isSelected, _b = _a.className, className = _b === void 0 ? '' : _b, rest = __rest(_a, ["children", "onClick", "isSelected", "className"]);
    var optionClasses = [
        styles$3.option,
        isSelected && styles$3.optionSelected,
        className
    ].filter(Boolean).join(' ');
    return (jsx("option", __assign({ className: optionClasses, onClick: onClick, role: "option", "aria-selected": isSelected }, rest, { children: children })));
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
        styles$3.selectWrapper,
        fullWidth && styles$3.fullWidth,
        disabled && styles$3.disabled,
        error && styles$3.error,
        isOpen && styles$3.open,
        className
    ].filter(Boolean).join(' ');
    var labelClasses = [
        styles$3.label,
        error && styles$3.labelError
    ].filter(Boolean).join(' ');
    var selectClasses = [
        styles$3.select,
        error && styles$3.selectError
    ].filter(Boolean).join(' ');
    var helperTextClasses = [
        styles$3.helperText,
        error && styles$3.helperTextError
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
    return (jsxs("div", { ref: selectRef, className: wrapperClasses, children: [label && (jsxs("label", { htmlFor: selectId, className: labelClasses, children: [label, required && jsx("span", { className: styles$3.required, children: "*" })] })), jsxs("div", { className: selectClasses, onClick: handleToggle, role: "combobox", "aria-expanded": isOpen, "aria-haspopup": "listbox", "aria-disabled": disabled, children: [jsx("div", { className: styles$3.selectedValue, children: selectedLabel }), jsx("span", { className: styles$3.arrow, children: "\u25BC" })] }), isOpen && (jsx("div", { className: styles$3.dropdown, role: "listbox", "aria-labelledby": selectId, children: jsx("div", { className: styles$3.optionsList, children: React.Children.map(children, function (child) {
                        if (React.isValidElement(child) && child.type === Option) {
                            var optionValue_1 = child.props.value;
                            return React.cloneElement(child, {
                                onClick: function () { return handleOptionClick(optionValue_1); },
                                isSelected: optionValue_1 === internalValue,
                                className: [
                                    child.props.className,
                                    styles$3.option,
                                    optionValue_1 === internalValue && styles$3.optionSelected
                                ].filter(Boolean).join(' ')
                            });
                        }
                        return child;
                    }) }) })), (error || helperText) && (jsx("div", { className: helperTextClasses, children: error || helperText }))] }));
});
Select.displayName = 'Select';

var css_248z$2 = ".V7D-eTs8{display:inline-flex;flex-direction:column;margin-bottom:16px}.V7D-eTs8.x7-egGnm{cursor:not-allowed;opacity:.6}.V7D-eTs8.E-bmDcj-{color:#d32f2f}.pY7If2Em{align-items:center;cursor:pointer;display:flex}.V7D-eTs8.x7-egGnm .pY7If2Em{cursor:not-allowed}._2kt-hMrC{cursor:pointer;height:0;opacity:0;position:absolute;width:0}.ES9N8H-i{align-items:center;background-color:#fff;border:2px solid #ccc;border-radius:4px;display:flex;flex-shrink:0;height:20px;justify-content:center;position:relative;transition:all .3s ease;width:20px}.pY7If2Em:hover .ES9N8H-i:not(.x7-egGnm){background-color:#f5f5f5;border-color:#999}._2kt-hMrC:focus~.ES9N8H-i{border-color:#1976d2;box-shadow:0 0 0 3px rgba(25,118,210,.2)}._2kt-hMrC:checked~.ES9N8H-i{background-color:#1976d2;border-color:#1976d2}._2kt-hMrC:checked:focus~.ES9N8H-i{box-shadow:0 0 0 3px rgba(25,118,210,.2)}._2kt-hMrC[data-indeterminate=true]~.ES9N8H-i{background-color:#1976d2;border-color:#1976d2}.CzthJhrs{color:#fff;font-size:14px;font-weight:700;line-height:1}.b-rvrUd3{background-color:#fff;border-radius:1px;height:2px;width:10px}.cwRtIXKO{color:#333;cursor:pointer;font-size:16px;margin-left:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cwRtIXKO.p2LaR2ck{color:#d32f2f}.V7D-eTs8.x7-egGnm .cwRtIXKO{color:#999;cursor:not-allowed}.V7D-eTs8.E-bmDcj- .ES9N8H-i{border-color:#d32f2f}.V7D-eTs8.E-bmDcj- ._2kt-hMrC:checked~.ES9N8H-i,.V7D-eTs8.E-bmDcj- ._2kt-hMrC[data-indeterminate=true]~.ES9N8H-i{background-color:#d32f2f;border-color:#d32f2f}.V7D-eTs8.E-bmDcj- ._2kt-hMrC:focus~.ES9N8H-i{border-color:#d32f2f;box-shadow:0 0 0 3px rgba(211,47,47,.2)}._-2pe1o8V{color:#666;font-size:12px;margin-left:32px;margin-top:4px}._-2pe1o8V.sjNz27hV{color:#d32f2f}.V7D-eTs8.E-bmDcj- .pY7If2Em:hover .ES9N8H-i{background-color:#ffebee;border-color:#c62828}.V7D-eTs8.E-bmDcj- ._2kt-hMrC:checked~.ES9N8H-i:hover,.V7D-eTs8.E-bmDcj- ._2kt-hMrC[data-indeterminate=true]~.ES9N8H-i:hover{background-color:#c62828;border-color:#c62828}.ES9N8H-i{transition:all .2s cubic-bezier(.4,0,.2,1)}.CzthJhrs{transition:transform .2s ease}._2kt-hMrC:checked~.ES9N8H-i .CzthJhrs{transform:scale(1.2)}.V7D-eTs8.q3hYMmTG .ES9N8H-i{height:16px;width:16px}.V7D-eTs8.q3hYMmTG .CzthJhrs{font-size:12px}.V7D-eTs8.q3hYMmTG .b-rvrUd3{height:2px;width:8px}.V7D-eTs8.q3hYMmTG .cwRtIXKO{font-size:14px}.V7D-eTs8.w6NyWSSX .ES9N8H-i{height:24px;width:24px}.V7D-eTs8.w6NyWSSX .CzthJhrs{font-size:16px}.V7D-eTs8.w6NyWSSX .b-rvrUd3{height:3px;width:12px}.V7D-eTs8.w6NyWSSX .cwRtIXKO{font-size:18px}";
var styles$2 = {"checkboxWrapper":"V7D-eTs8","disabled":"x7-egGnm","error":"E-bmDcj-","checkboxContainer":"pY7If2Em","input":"_2kt-hMrC","checkmark":"ES9N8H-i","checkmarkIcon":"CzthJhrs","indeterminate":"b-rvrUd3","label":"cwRtIXKO","labelError":"p2LaR2ck","helperText":"_-2pe1o8V","helperTextError":"sjNz27hV","small":"q3hYMmTG","large":"w6NyWSSX"};
styleInject(css_248z$2);

var Checkbox = React.forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, helperText = _a.helperText, _b = _a.indeterminate, indeterminate = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, id = _a.id, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, rest = __rest(_a, ["label", "error", "helperText", "indeterminate", "className", "id", "checked", "disabled", "onChange"]);
    var generatedId = React.useId();
    var checkboxId = id || generatedId;
    var wrapperClasses = [
        styles$2.checkboxWrapper,
        disabled && styles$2.disabled,
        error && styles$2.error,
        className
    ].filter(Boolean).join(' ');
    var labelClasses = [
        styles$2.label,
        error && styles$2.labelError
    ].filter(Boolean).join(' ');
    var helperTextClasses = [
        styles$2.helperText,
        error && styles$2.helperTextError
    ].filter(Boolean).join(' ');
    var handleChange = function (event) {
        if (onChange) {
            onChange(event.target.checked);
        }
    };
    return (jsxs("div", { className: wrapperClasses, children: [jsxs("div", { className: styles$2.checkboxContainer, children: [jsx("input", __assign({ ref: ref, id: checkboxId, type: "checkbox", className: styles$2.input, checked: checked, disabled: disabled, onChange: handleChange, "aria-invalid": !!error, "aria-describedby": error ? "".concat(checkboxId, "-error") : undefined, "data-indeterminate": indeterminate }, rest)), jsxs("span", { className: styles$2.checkmark, children: [indeterminate && !checked && (jsx("span", { className: styles$2.indeterminate })), checked && !indeterminate && (jsx("span", { className: styles$2.checkmarkIcon, children: "\u2713" }))] }), label && (jsx("label", { htmlFor: checkboxId, className: labelClasses, children: label }))] }), (error || helperText) && (jsx("div", { id: "".concat(checkboxId, "-error"), className: helperTextClasses, children: error || helperText }))] }));
});
Checkbox.displayName = 'Checkbox';

var css_248z$1 = ".q7qsQxEN{display:inline-flex;flex-direction:column;margin-bottom:16px}.q7qsQxEN._2aZ0Vy9Y{cursor:not-allowed;opacity:.5}.q7qsQxEN.OSPrU88-{color:#d32f2f}.lhqzQUai{align-items:center;cursor:pointer;display:flex}.q7qsQxEN._2aZ0Vy9Y .lhqzQUai{cursor:not-allowed}._5BPNuUU9{cursor:pointer;height:0;opacity:0;position:absolute;width:0}._7ObdZuKe{background-color:#ccc;border-radius:12px;flex-shrink:0;height:24px;position:relative;width:48px}.-FTeKKol,._7ObdZuKe{transition:all .3s ease}.-FTeKKol{background-color:#fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);height:20px;left:2px;position:absolute;top:2px;width:20px}._5BPNuUU9:checked~._7ObdZuKe{background-color:#1976d2}._5BPNuUU9:checked~._7ObdZuKe .-FTeKKol{background-color:#fff;left:26px}._5BPNuUU9:checked:focus~._7ObdZuKe,._5BPNuUU9:focus~._7ObdZuKe{box-shadow:0 0 0 3px rgba(25,118,210,.2)}.lhqzQUai:hover ._7ObdZuKe:not(._2aZ0Vy9Y){background-color:#b3b3b3}._5BPNuUU9:checked:hover~._7ObdZuKe{background-color:#1565c0}.LrH7VPBN{color:#333;cursor:pointer;font-size:16px;margin-left:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.LrH7VPBN.jdamztOL{color:#d32f2f}.q7qsQxEN._2aZ0Vy9Y .LrH7VPBN{color:#999;cursor:not-allowed}.q7qsQxEN._2aZ0Vy9Y ._7ObdZuKe{background-color:#f5f5f5}.q7qsQxEN._2aZ0Vy9Y ._5BPNuUU9:checked~._7ObdZuKe{background-color:#bbdefb}.q7qsQxEN._2aZ0Vy9Y .-FTeKKol{background-color:#e0e0e0}.q7qsQxEN.OSPrU88- ._7ObdZuKe{background-color:#ffcdd2}.q7qsQxEN.OSPrU88- ._5BPNuUU9:checked~._7ObdZuKe{background-color:#d32f2f}.q7qsQxEN.OSPrU88- ._5BPNuUU9:focus~._7ObdZuKe{box-shadow:0 0 0 3px rgba(211,47,47,.2)}.q7qsQxEN.OSPrU88- .lhqzQUai:hover ._7ObdZuKe{background-color:#ef9a9a}.q7qsQxEN.OSPrU88- ._5BPNuUU9:checked:hover~._7ObdZuKe{background-color:#c62828}.seYKa4zk{color:#666;font-size:12px;margin-left:60px;margin-top:4px}.seYKa4zk.gh3Zdknp{color:#d32f2f}.q7qsQxEN.BI6-m5LT ._7ObdZuKe{height:18px;width:36px}.q7qsQxEN.BI6-m5LT .-FTeKKol{height:14px;left:2px;top:2px;width:14px}.q7qsQxEN.BI6-m5LT ._5BPNuUU9:checked~._7ObdZuKe .-FTeKKol{left:20px}.q7qsQxEN.BI6-m5LT .LrH7VPBN{font-size:14px}.q7qsQxEN.BI6-m5LT .seYKa4zk{margin-left:48px}.q7qsQxEN.Nv-ed1y- ._7ObdZuKe{height:30px;width:60px}.q7qsQxEN.Nv-ed1y- .-FTeKKol{height:26px;left:2px;top:2px;width:26px}.q7qsQxEN.Nv-ed1y- ._5BPNuUU9:checked~._7ObdZuKe .-FTeKKol{left:32px}.q7qsQxEN.Nv-ed1y- .LrH7VPBN{font-size:18px}.q7qsQxEN.Nv-ed1y- .seYKa4zk{margin-left:72px}.-FTeKKol,._7ObdZuKe{transition:all .3s cubic-bezier(.4,0,.2,1)}.-FTeKKol:active{transform:scale(1.1)}.q7qsQxEN._2aZ0Vy9Y .-FTeKKol:active{transform:none}";
var styles$1 = {"switchWrapper":"q7qsQxEN","disabled":"_2aZ0Vy9Y","error":"OSPrU88-","switchContainer":"lhqzQUai","input":"_5BPNuUU9","track":"_7ObdZuKe","thumb":"-FTeKKol","label":"LrH7VPBN","labelError":"jdamztOL","helperText":"seYKa4zk","helperTextError":"gh3Zdknp","small":"BI6-m5LT","large":"Nv-ed1y-"};
styleInject(css_248z$1);

var Switch = React.forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, helperText = _a.helperText, _b = _a.className, className = _b === void 0 ? '' : _b, id = _a.id, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange, rest = __rest(_a, ["label", "error", "helperText", "className", "id", "checked", "disabled", "onChange"]);
    var generatedId = React.useId();
    var switchId = id || generatedId;
    var wrapperClasses = [
        styles$1.switchWrapper,
        disabled && styles$1.disabled,
        error && styles$1.error,
        className
    ].filter(Boolean).join(' ');
    var labelClasses = [
        styles$1.label,
        error && styles$1.labelError
    ].filter(Boolean).join(' ');
    var helperTextClasses = [
        styles$1.helperText,
        error && styles$1.helperTextError
    ].filter(Boolean).join(' ');
    var handleChange = function (event) {
        if (onChange) {
            onChange(event.target.checked);
        }
    };
    return (jsxs("div", { className: wrapperClasses, children: [jsxs("div", { className: styles$1.switchContainer, children: [jsx("input", __assign({ ref: ref, id: switchId, type: "checkbox", className: styles$1.input, checked: checked, disabled: disabled, onChange: handleChange, "aria-invalid": !!error, "aria-describedby": error ? "".concat(switchId, "-error") : undefined }, rest)), jsx("span", { className: styles$1.track, children: jsx("span", { className: styles$1.thumb }) }), label && (jsx("label", { htmlFor: switchId, className: labelClasses, children: label }))] }), (error || helperText) && (jsx("div", { id: "".concat(switchId, "-error"), className: helperTextClasses, children: error || helperText }))] }));
});
Switch.displayName = 'Switch';

var css_248z = ".GVUh4NJo{align-items:center;animation:_8-yx3SRl .3s ease;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1300}.aD7aPniB{animation:Fwl038NU .3s ease;background-color:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.2);max-height:90vh;max-width:90vw;overflow:auto;position:relative}@keyframes _8-yx3SRl{0%{opacity:0}to{opacity:1}}@keyframes Fwl038NU{0%{opacity:0;transform:scale(.9) translateY(-20px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes TeZdDBwa{0%{opacity:1}to{opacity:0}}@keyframes nkVtjVHl{0%{opacity:1;transform:scale(1) translateY(0)}to{opacity:0;transform:scale(.9) translateY(-20px)}}.GVUh4NJo.VRDu1ry8{animation:TeZdDBwa .3s ease}.GVUh4NJo.VRDu1ry8 .aD7aPniB{animation:nkVtjVHl .3s ease}@media (max-width:600px){.aD7aPniB{margin:16px;max-height:calc(100vh - 32px);max-width:calc(100vw - 32px)}}.aD7aPniB::-webkit-scrollbar{width:8px}.aD7aPniB::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.aD7aPniB::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}.aD7aPniB::-webkit-scrollbar-thumb:hover{background:#a8a8a8}._7yI7-AiL{align-items:center;border-bottom:1px solid #e0e0e0;display:flex;justify-content:space-between;padding:24px 24px 16px}._0yaVy4uA{color:#333;font-size:20px;font-weight:500;margin:0}._3LpSfpxd{background:none;border:none;border-radius:4px;color:#666;cursor:pointer;font-size:24px;margin:-4px;padding:4px;transition:background-color .2s ease}._3LpSfpxd:hover{background-color:#f5f5f5;color:#333}._3LpSfpxd:active{background-color:#e0e0e0}.QNpBmfQP{color:#333;line-height:1.5;padding:24px}.HPIAhcH3{border-top:1px solid #e0e0e0;display:flex;gap:12px;justify-content:flex-end;padding:16px 24px 24px}@media (max-width:600px){._7yI7-AiL{padding:16px 16px 12px}._0yaVy4uA{font-size:18px}.QNpBmfQP{padding:16px}.HPIAhcH3{flex-direction:column;gap:8px;padding:12px 16px 16px}.HPIAhcH3 button{width:100%}}";
var styles = {"backdrop":"GVUh4NJo","fadeIn":"_8-yx3SRl","modal":"aD7aPniB","scaleIn":"Fwl038NU","closing":"VRDu1ry8","fadeOut":"TeZdDBwa","scaleOut":"nkVtjVHl","modalHeader":"_7yI7-AiL","modalTitle":"_0yaVy4uA","closeButton":"_3LpSfpxd","modalContent":"QNpBmfQP","modalActions":"HPIAhcH3"};
styleInject(css_248z);

var Modal = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.backdropClassName, backdropClassName = _c === void 0 ? '' : _c, _d = _a.closeOnBackdropClick, closeOnBackdropClick = _d === void 0 ? true : _d, _e = _a.closeOnEscape, closeOnEscape = _e === void 0 ? true : _e, ariaLabelledby = _a.ariaLabelledby, ariaDescribedby = _a.ariaDescribedby;
    var modalRef = useRef(null);
    var previousActiveElement = useRef(null);
    // Функция для получения всех фокусируемых элементов внутри модалки
    var getFocusableElements = useCallback(function () {
        if (!modalRef.current)
            return [];
        return modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    }, []);
    // Функция для trap focus
    var trapFocus = useCallback(function (event) {
        if (!modalRef.current)
            return;
        var focusableElements = getFocusableElements();
        if (focusableElements.length === 0)
            return;
        var firstElement = focusableElements[0];
        var lastElement = focusableElements[focusableElements.length - 1];
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            }
            else {
                // Tab
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }, [getFocusableElements]);
    // Функция для сохранения предыдущего активного элемента
    var savePreviousActiveElement = useCallback(function () {
        previousActiveElement.current = document.activeElement;
    }, []);
    // Функция для восстановления фокуса
    var restoreFocus = useCallback(function () {
        if (previousActiveElement.current) {
            previousActiveElement.current.focus();
        }
    }, []);
    // Функция для установки фокуса на первый элемент модалки
    var focusFirstElement = useCallback(function () {
        var _a, _b;
        var focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
        else {
            // Если нет фокусируемых элементов, фокусируем саму модалку
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute('tabindex', '-1');
            (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [getFocusableElements]);
    var handleEscape = useCallback(function (event) {
        if (event.key === 'Escape' && closeOnEscape) {
            onClose();
        }
    }, [closeOnEscape, onClose]);
    var handleBackdropClick = function (event) {
        if (event.target === event.currentTarget && closeOnBackdropClick) {
            onClose();
        }
    };
    useEffect(function () {
        if (!open)
            return;
        // Сохраняем текущий активный элемент
        savePreviousActiveElement();
        // Блокировка скролла фона
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '0px';
        // Фокусируем первый элемент модалки
        setTimeout(function () {
            focusFirstElement();
        }, 100);
        // Добавляем обработчики
        document.addEventListener('keydown', trapFocus);
        document.addEventListener('keydown', handleEscape);
        return function () {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
            document.removeEventListener('keydown', trapFocus);
            document.removeEventListener('keydown', handleEscape);
            // Восстанавливаем фокус
            restoreFocus();
        };
    }, [open, trapFocus, handleEscape, focusFirstElement, savePreviousActiveElement, restoreFocus]);
    if (!open)
        return null;
    return (jsx("div", { className: "".concat(styles.backdrop, " ").concat(backdropClassName), onClick: handleBackdropClick, role: "dialog", "aria-modal": "true", "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, children: jsx("div", { ref: modalRef, className: "".concat(styles.modal, " ").concat(className), children: children }) }));
};
Modal.displayName = 'Modal';

var ModalHeader = function (_a) {
    var children = _a.children, onClose = _a.onClose, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.closeButtonLabel, closeButtonLabel = _c === void 0 ? 'Close modal' : _c;
    return (jsxs("div", { className: "".concat(styles.modalHeader, " ").concat(className), children: [jsx("div", { className: styles.modalTitle, id: "modal-title", children: children }), onClose && (jsx("button", { className: styles.closeButton, onClick: onClose, "aria-label": closeButtonLabel, autoFocus: false, children: "\u00D7" }))] }));
};
ModalHeader.displayName = 'ModalHeader';

var ModalContent = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (jsx("div", { className: "".concat(styles.modalContent, " ").concat(className), children: children }));
};
ModalContent.displayName = 'ModalContent';

var ModalActions = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (jsx("div", { className: "".concat(styles.modalActions, " ").concat(className), children: children }));
};
ModalActions.displayName = 'ModalActions';

export { Button, Checkbox, Modal, ModalActions, ModalContent, ModalHeader, Option, Select, Switch, Textfield, styles$5 as buttonStyles, styles$2 as checkboxStyles, styles as modalStyles, styles$3 as selectStyles, styles$1 as switchStyles, styles$4 as textfieldStyles };
//# sourceMappingURL=index.esm.js.map
