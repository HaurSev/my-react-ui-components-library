import { useState, useRef } from 'react';
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../Modal/ModalHeader';
import { ModalActions } from '../Modal/ModalActions';
import { ModalContent } from '../Modal/ModalContent';
import { Button } from '../Button/Button';
import { Textfield } from '../Textfield/Textfield';
const Modals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>

      <Modal
        open={isOpen}
        onClose={handleClose}
        closeOnBackdropClick={true}
        closeOnEscape={true}
        ariaLabelledby="modal-title"
        ariaDescribedby="modal-description"
      >
        <ModalHeader onClose={handleClose}>Create Account</ModalHeader>

        <ModalContent>
          <div id="modal-description">
            <p>Please fill in the form below:</p>
            <Textfield label="First Name" ref={firstNameRef} autoFocus />
            <Textfield label="Last Name" />
            <Textfield label="Email" type="email" />
          </div>
        </ModalContent>

        <ModalActions>
          <Button variant="text" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Create Account
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
};
export { Modals };
