const HeroPortfolioImage = () => {
  
  return (
    <picture>
    {/* Mobile image */}
    <source
      media="(max-width: 767px)"
      srcSet={ "/assets/images/portfolio/hero-portfolio-mobile.webp"}
      className="object-cover w-full h-full"
    />

    {/* Tablet image */}
    <source
      media="(min-width: 768px) and (max-width: 1535px)"
      srcSet={ "/assets/images/portfolio/hero-portfolio-tablet.webp"}
      className="object-cover w-full h-full"
    />

    {/* Desktop image */}
    <source
      media="(min-width: 1536px)"
      srcSet={"/assets/images/portfolio/hero-portfolio-desktop.webp"}
      className="object-cover w-full h-full"
    />

    {/* Fallback image */}
    <img
      src={"/assets/images/portfolio/hero-portfolio-desktop.webp"}
      alt="Hero Image"
      className="object-cover w-full h-full"
    />
  </picture>
  )
}

export default HeroPortfolioImage