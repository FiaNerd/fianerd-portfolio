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
      className={`${bgColor} ${border ? border : 'tracking-wide border-2 text-lg hover:shadow-lg  md:text-xl px-4 py-2 rounded'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
