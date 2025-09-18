export interface SwitchProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'checked' | 'defaultChecked'
  > {
  label?: string;
  error?: boolean;
  helperText?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}
declare const Switch: import('react').ForwardRefExoticComponent<
  SwitchProps & import('react').RefAttributes<HTMLInputElement>
>;
export { Switch };
