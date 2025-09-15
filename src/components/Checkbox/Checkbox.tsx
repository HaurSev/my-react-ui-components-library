import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  helperText?: string;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      helperText,
      indeterminate = false,
      className = '',
      id,
      checked,
      disabled,
      onChange,
      ...rest
    },
    ref
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    const wrapperClasses = [
      styles.checkboxWrapper,
      disabled && styles.disabled,
      error && styles.error,
      className
    ].filter(Boolean).join(' ');

    const labelClasses = [
      styles.label,
      error && styles.labelError
    ].filter(Boolean).join(' ');

    const helperTextClasses = [
      styles.helperText,
      error && styles.helperTextError
    ].filter(Boolean).join(' ');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.checked);
      }
    };

    return (
      <div className={wrapperClasses}>
        <div className={styles.checkboxContainer}>
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={styles.input}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            aria-invalid={!!error}
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            data-indeterminate={indeterminate}
            {...rest}
          />
          
          <span className={styles.checkmark}>
            {indeterminate && !checked && (
              <span className={styles.indeterminate}></span>
            )}
            {checked && !indeterminate && (
              <span className={styles.checkmarkIcon}>✓</span>
            )}
          </span>

          {label && (
            <label htmlFor={checkboxId} className={labelClasses}>
              {label}
            </label>
          )}
        </div>

        {(error || helperText) && (
          <div id={`${checkboxId}-error`} className={helperTextClasses}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;