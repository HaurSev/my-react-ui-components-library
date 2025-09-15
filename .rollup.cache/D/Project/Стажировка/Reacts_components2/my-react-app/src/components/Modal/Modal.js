import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useCallback } from 'react';
import styles from './Modal.module.css';
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
    return (_jsx("div", { className: "".concat(styles.backdrop, " ").concat(backdropClassName), onClick: handleBackdropClick, role: "dialog", "aria-modal": "true", "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, children: _jsx("div", { ref: modalRef, className: "".concat(styles.modal, " ").concat(className), children: children }) }));
};
Modal.displayName = 'Modal';
export default Modal;
//# sourceMappingURL=Modal.js.map