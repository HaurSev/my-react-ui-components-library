import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';

describe('Modal Component', () => {
    test('does not render when open is false', () => {
        const { container } = render(
            <Modal open={false} onClose={() => { }}>
                <div>Content</div>
            </Modal>
        );
        expect(container.firstChild).toBeNull();
    });

    test('renders children when open is true', () => {
        render(
            <Modal open onClose={() => { }}>
                <div>Content</div>
            </Modal>
        );
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    test('calls onClose on backdrop click when closeOnBackdropClick is true', () => {
        const handleClose = jest.fn();
        render(
            <Modal open onClose={handleClose} closeOnBackdropClick>
                <div>Content</div>
            </Modal>
        );

        fireEvent.click(screen.getByRole('dialog'));
        expect(handleClose).toHaveBeenCalled();
    });

    test('does not call onClose on content click', () => {
        const handleClose = jest.fn();
        render(
            <Modal open onClose={handleClose}>
                <div>Content</div>
            </Modal>
        );

        fireEvent.click(screen.getByText('Content'));
        expect(handleClose).not.toHaveBeenCalled();
    });

    test('renders header, content and actions subcomponents', () => {
        const handleClose = jest.fn();
        render(
            <Modal open onClose={handleClose} ariaLabelledby="modal-title">
                <ModalHeader onClose={handleClose}>Title</ModalHeader>
                <ModalContent>Body</ModalContent>
                <ModalActions>
                    <button onClick={handleClose}>Close</button>
                </ModalActions>
            </Modal>
        );
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Body')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Close'));
        expect(handleClose).toHaveBeenCalled();
    });
});


