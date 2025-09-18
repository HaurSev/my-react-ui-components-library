interface SelectOption {
    value: string;
    label: React.ReactNode;
}
export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    label?: string;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    onChange?: (value: string) => void;
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    id?: string;
}
declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLDivElement>>;
export { Select };
export type { SelectOption };
