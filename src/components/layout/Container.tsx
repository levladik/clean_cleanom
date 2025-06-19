/**
 * Container Component
 * 
 * A layout container for consistent spacing and width
 */

import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className = '', children }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
