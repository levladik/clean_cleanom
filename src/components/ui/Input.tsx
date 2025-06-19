/**
 * Input Component
 * 
 * A reusable input component with different variants and sizes
 */

import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      isFullWidth = true,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = 'input input-bordered focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';
    
    // Error classes
    const errorClasses = error ? 'input-error border-error' : '';
    
    // Width classes
    const widthClasses = isFullWidth ? 'w-full' : '';
    
    // Icon padding
    const leftPadding = leftIcon ? 'pl-10' : '';
    const rightPadding = rightIcon ? 'pr-10' : '';
    
    // Combine all classes
    const inputClasses = `
      ${baseClasses}
      ${errorClasses}
      ${widthClasses}
      ${leftPadding}
      ${rightPadding}
      ${className}
    `;
    
    return (
      <div className={`form-control ${isFullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="label">
            <span className="label-text font-medium">{label}</span>
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={inputClasses}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={helperText ? `${props.id}-helper-text` : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        
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

Input.displayName = 'Input';

export default Input;
