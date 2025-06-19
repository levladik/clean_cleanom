/**
 * Card Component
 * 
 * A reusable card component with different variants
 */

import React from 'react';

type CardVariant = 'default' | 'bordered' | 'elevated';

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Card({
  variant = 'default',
  className = '',
  children,
  onClick,
}: CardProps) {
  // Base classes
  const baseClasses = 'card bg-base-100';
  
  // Variant classes
  const variantClasses = {
    default: '',
    bordered: 'card-bordered border-base-300',
    elevated: 'shadow-lg',
  };
  
  // Interactive classes
  const interactiveClasses = onClick
    ? 'cursor-pointer transition-all hover:shadow-md active:shadow-sm'
    : '';
  
  // Combine all classes
  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${interactiveClasses}
    ${className}
  `;
  
  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Card subcomponents
Card.Title = function CardTitle({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h2 className={`card-title ${className}`}>{children}</h2>;
};

Card.Content = function CardContent({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`card-actions justify-end mt-4 ${className}`}>{children}</div>;
};

Card.Image = function CardImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className="w-full h-auto" />
    </figure>
  );
};
