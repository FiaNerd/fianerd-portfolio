
interface SectionProps {
    bgColor: string
    bgImage?: string
    className?: string
    children: React.ReactNode
}
const Section = ({bgColor, bgImage, className, children, ...props} : SectionProps) => {
    const sectionStyle = {
        backgroundColor: bgColor || 'transparent',
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }

  return (
    <section 
        className={`w-full ${className}`} 
        style={sectionStyle} 
        {...props}
    >
            {children}
    </section>
  )
}

export default Section