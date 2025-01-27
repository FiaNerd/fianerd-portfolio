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
      className={`${bgColor} ${border ? border : 'w-full font-sub-heading tracking-wider border-3 rounded text-base md:text-md lg:text-lg font-medium hover:shadow-lg hover:text-bg-primary px-4 py-1'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
