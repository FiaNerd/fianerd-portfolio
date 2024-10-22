import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutMe from "../component/about/AboutMe";
import AboutNav from "../component/about/AboutNav";
import HeroSection from "../component/heroSection/HeroSection";
import TitleAnimation from "../component/Partial/TitleAnimation";
import useMousePosition from "../hook/useMousePosition";

const HomePage = () => {
  const { t } = useTranslation('home');
  const [headerHeight, setHeaderHeight] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false); // Track animation completion
  const mousePosition = useMousePosition();

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

  // Handle scroll position
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{ paddingTop: `${headerHeight}px` }} className="bg-blend-multiply">
        <div style={{ minHeight: `calc(100% - ${headerHeight}px)` }} className="relative">
          <HeroSection />
        </div>
      </div>

      <motion.div 
        className="text-center mb-8 text-text-heading md:mt-[2em]"
        // style={{
        //   transform: animationComplete 
        //     ? `translate(${mousePosition.x * 0}px, ${mousePosition.y * 0.1}px) translateY(${scrollY * 0.1}px)`
        //     : 'none',
        //   transition: 'transform 0.1s ease-out',
        // }}
      >
        <TitleAnimation 
          text={t('profile')} 
          dot="." 
          onComplete={() => setAnimationComplete(true)} 
        />
        <h3 className="-mt-[0.8em] lg:-mt-[1.5em]">{t('intro')}</h3>
      </motion.div>

      <AboutNav />
      <AboutMe />
    </>
  );
};

export default HomePage;
