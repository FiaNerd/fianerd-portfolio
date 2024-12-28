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
      className={`${bgColor} ${border ? border : 'tracking-wider border-2 rounded text-lg font-medium hover:shadow-lg  hover:text-bg-primary md:text-xl px-4 py-2'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
