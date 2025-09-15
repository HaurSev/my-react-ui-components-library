import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'children'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

const Option: React.FC<OptionProps> = ({ 
  children, 
  onClick, 
  isSelected, 
  className = '', 
  ...rest 
}) => {
  const optionClasses = [
    styles.option,
    isSelected && styles.optionSelected,
    className
  ].filter(Boolean).join(' ');

  return (
    <option
      className={optionClasses}
      onClick={onClick}
      role="option"
      aria-selected={isSelected}
      {...rest}
    >
      {children}
    </option>
  );
};

Option.displayName = 'Option';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
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
      children,
      onChange,
      value
    },
    _ref
  ): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');
    const selectRef = useRef<HTMLDivElement>(null);

    const generatedId = React.useId();
    const selectId = id || generatedId;

    const wrapperClasses = [
      styles.selectWrapper,
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      error && styles.error,
      isOpen && styles.open,
      className
    ].filter(Boolean).join(' ');

    const labelClasses = [
      styles.label,
      error && styles.labelError
    ].filter(Boolean).join(' ');

    const selectClasses = [
      styles.select,
      error && styles.selectError
    ].filter(Boolean).join(' ');

    const helperTextClasses = [
      styles.helperText,
      error && styles.helperTextError
    ].filter(Boolean).join(' ');

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleOptionClick = (value: string) => {
      setInternalValue(value);
      onChange?.(value);
      setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    // Типизированный поиск выбранной опции
    const selectedOption = React.Children.toArray(children).find(
      (child): child is React.ReactElement<OptionProps> => 
        React.isValidElement(child) && 
        (child as React.ReactElement).type === Option &&
        (child as React.ReactElement<OptionProps>).props.value === internalValue
    );

    const selectedLabel = selectedOption 
      ? selectedOption.props.children 
      : 'Select an option';

    return (
      <div ref={selectRef} className={wrapperClasses}>
        {label && (
          <label htmlFor={selectId} className={labelClasses}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        
        <div 
          className={selectClasses} 
          onClick={handleToggle}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-disabled={disabled}
        >
          <div className={styles.selectedValue}>
            {selectedLabel}
          </div>
          <span className={styles.arrow}>▼</span>
        </div>


        {isOpen && (
          <div 
            className={styles.dropdown}
            role="listbox"
            aria-labelledby={selectId}
          >
            <div className={styles.optionsList}>
              {React.Children.map(children, (child) => {
                if (React.isValidElement<OptionProps>(child) && child.type === Option) {
                  const optionValue = child.props.value;
                  return React.cloneElement(child, {
                    onClick: () => handleOptionClick(optionValue),
                    isSelected: optionValue === internalValue,
                    className: [
                      child.props.className,
                      styles.option,
                      optionValue === internalValue && styles.optionSelected
                    ].filter(Boolean).join(' ')
                  } as Partial<OptionProps>);
                }
                return child;
              })}
            </div>
          </div>
        )}

        {(error || helperText) && (
          <div className={helperTextClasses}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select, Option };