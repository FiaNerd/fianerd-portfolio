import { useEffect } from "react";

const ResponsiveHeroImage = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized:', window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <picture>
      {/* Mobile image */}
      <source
        media="(max-width: 768px)" 
        srcSet="/assets/images/heroImage_mobile.png 300w, /assets/images/heroImage_mobile.png 768w"
      />
      {/* Desktop image */}
      <source
        media="(min-width: 769px)"
        srcSet="/assets/images/heroImage_desktop.jpg"
      />
      {/* Fallback image */}
      <img 
        src="/assets/images/heroImage_desktop.jpg" 
        alt="Hero Image"
        loading="lazy" // Optional for performance
        className="object-cover w-full h-full "
      />
    </picture>
  )

    }
    
    export default ResponsiveHeroImage;
