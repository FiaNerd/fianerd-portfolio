import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutMe from "../component/about/AboutMe";
import AboutNav from "../component/about/AboutNav";
import HeroSection from "../component/heroSection/HeroSection";

const HomePage = () => {
  const { t } = useTranslation('home');
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header'); 

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div style={{ paddingTop: `${headerHeight}px` }}>
        <div style={{ minHeight: `calc(100vh - ${headerHeight}px)` }} className="relative">
          <HeroSection />
        </div>
      </div>

      <div className="text-center mb-8">
        <h1>{t('title')}<span className="text-accent-primary ml-2">{t('question')}</span></h1>
        <h3>{t('intro')}</h3>
      </div>
      <AboutNav />
      <AboutMe />
    </>
  );
};

export default HomePage;
