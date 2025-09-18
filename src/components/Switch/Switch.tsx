import { forwardRef, useId, useState, useMemo } from 'react';
import styles from './Switch.module.css';

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

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      error,
      helperText,
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
    const switchId = id || generatedId;

    const isControlled = useMemo(() => typeof checked === 'boolean', [checked]);
    const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(
      defaultChecked ?? false,
    );
    const currentChecked = isControlled
      ? (checked as boolean)
      : uncontrolledChecked;

    const wrapperClasses = [
      styles.switchWrapper,
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
        <label className={styles.switchContainer}>
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            className={styles.input}
            checked={currentChecked}
            disabled={disabled}
            onChange={handleChange}
            aria-invalid={!!error}
            aria-describedby={helperText ? `${switchId}-helper` : undefined}
            {...rest}
          />
          <span className={styles.track}>
            <span className={styles.thumb} />
          </span>

          {label && <span className={labelClasses}>{label}</span>}
        </label>

        {helperText && (
          <div id={`${switchId}-helper`} className={helperTextClasses}>
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

Switch.displayName = 'Switch';

export { Switch };
