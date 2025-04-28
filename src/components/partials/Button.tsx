import { ButtonProps } from '../../interfaces/ButtonInterface';

const Button = ({
  bgColor = 'transparent',
  border,
  className = '',
  children,
  variant = 'contained', // Add a variant prop with a default value
  ...props
}: ButtonProps & { variant?: 'text' | 'outlined' | 'contained' }) => {
  // Define base styles
  const baseStyles =
    'font-sub-heading tracking-wider text-base md:text-md lg:text-lg font-medium transition-all duration-300 cursor-pointer';

  // Define styles for each variant
  const variants = {
    text: 'bg-transparent py-1 border-none font-bold text-nav-text hover:text-nav-hover  hover:underline-offset-4 hover:underline ', // Text-only button
    outlined:
      'w-full md:w-80 py-2 px-2 bg-transparent rounded-lg font-sub-heading border-2 tracking-wider font-bold border-btn-bg text-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary',
    contained:
      'w-full bg-btn-bg py-2 px-2 text-bg-primary font-bold font-sub-heading hover:bg-bg-hover rounded-lg ',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
