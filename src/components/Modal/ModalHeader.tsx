import React from 'react';
import styles from './Modal.module.css';

interface ModalHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  closeButtonLabel?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  onClose,
  className = '',
  closeButtonLabel = 'Close modal',
}) => {
  return (
    <div className={`${styles.modalHeader} ${className}`}>
      <div className={styles.modalTitle} id="modal-title">
        {children}
      </div>
      {onClose && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={closeButtonLabel}
          autoFocus={false} // Не автофокус, чтобы не ломать flow
        >
          ×
        </button>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';