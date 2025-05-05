import { ButtonProps } from '../../interfaces/ButtonInterface';
import classNames from 'classnames';

const Button = ({
  bgColor = 'transparent',
  border = 'none',
  className = '',
  children,
  variant = 'contained', // Default variant
  type = 'button', // Default button type
  ...props
}: ButtonProps & { variant?: 'text' | 'outlined' | 'contained' }) => {
  // Define base styles
  const baseStyles =
    'font-sub-heading tracking-wider text-base md:text-md lg:text-lg font-medium transition-all duration-300 cursor-pointer';

  // Define styles for each variant
  const variants = {
    text: 'bg-transparent py-1 border-none font-bold text-nav-text hover:text-nav-hover hover:underline-offset-4 hover:underline',
    outlined:
      'w-full md:w-80 py-2 px-2 bg-transparent rounded-lg font-sub-heading border-2 tracking-wider font-bold border-btn-bg text-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary',
    contained:
      'w-full py-3 px-2 text-bg-primary font-bold font-sub-heading rounded-lg hover:shadow-lg', // Removed hardcoded bg color
  };

  // Combine styles dynamically
  const buttonClasses = classNames(
    baseStyles,
    variants[variant],
    className,
    {
      [bgColor]: variant === 'contained' && bgColor !== 'transparent', // Apply bgColor dynamically
      [`border-${border}`]: border !== 'none',
    }
  );

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;