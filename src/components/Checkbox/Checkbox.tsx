import { forwardRef, useId, useState, useMemo } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'checked' | 'defaultChecked'
  > {
  label?: string;
  error?: boolean;
  helperText?: string;
  indeterminate?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      helperText,
      indeterminate = false,
      className = '',
      id,
      checked,
      defaultChecked,
      disabled,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    const isControlled = useMemo(() => typeof checked === 'boolean', [checked]);
    const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(
      defaultChecked ?? false,
    );
    const currentChecked = isControlled
      ? (checked as boolean)
      : uncontrolledChecked;

    const wrapperClasses = [
      styles.checkboxWrapper,
      disabled && styles.disabled,
      error && styles.error,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [styles.label, error && styles.labelError]
      .filter(Boolean)
      .join(' ');

    const helperTextClasses = [
      styles.helperText,
      error && styles.helperTextError,
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = event.target.checked;
      if (!isControlled) {
        setUncontrolledChecked(next);
      }
      onChange?.(next);
    };

    return (
      <div className={wrapperClasses}>
        <label className={styles.checkboxContainer}>
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={styles.input}
            checked={currentChecked}
            onChange={handleChange}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={helperText ? `${checkboxId}-helper` : undefined}
            data-indeterminate={indeterminate}
            {...rest}
          />

          <span className={styles.checkmark}>
            {indeterminate && !currentChecked && (
              <span className={styles.indeterminate}></span>
            )}
            {currentChecked && !indeterminate && (
              <span className={styles.checkmarkIcon}>✓</span>
            )}
          </span>

          {label && <span className={labelClasses}>{label}</span>}
        </label>

        {helperText && (
          <div id={`${checkboxId}-helper`} className={helperTextClasses}>
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
