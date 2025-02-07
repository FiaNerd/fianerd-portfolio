import React from "react";

interface IProps {
  bgColor?: string;
  bgImage?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string
}

const SectionPlate = ({
  bgColor = "transparent",
  bgImage,
  className = "",
  children,
  style = {},
  id,
  ...props
}: IProps) => {
  return (
    <section
    id={id}
      className={`${bgColor} ${bgImage ? `bg-cover bg-center bg-no-repeat` : ""} ${className}`}
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
