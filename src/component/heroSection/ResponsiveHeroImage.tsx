import { useEffect } from "react";

const ResponsiveHeroImage = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized:', window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <picture>
      {/* Mobile image for screens up to 767px */}
      <source
        media="(max-width: 767px)"
        srcSet="/assets/images/heroImage_mobile.webp 300w, /assets/images/heroImage_mobile.webp 768w"
        className="object-cover w-full h-full"
      />

      {/* Tablet image for screens between 768px and 1535px */}
      <source
        media="(min-width: 768px) and (max-width: 1535px)"
        srcSet="/assets/images/heroImage_tablet.webp"
        className="object-cover w-full h-full"
      />

      {/* Desktop image for screens 1024px and wider */}
      <source
        media="(min-width: 1536px)"
        srcSet="/assets/images/heroImage_desktop.webp"
        className="object-cover w-full h-full"
      />

      {/* Fallback image for older browsers */}
      <img
        src="/assets/images/heroImage_desktop.webp"
        alt="Hero Image"
        loading="lazy"
        className="object-cover w-full h-full"
      />
    </picture>
  );
};

export default ResponsiveHeroImage;
