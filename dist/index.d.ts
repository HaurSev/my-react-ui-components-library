import React from 'react';
export { default as buttonStyles } from './components/Button/Button.module.css';
export { default as textfieldStyles } from './components/Textfield/Textfield.module.css';
export { default as selectStyles } from './components/Select/Select.module.css';
export { default as checkboxStyles } from './components/Checkbox/Checkbox.module.css';
export { default as switchStyles } from './components/Switch/Switch.module.css';
export { default as modalStyles } from './components/Modal/Modal.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'text' | 'contained' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'error';
    fullWidth?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    variant?: 'outlined' | 'filled' | 'standard';
}
declare const Textfield: React.ForwardRefExoticComponent<TextfieldProps & React.RefAttributes<HTMLInputElement>>;

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'children'> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    onChange?: (value: string) => void;
    children: React.ReactNode;
}
interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    value: string;
    children: React.ReactNode;
    onClick?: () => void;
    isSelected?: boolean;
    className?: string;
}
declare const Option: React.FC<OptionProps>;
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: string;
    helperText?: string;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: string;
    helperText?: string;
    onChange?: (checked: boolean) => void;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;

interface ModalProps {
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
declare const Modal: React.FC<ModalProps>;

interface ModalHeaderProps {
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
    closeButtonLabel?: string;
}
declare const ModalHeader: React.FC<ModalHeaderProps>;

interface ModalContentProps {
    children: React.ReactNode;
    className?: string;
}
declare const ModalContent: React.FC<ModalContentProps>;

interface ModalActionsProps {
    children: React.ReactNode;
    className?: string;
}
declare const ModalActions: React.FC<ModalActionsProps>;

export { Button, Checkbox, Modal, ModalActions, ModalContent, ModalHeader, Option, Select, Switch, Textfield };
export type { ButtonProps, CheckboxProps, ModalProps, OptionProps, SelectProps, SwitchProps, TextfieldProps };
