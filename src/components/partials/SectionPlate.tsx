import { SectionPlateProps } from '../../interfaces/SectionPlateInterface';

const SectionPlate = ({
  bgColor = 'transparent',
  bgImage,
  className = '',
  children,
  style = {},
  id,
  ...props
}: SectionPlateProps) => {
  return (
    <section
      id={id}
      className={`${bgColor} ${
        bgImage ? `bg-cover bg-center bg-no-repeat` : ''
      } ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionPlate;
