/**
 * Wrapper Component
 * 
 * A layout Wrapper for consistent spacing and width
 */

import React from 'react';

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

export default function Wrapper({ className = '', children }: WrapperProps) {
  return (
    <div className={`Wrapper mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
