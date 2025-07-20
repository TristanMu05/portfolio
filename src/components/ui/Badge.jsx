'use client';

import { cn } from '@/lib/utils';

const Badge = ({ 
  children, 
  className, 
  variant = 'default',
  size = 'md',
  ...props 
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-full
    transition-all duration-200 select-none
  `;

  const variants = {
    default: `
      bg-gray-700 text-gray-200 border border-gray-600
      hover:bg-gray-600 hover:border-gray-500
    `,
    primary: `
      bg-blue-600 text-white border border-blue-500
      hover:bg-blue-700 hover:border-blue-600
    `,
    secondary: `
      bg-gray-200 text-gray-800 border border-gray-300
      hover:bg-gray-300 hover:border-gray-400
    `,
    success: `
      bg-green-600 text-white border border-green-500
      hover:bg-green-700 hover:border-green-600
    `,
    warning: `
      bg-yellow-600 text-white border border-yellow-500
      hover:bg-yellow-700 hover:border-yellow-600
    `,
    danger: `
      bg-red-600 text-white border border-red-500
      hover:bg-red-700 hover:border-red-600
    `,
    outline: `
      bg-transparent text-blue-400 border border-blue-500
      hover:bg-blue-500 hover:text-white
    `,
    tech: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0
      hover:from-blue-700 hover:to-purple-700 shadow-md
    `,
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge; 