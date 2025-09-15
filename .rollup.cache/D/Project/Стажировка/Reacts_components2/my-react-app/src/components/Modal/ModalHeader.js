import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Modal.module.css';
export var ModalHeader = function (_a) {
    var children = _a.children, onClose = _a.onClose, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.closeButtonLabel, closeButtonLabel = _c === void 0 ? 'Close modal' : _c;
    return (_jsxs("div", { className: "".concat(styles.modalHeader, " ").concat(className), children: [_jsx("div", { className: styles.modalTitle, id: "modal-title", children: children }), onClose && (_jsx("button", { className: styles.closeButton, onClick: onClose, "aria-label": closeButtonLabel, autoFocus: false, children: "\u00D7" }))] }));
};
ModalHeader.displayName = 'ModalHeader';
//# sourceMappingURL=ModalHeader.js.map