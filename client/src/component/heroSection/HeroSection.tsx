import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";
import styles from '../../styles/HeroSection.module.css';
import Button from "../Partial/Button";
import ResponsiveHeroImage from "./ResponsiveHeroImage";

const HeroSection = () => {
  const { t } = useTranslation('heroSection');
  const [userIsDesktop, setUserIsDesktop] = useState(window.innerWidth > 768); 
  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: false });
  
  useEffect(() => {
    const handleResize = () => {
      setUserIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative font-heading bg-[url('/assets/images/bg-light-img.jpg')] dark:bg-[url('\public\assets\images\bg-dark-img.jpg')] max-w-full h-full md:grid md:grid-cols-2">
      <div className={`flex flex-col absolute md:static inset-0 mx-auto md:justify-between md:mx-0 z-10 pl-4 pr-4 sm:pr-[1.3em] md:gap-4 md:pr-8 md:pl-8 md:pt-[1em]`}>
       <motion.div 
        initial={{  x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{stiffness: 50, damping: 30, duration: 1}}
        className="flex flex-col mx-auto leading-0 ">
        <p className={`${styles['title-fullstack']} text-amber-950 dark:text-text-secondary flex text-2xl font-light leading-none sm:text-4xl  sm:-ml-[0.3em] md:pl-[0.8em] md:text-4xl xl:text-3xl 2xl:text-5xl`}>
            {t('smallTitle')}
          </p>
          <h1 className={`${styles['heading-dev']} text-text-heading md:-mt-[0.2em] sm:text-7xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-8xl `}>
            {t('title')}
          </h1>
        </motion.div>

        <motion.div 
           initial={{  x: '-100vw', opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{stiffness: 50, damping: 30, duration: 2}}
          className="relative flex flex-col">
          <p className={`${styles['hello']} text-amber-950 dark:text-text-secondary font-bold md:text-2xl md:mb-[0.5em] 2xl:text-2xl`}>
            {t('helloName')} <span className="font-normal">{t('helloSpan')}</span>
          </p>
          <h2 className={`${styles['myName']} text-4xl md:-mt-[0.2em] sm:text-5xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-text-heading tracking-tighter`}>
            {t('name')}
          </h2>
          <p className={`${styles['iCode']} text-amber-950 dark:text-text-secondary 2xl:text-2xl font-light tracking-tight md:text-xl`}>
            {t('iCode')}
          </p>
        </motion.div>


        <motion.div 
         initial={{  y: '-100vh', opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{stiffness: 50, damping: 30, duration: 3}}
          className="flex flex-col">
          <p className={`${styles['subCv']} text-amber-950 dark:text-text-secondary md:text-right md:text-2xl 2xl:text-2xl mb-0 leading-none`}>{t('subCv')}</p>
          <h2 className={`${styles['cv']} text-5xl md:-mt-[0.3em] sm:text-6xl md:text-6xl 2xl:text-8xl text-text-heading font-bold leading-none`}>{t('cv')}</h2>
        </motion.div>

     
        {userIsDesktop && (
          <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="flex flex-col gap-6 mx-auto justify-center items-center text-md max-w-[80%] -mb-[3em]">
            <p className="text-amber-950 dark:text-text-secondary text-center">{t('desktopText')}</p>
            <p className="text-text-primary text-center">{t('desktopDonwload')}</p>
          </motion.div>
        )}

          <div className={`${styles['container-btn']} flex flex-col sm:flex-row gap-4 sm:gap-24 md:gap-12 lg:gap-32 xl:gap-40 justify-center text-lg sm:text-2xl md:text-lg lg:text-xl sm:mt-[18em] md:pb-[2em] md:mb-4 md:static md:mt-16 cursor-pointer`}>
              <Button className="bg-accent-secondary text-bg-primary border border-accent-secondary hover:bg-accent-primary hover:border-accent-primary hover:text-hover-text py-2 px-4 sm:py-3 sm:px-6 rounded-full w-full sm:w-auto">
                  {t('buttonCV')}
              </Button>
              <Button className="border-2 border-accent-secondary text-accent-secondary hover:border-accent-primary hover:bg-accent-primary hover:text-hover-text py-2 px-4 sm:py-3 sm:px-6 rounded-full w-full sm:w-auto">
                  {t('contact')}
              </Button>
          </div>
        </div>

        <div className="w-full object-cover">
        <ResponsiveHeroImage />
        </div>
      </div>


  );
}

export default HeroSection;
