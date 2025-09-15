import React from 'react';
import styles from './Textfield.module.css';

export interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
}

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      variant = 'outlined',
      className = '',
      id,
      required,
      disabled,
      ...rest
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const wrapperClasses = [
      styles.textfieldWrapper,
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      error && styles.error,
      className
    ].filter(Boolean).join(' ');

    const labelClasses = [
      styles.label,
      error && styles.labelError
    ].filter(Boolean).join(' ');

    const inputClasses = [
      styles.input,
      styles[variant],
      error && styles.inputError
    ].filter(Boolean).join(' ');

    const helperTextClasses = [
      styles.helperText,
      error && styles.helperTextError
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />

        {(error || helperText) && (
          <div id={`${inputId}-error`} className={helperTextClasses}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Textfield.displayName = 'Textfield';

export default Textfield;