import React from 'react';
import styles from './Modal.module.css';

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${styles.modalContent} ${className}`}>{children}</div>
  );
};

ModalContent.displayName = 'ModalContent';
