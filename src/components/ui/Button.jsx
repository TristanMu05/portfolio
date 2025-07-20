'use client';

import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = `
    inline-flex items-center justify-center rounded-lg font-medium 
    transition-all duration-200 focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 
    disabled:cursor-not-allowed transform hover:scale-105 active:scale-95
  `;

  const variants = {
    primary: `
      bg-blue-600 hover:bg-blue-700 text-white 
      focus:ring-blue-500 shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-gray-800 hover:bg-gray-700 text-gray-100 
      border border-gray-700 hover:border-gray-600
      focus:ring-gray-500 shadow-md hover:shadow-lg
    `,
    outline: `
      bg-transparent border-2 border-blue-500 text-blue-400 
      hover:bg-blue-500 hover:text-white focus:ring-blue-500
    `,
    ghost: `
      bg-transparent text-gray-300 hover:bg-gray-800 
      hover:text-white focus:ring-gray-500
    `,
    danger: `
      bg-red-600 hover:bg-red-700 text-white 
      focus:ring-red-500 shadow-lg hover:shadow-xl
    `,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 