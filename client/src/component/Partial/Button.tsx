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
      className={`${bgColor} ${border ? border : 'font-semibold tracking-wide text-lg px-4 py-2 rounded-3xl'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
