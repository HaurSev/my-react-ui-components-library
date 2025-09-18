export declare const useFocusTrap: () => {
  saveActiveElement: () => void;
  restoreFocus: () => void;
  focusFirstElement: (container: HTMLElement) => void;
  createFocusTrap: (container: HTMLElement) => (() => void) | undefined;
  getFocusableElements: (container: HTMLElement) => NodeListOf<Element>;
};
