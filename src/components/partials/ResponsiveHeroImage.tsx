import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const ResponsiveHeroImage = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; 
  }

  const { currentTheme } = themeContext;

  const isDarkMode = currentTheme === "dark";

  return (
    <picture>
      {/* Mobile image */}
      <source
        media="(max-width: 767px)"
        srcSet={
          isDarkMode
            ? "/assets/images/hero-img/heroImage_mobile_dark.webp"
            : "/assets/images/hero-img/heroImage_mobile.webp"
        }
        className="object-cover w-full h-full"
      />

      {/* Tablet image */}
      <source
        media="(min-width: 768px) and (max-width: 1535px)"
        srcSet={
          isDarkMode
            ? "/assets/images/hero-img/heroImage_tablet_dark.webp"
            : "/assets/images/hero-img/heroImage_tablet.webp"
        }
        className="object-cover w-full h-full"
      />

      {/* Desktop image */}
      <source
        media="(min-width: 1536px)"
        srcSet={
          isDarkMode
            ? "/assets/images/hero-img/heroImage_desktop_dark.webp"
            : "/assets/images/hero-img/heroImage_desktop.webp"
        }
        className="object-cover w-full h-full"
      />

      {/* Fallback image */}
      <img
        src={
          isDarkMode
            ? "/assets/images/hero-img/heroImage_desktop_dark.webp"
            : "/assets/images/hero-img/heroImage_desktop.webp"
        }
        alt="Hero Image"
        className="object-cover w-full h-full"
      />
    </picture>
  );
};

export default ResponsiveHeroImage;
