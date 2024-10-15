import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutMe from "../component/about/AboutMe";
import AboutNav from "../component/about/AboutNav";
import HeroSection from "../component/heroSection/HeroSection";
import TitleAnimation from "../component/Partial/TitleAnimation";

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
      <div style={{ paddingTop: `${headerHeight}px` }} className="bg-blend-multiply">
        <div style={{ minHeight: `calc(100% - ${headerHeight}px)` }} className="relative">
          <HeroSection />
        </div>
      </div>


      <div className="text-center mb-8 text-text-heading md:mt-[2em] ">
      <TitleAnimation text={t('title')} dot={(t('titleDot'))}/>
      {/* <h1 className="inline-block tracking-tight">
        {t('title')}
        <span className="text-[6rem] lg:text-[12rem] ml-[-0.04em]">{t('titleDot')}</span>
      </h1> */}
        <h3 className="-mt-[1em]">{t('intro')}</h3>
      </div>
      <AboutNav />
      <AboutMe />
    </>
  );
};

export default HomePage;
