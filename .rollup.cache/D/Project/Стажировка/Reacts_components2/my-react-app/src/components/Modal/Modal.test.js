import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';
describe('Modal Component', function () {
    test('does not render when open is false', function () {
        var container = render(_jsx(Modal, { open: false, onClose: function () { }, children: _jsx("div", { children: "Content" }) })).container;
        expect(container.firstChild).toBeNull();
    });
    test('renders children when open is true', function () {
        render(_jsx(Modal, { open: true, onClose: function () { }, children: _jsx("div", { children: "Content" }) }));
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
    test('calls onClose on backdrop click when closeOnBackdropClick is true', function () {
        var handleClose = jest.fn();
        render(_jsx(Modal, { open: true, onClose: handleClose, closeOnBackdropClick: true, children: _jsx("div", { children: "Content" }) }));
        fireEvent.click(screen.getByRole('dialog'));
        expect(handleClose).toHaveBeenCalled();
    });
    test('does not call onClose on content click', function () {
        var handleClose = jest.fn();
        render(_jsx(Modal, { open: true, onClose: handleClose, children: _jsx("div", { children: "Content" }) }));
        fireEvent.click(screen.getByText('Content'));
        expect(handleClose).not.toHaveBeenCalled();
    });
    test('renders header, content and actions subcomponents', function () {
        var handleClose = jest.fn();
        render(_jsxs(Modal, { open: true, onClose: handleClose, ariaLabelledby: "modal-title", children: [_jsx(ModalHeader, { onClose: handleClose, children: "Title" }), _jsx(ModalContent, { children: "Body" }), _jsx(ModalActions, { children: _jsx("button", { onClick: handleClose, children: "Close" }) })] }));
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Body')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Close'));
        expect(handleClose).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Modal.test.js.map