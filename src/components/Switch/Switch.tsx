import React from 'react';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  helperText?: string;
  onChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      error,
      helperText,
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
    const switchId = id || generatedId;

    const wrapperClasses = [
      styles.switchWrapper,
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
        <div className={styles.switchContainer}>
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            className={styles.input}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            aria-invalid={!!error}
            aria-describedby={error ? `${switchId}-error` : undefined}
            {...rest}
          />
          
          <span className={styles.track}>
            <span className={styles.thumb} />
          </span>

          {label && (
            <label htmlFor={switchId} className={labelClasses}>
              {label}
            </label>
          )}
        </div>

        {(error || helperText) && (
          <div id={`${switchId}-error`} className={helperTextClasses}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;