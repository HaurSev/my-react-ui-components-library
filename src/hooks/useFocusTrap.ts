import { useCallback, useRef } from 'react';

export const useFocusTrap = () => {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const saveActiveElement = useCallback(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;
  }, []);

  const restoreFocus = useCallback(() => {
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, []);

  const getFocusableElements = useCallback((container: HTMLElement) => {
    return container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
  }, []);

  const focusFirstElement = useCallback(
    (container: HTMLElement) => {
      const focusableElements = getFocusableElements(container);
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      } else {
        container.setAttribute('tabindex', '-1');
        container.focus();
      }
    },
    [getFocusableElements],
  );

  const createFocusTrap = useCallback(
    (container: HTMLElement) => {
      const focusableElements = getFocusableElements(container);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleKeyDown = (event: KeyboardEvent) => {
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
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    },
    [getFocusableElements],
  );

  return {
    saveActiveElement,
    restoreFocus,
    focusFirstElement,
    createFocusTrap,
    getFocusableElements,
  };
};
