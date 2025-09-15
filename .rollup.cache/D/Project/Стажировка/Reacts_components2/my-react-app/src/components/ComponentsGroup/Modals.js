import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import { ModalHeader } from '../Modal/ModalHeader';
import { ModalActions } from '../Modal/ModalActions';
import { ModalContent } from '../Modal/ModalContent';
import Button from '../Button/Button';
import Textfield from '../Textfield/Textfield';
var Modals = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var firstNameRef = useRef(null);
    var handleOpen = function () { return setIsOpen(true); };
    var handleClose = function () { return setIsOpen(false); };
    return (_jsxs("div", { children: [_jsx(Button, { onClick: handleOpen, children: "Open Modal" }), _jsxs(Modal, { open: isOpen, onClose: handleClose, closeOnBackdropClick: true, closeOnEscape: true, ariaLabelledby: "modal-title", ariaDescribedby: "modal-description", children: [_jsx(ModalHeader, { onClose: handleClose, children: "Create Account" }), _jsx(ModalContent, { children: _jsxs("div", { id: "modal-description", children: [_jsx("p", { children: "Please fill in the form below:" }), _jsx(Textfield, { label: "First Name", ref: firstNameRef, autoFocus // Автофокус на первое поле
                                    : true }), _jsx(Textfield, { label: "Last Name" }), _jsx(Textfield, { label: "Email", type: "email" })] }) }), _jsxs(ModalActions, { children: [_jsx(Button, { variant: "text", onClick: handleClose, children: "Cancel" }), _jsx(Button, { variant: "contained", onClick: handleClose, children: "Create Account" })] })] })] }));
};
export default Modals;
//# sourceMappingURL=Modals.js.map