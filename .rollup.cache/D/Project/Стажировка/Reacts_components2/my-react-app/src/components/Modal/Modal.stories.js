import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Modal from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';
import Button from '../Button/Button';
var meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
        },
        closeOnBackdropClick: {
            control: 'boolean',
        },
        closeOnEscape: {
            control: 'boolean',
        },
        onClose: { action: 'closed' },
    },
};
export default meta;
// Basic Modal
export var Default = {
    render: function (args) {
        var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: function () { return setIsOpen(true); }, children: "Open Modal" }), _jsxs(Modal, __assign({}, args, { open: isOpen, onClose: function () { return setIsOpen(false); }, children: [_jsx(ModalHeader, { onClose: function () { return setIsOpen(false); }, children: "Modal Title" }), _jsxs(ModalContent, { children: [_jsx("p", { children: "This is the modal content. You can put any content here." }), _jsx("p", { children: "It supports multiple paragraphs and other React components." })] }), _jsxs(ModalActions, { children: [_jsx(Button, { variant: "text", onClick: function () { return setIsOpen(false); }, children: "Cancel" }), _jsx(Button, { variant: "contained", onClick: function () { return setIsOpen(false); }, children: "Confirm" })] })] }))] }));
    },
    args: {
        closeOnBackdropClick: true,
        closeOnEscape: true,
    },
};
// Modal with Form
export var WithForm = {
    render: function (args) {
        var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: function () { return setIsOpen(true); }, children: "Open Form Modal" }), _jsxs(Modal, __assign({}, args, { open: isOpen, onClose: function () { return setIsOpen(false); }, children: [_jsx(ModalHeader, { onClose: function () { return setIsOpen(false); }, children: "Create Account" }), _jsx(ModalContent, { children: _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsx("p", { children: "Please fill in the form below:" }), _jsx("input", { placeholder: "Email", style: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px' } }), _jsx("input", { placeholder: "Password", type: "password", style: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px' } })] }) }), _jsxs(ModalActions, { children: [_jsx(Button, { variant: "text", onClick: function () { return setIsOpen(false); }, children: "Cancel" }), _jsx(Button, { variant: "contained", onClick: function () { return setIsOpen(false); }, children: "Create Account" })] })] }))] }));
    },
};
// Modal without Close Button
export var WithoutCloseButton = {
    render: function (args) {
        var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: function () { return setIsOpen(true); }, children: "Open Modal (No Close Button)" }), _jsxs(Modal, __assign({}, args, { open: isOpen, onClose: function () { return setIsOpen(false); }, children: [_jsx(ModalHeader, { children: "Modal Without Close Button" }), _jsxs(ModalContent, { children: [_jsx("p", { children: "This modal doesn't have a close button in the header." }), _jsx("p", { children: "You can only close it by clicking outside or pressing Escape." })] }), _jsx(ModalActions, { children: _jsx(Button, { variant: "contained", onClick: function () { return setIsOpen(false); }, children: "Close" }) })] }))] }));
    },
};
// Disable Backdrop Click
export var DisableBackdropClick = {
    render: function (args) {
        var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: function () { return setIsOpen(true); }, children: "Open Modal (No Backdrop Click)" }), _jsxs(Modal, __assign({}, args, { open: isOpen, onClose: function () { return setIsOpen(false); }, children: [_jsx(ModalHeader, { onClose: function () { return setIsOpen(false); }, children: "Important Action" }), _jsxs(ModalContent, { children: [_jsx("p", { children: "You cannot close this modal by clicking outside." }), _jsx("p", { children: "You must use the close button or Escape key." })] }), _jsx(ModalActions, { children: _jsx(Button, { variant: "contained", onClick: function () { return setIsOpen(false); }, children: "I Understand" }) })] }))] }));
    },
    args: {
        closeOnBackdropClick: false,
    },
};
// Long Content Modal
export var LongContent = {
    render: function (args) {
        var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: function () { return setIsOpen(true); }, children: "Open Long Modal" }), _jsxs(Modal, __assign({}, args, { open: isOpen, onClose: function () { return setIsOpen(false); }, children: [_jsx(ModalHeader, { onClose: function () { return setIsOpen(false); }, children: "Terms and Conditions" }), _jsx(ModalContent, { children: _jsxs("div", { style: { maxHeight: '300px', overflowY: 'auto' }, children: [_jsx("h3", { children: "1. Introduction" }), _jsx("p", { children: "These terms and conditions govern your use of this website..." }), _jsx("h3", { children: "2. Intellectual Property Rights" }), _jsx("p", { children: "Other than the content you own, under these Terms..." }), _jsx("h3", { children: "3. Restrictions" }), _jsx("p", { children: "You are specifically restricted from all of the following..." }), _jsx("h3", { children: "4. Your Content" }), _jsx("p", { children: "In these Website Standard Terms and Conditions..." }), _jsx("h3", { children: "5. No warranties" }), _jsx("p", { children: "This Website is provided \"as is,\" with all faults..." }), _jsx("h3", { children: "6. Limitation of liability" }), _jsx("p", { children: "In no event shall the Company, nor any of its officers..." })] }) }), _jsxs(ModalActions, { children: [_jsx(Button, { variant: "text", onClick: function () { return setIsOpen(false); }, children: "Decline" }), _jsx(Button, { variant: "contained", onClick: function () { return setIsOpen(false); }, children: "Accept" })] })] }))] }));
    },
};
//# sourceMappingURL=Modal.stories.js.map