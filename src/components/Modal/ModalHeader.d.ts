import React from 'react';
interface ModalHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  closeButtonLabel?: string;
}
export declare const ModalHeader: React.FC<ModalHeaderProps>;
export {};
