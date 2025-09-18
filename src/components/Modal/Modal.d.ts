export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}
declare const Modal: React.FC<ModalProps>;
export { Modal };
