/**
 * Button Component
 * 
 * A reusable button component with different variants and sizes
 */

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isFullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  // Base classes
  const baseClasses = 'btn font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  
  // Variant classes
  const variantClasses = {
    primary: 'btn-primary text-white',
    secondary: 'btn-secondary text-white',
    outline: 'btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'btn-ghost text-primary hover:bg-primary/10',
    link: 'btn-link text-primary underline hover:text-primary/80 p-0',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'btn-sm text-sm px-3 py-1',
    md: 'btn-md px-4 py-2',
    lg: 'btn-lg text-lg px-6 py-3',
  };
  
  // Width classes
  const widthClasses = isFullWidth ? 'w-full' : '';
  
  // Loading state
  const loadingClasses = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClasses}
    ${loadingClasses}
    ${className}
  `;
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="loading loading-spinner loading-xs mr-2"></span>
      )}
      {!isLoading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  );
}
