interface SectionProps {
    bgColor?: string
    bgImage?: string
    className?: string
    children: React.ReactNode
  }
  
  const Section = ({
    bgColor = 'transparent', 
    bgImage, 
    className = '', 
    children, 
    ...props
  }: SectionProps) => {

  
    return (
        <section
        className={`${bgColor} ${bgImage ? `bg-cover bg-center bg-no-repeat` : ''} ${className}`}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        {...props}
      >
        {children}
      </section>
    )
  }
  
  export default Section
  