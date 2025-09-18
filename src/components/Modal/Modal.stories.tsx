import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Modal
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader onClose={() => setIsOpen(false)}>
            Modal Title
          </ModalHeader>
          <ModalContent>
            <p>This is the modal content. You can put any content here.</p>
            <p>It supports multiple paragraphs and other React components.</p>
          </ModalContent>
          <ModalActions>
            <Button variant="text" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
  args: {
    closeOnBackdropClick: true,
    closeOnEscape: true,
  },
};

// Modal with Form
export const WithForm: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader onClose={() => setIsOpen(false)}>
            Create Account
          </ModalHeader>
          <ModalContent>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <p>Please fill in the form below:</p>
              <input
                placeholder="Email"
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <input
                placeholder="Password"
                type="password"
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
          </ModalContent>
          <ModalActions>
            <Button variant="text" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setIsOpen(false)}>
              Create Account
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};

// Modal without Close Button
export const WithoutCloseButton: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal (No Close Button)
        </Button>
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader>Modal Without Close Button</ModalHeader>
          <ModalContent>
            <p>This modal doesn't have a close button in the header.</p>
            <p>You can only close it by clicking outside or pressing Escape.</p>
          </ModalContent>
          <ModalActions>
            <Button variant="contained" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};

// Disable Backdrop Click
export const DisableBackdropClick: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal (No Backdrop Click)
        </Button>
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader onClose={() => setIsOpen(false)}>
            Important Action
          </ModalHeader>
          <ModalContent>
            <p>You cannot close this modal by clicking outside.</p>
            <p>You must use the close button or Escape key.</p>
          </ModalContent>
          <ModalActions>
            <Button variant="contained" onClick={() => setIsOpen(false)}>
              I Understand
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
  args: {
    closeOnBackdropClick: false,
  },
};

// Long Content Modal
export const LongContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Long Modal</Button>
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader onClose={() => setIsOpen(false)}>
            Terms and Conditions
          </ModalHeader>
          <ModalContent>
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <h3>1. Introduction</h3>
              <p>
                These terms and conditions govern your use of this website...
              </p>

              <h3>2. Intellectual Property Rights</h3>
              <p>Other than the content you own, under these Terms...</p>

              <h3>3. Restrictions</h3>
              <p>
                You are specifically restricted from all of the following...
              </p>

              <h3>4. Your Content</h3>
              <p>In these Website Standard Terms and Conditions...</p>

              <h3>5. No warranties</h3>
              <p>This Website is provided "as is," with all faults...</p>

              <h3>6. Limitation of liability</h3>
              <p>In no event shall the Company, nor any of its officers...</p>
            </div>
          </ModalContent>
          <ModalActions>
            <Button variant="text" onClick={() => setIsOpen(false)}>
              Decline
            </Button>
            <Button variant="contained" onClick={() => setIsOpen(false)}>
              Accept
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};
