import { useEffect, useRef, useCallback } from 'react';
import styles from './Modal.module.css';

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

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  actions,
  className = '',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  ariaLabelledby,
  ariaDescribedby,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const show = useCallback(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (typeof dlg.showModal === 'function') {
      if (!dlg.open) dlg.showModal();
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dlg.setAttribute('open', '');
    }
  }, []);

  const hide = useCallback(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (dlg.open) dlg.close();
  }, []);

  useEffect(() => {
    if (open) show();
    else hide();
  }, [open, show, hide]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;

    const handleCancel = (e: Event) => {
      if (closeOnEscape) {
        e.preventDefault();
        onClose?.();
      }
    };

    dlg.addEventListener('cancel', handleCancel);
    return () => {
      dlg.removeEventListener('cancel', handleCancel);
    };
  }, [closeOnEscape, onClose]);

  const handleBackdropMouseDown = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!closeOnBackdropClick) return;
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (e.target === dlg) {
      onClose?.();
      return;
    }
    const rect = dlg.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!isInDialog) {
      onClose?.();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!closeOnBackdropClick) return;
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (e.target === dlg) {
      onClose?.();
    }
  };

  if (!open && !dialogRef.current?.open) return null;

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${className}`}
      aria-modal="true"
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      onMouseDown={handleBackdropMouseDown}
      onClick={handleBackdropClick}
    >
      <div className={styles.modalContent}>
        {onClose && (
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            ×
          </button>
        )}
        {children}
      </div>
      {actions && <div className={styles.modalActions}>{actions}</div>}
    </dialog>
  );
};

Modal.displayName = 'Modal';

export { Modal };
