import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  border?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ bgColor = 'transparent', border, className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${bgColor} ${border ? border : 'text-lg border border-accent-primary px-4 py-2 rounded-sm text-accent-primary hover:bg-accent-secondary hover:border-accent-secondary hover:text-hover-text'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
