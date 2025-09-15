import { useCallback, useRef } from 'react';
export var useFocusTrap = function () {
    var previousActiveElement = useRef(null);
    var saveActiveElement = useCallback(function () {
        previousActiveElement.current = document.activeElement;
    }, []);
    var restoreFocus = useCallback(function () {
        if (previousActiveElement.current) {
            previousActiveElement.current.focus();
        }
    }, []);
    var getFocusableElements = useCallback(function (container) {
        return container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    }, []);
    var focusFirstElement = useCallback(function (container) {
        var focusableElements = getFocusableElements(container);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
        else {
            container.setAttribute('tabindex', '-1');
            container.focus();
        }
    }, [getFocusableElements]);
    var createFocusTrap = useCallback(function (container) {
        var focusableElements = getFocusableElements(container);
        if (focusableElements.length === 0)
            return;
        var firstElement = focusableElements[0];
        var lastElement = focusableElements[focusableElements.length - 1];
        var handleKeyDown = function (event) {
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
        };
        document.addEventListener('keydown', handleKeyDown);
        return function () {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [getFocusableElements]);
    return {
        saveActiveElement: saveActiveElement,
        restoreFocus: restoreFocus,
        focusFirstElement: focusFirstElement,
        createFocusTrap: createFocusTrap,
        getFocusableElements: getFocusableElements,
    };
};
//# sourceMappingURL=useFocusTrap.js.map