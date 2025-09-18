export interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    variant?: 'outlined' | 'filled' | 'standard';
}
declare const Textfield: import("react").ForwardRefExoticComponent<TextfieldProps & import("react").RefAttributes<HTMLInputElement>>;
export { Textfield };
