import { useState, useRef, useEffect, useId, useMemo, forwardRef } from 'react';
import styles from './Select.module.css';

interface SelectOption {
  value: string;
  label: React.ReactNode;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className = '',
      id,
      required,
      disabled,
      onChange,
      options,
      value,
      defaultValue,
      ...rest
    },
    ref,
  ): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const isControlled = useMemo(() => value !== undefined, [value]);
    const [internalValue, setInternalValue] = useState<string>(
      defaultValue ?? '',
    );
    const selectRef = useRef<HTMLDivElement>(null);

    const generatedId = useId();
    const selectId = id || generatedId;

    const currentValue = isControlled ? (value as string) : internalValue;

    const wrapperClasses = [
      styles.selectWrapper,
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      error && styles.error,
      isOpen && styles.open,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [styles.label, error && styles.labelError]
      .filter(Boolean)
      .join(' ');

    const selectClasses = [styles.select, error && styles.selectError]
      .filter(Boolean)
      .join(' ');

    const helperTextClasses = [
      styles.helperText,
      error && styles.helperTextError,
    ]
      .filter(Boolean)
      .join(' ');

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleOptionClick = (val: string) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
      setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
      if (isControlled && value !== undefined) {
        setInternalValue(value);
      }
    }, [isControlled, value]);

    const selected = options.find((o) => o.value === currentValue);
    const selectedLabel = selected ? selected.label : 'Select an option';

    return (
      <div ref={ref ?? selectRef} className={wrapperClasses} {...rest}>
        {label && (
          <label htmlFor={selectId} className={labelClasses}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div
          ref={selectRef}
          className={selectClasses}
          onClick={handleToggle}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-disabled={disabled}
        >
          <div className={styles.selectedValue}>{selectedLabel}</div>
          <span className={styles.arrow}>▼</span>
        </div>

        {isOpen && (
          <div
            className={styles.dropdown}
            role="listbox"
            aria-labelledby={selectId}
          >
            <div className={styles.optionsList}>
              {options.map((opt) => {
                const isSelected = opt.value === currentValue;
                return (
                  <div
                    key={opt.value}
                    className={[
                      styles.option,
                      isSelected && styles.optionSelected,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleOptionClick(opt.value)}
                  >
                    {opt.label}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {helperText && <div className={helperTextClasses}>{helperText}</div>}
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
export type { SelectOption };
