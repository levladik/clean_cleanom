/**
 * Select Component
 * 
 * A reusable select component with different variants and sizes
 */

import React, { forwardRef } from 'react';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
  isFullWidth?: boolean;
  onChange?: (value: string) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      isFullWidth = true,
      className = '',
      onChange,
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = 'select select-bordered focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';
    
    // Error classes
    const errorClasses = error ? 'select-error border-error' : '';
    
    // Width classes
    const widthClasses = isFullWidth ? 'w-full' : '';
    
    // Combine all classes
    const selectClasses = `
      ${baseClasses}
      ${errorClasses}
      ${widthClasses}
      ${className}
    `;
    
    // Handle change event
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };
    
    return (
      <div className={`form-control ${isFullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="label">
            <span className="label-text font-medium">{label}</span>
          </label>
        )}
        
        <select
          ref={ref}
          className={selectClasses}
          onChange={handleChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={helperText ? `${props.id}-helper-text` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {(helperText || error) && (
          <label className="label">
            {helperText && !error && (
              <span
                id={`${props.id}-helper-text`}
                className="label-text-alt text-gray-500"
              >
                {helperText}
              </span>
            )}
            
            {error && (
              <span className="label-text-alt text-error">{error}</span>
            )}
          </label>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
