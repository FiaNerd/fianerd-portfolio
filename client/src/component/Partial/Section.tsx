import React from "react";

interface SectionProps {
  bgColor?: string;
  bgImage?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string
}

const Section = ({
  bgColor = "transparent",
  bgImage,
  className = "",
  children,
  style = {},
  id,
  ...props
}: SectionProps) => {
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

export default Section;
