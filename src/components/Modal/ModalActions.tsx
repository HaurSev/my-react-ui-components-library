import React from 'react';
import styles from './Modal.module.css';

interface ModalActionsProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${styles.modalActions} ${className}`}>{children}</div>
  );
};

ModalActions.displayName = 'ModalActions';
