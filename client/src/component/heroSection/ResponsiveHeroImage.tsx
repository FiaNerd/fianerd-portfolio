import { useEffect } from "react";

const ResponsiveHeroImage = () => {
  useEffect(() => {
    const handleResize = () => {
      // Trigger a re-render or a state change if needed
      console.log('Window resized:', window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
        <img
        src="/assets/images/heroImage_mobile.png?v=1.0"

          srcSet="/assets/images/heroImage_mobile.png 300w, 
                  /assets/images/heroImage_mobile.png 768w, 
                  /assets/images/heroImage_desktop.jpg 1280w"
          sizes="(max-width: 480px) 100vw, 
                 (max-width: 768px) 50vw, 
                 100vw" 
          alt="hero image Sofia"
          className="object-cover w-full md:h-auto"
        />
      );
    }
    
    export default ResponsiveHeroImage;
