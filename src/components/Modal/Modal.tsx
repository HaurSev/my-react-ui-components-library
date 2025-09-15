import React, { useEffect, useRef, useCallback } from 'react';
import styles from './Modal.module.css';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  backdropClassName?: string;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className = '',
  backdropClassName = '',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  ariaLabelledby,
  ariaDescribedby,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Функция для получения всех фокусируемых элементов внутри модалки
  const getFocusableElements = useCallback(() => {
    if (!modalRef.current) return [];
    
    return modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }, []);

  // Функция для trap focus
  const trapFocus = useCallback((event: KeyboardEvent) => {
    if (!modalRef.current) return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }, [getFocusableElements]);

  // Функция для сохранения предыдущего активного элемента
  const savePreviousActiveElement = useCallback(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;
  }, []);

  // Функция для восстановления фокуса
  const restoreFocus = useCallback(() => {
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, []);

  // Функция для установки фокуса на первый элемент модалки
  const focusFirstElement = useCallback(() => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    } else {
      // Если нет фокусируемых элементов, фокусируем саму модалку
      modalRef.current?.setAttribute('tabindex', '-1');
      modalRef.current?.focus();
    }
  }, [getFocusableElements]);

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && closeOnEscape) {
      onClose();
    }
  }, [closeOnEscape, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  useEffect(() => {
    if (!open) return;

    // Сохраняем текущий активный элемент
    savePreviousActiveElement();

    // Блокировка скролла фона
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '0px';

    // Фокусируем первый элемент модалки
    setTimeout(() => {
      focusFirstElement();
    }, 100);

    // Добавляем обработчики
    document.addEventListener('keydown', trapFocus);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
      
      document.removeEventListener('keydown', trapFocus);
      document.removeEventListener('keydown', handleEscape);
      
      // Восстанавливаем фокус
      restoreFocus();
    };
  }, [open, trapFocus, handleEscape, focusFirstElement, savePreviousActiveElement, restoreFocus]);

  if (!open) return null;

  return (
    <div 
      className={`${styles.backdrop} ${backdropClassName}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
    >
      <div 
        ref={modalRef}
        className={`${styles.modal} ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;