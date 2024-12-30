import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import useFadeIn from "../../hook/useFadeIn";
import styles from '../../styles/HeroSection.module.css';
import Button from "../Partial/Button";
import ResponsiveHeroImage from "./ResponsiveHeroImage";

const HeroSection = () => {
  const { t } = useTranslation('heroSection');
  const [userIsDesktop, setUserIsDesktop] = useState(window.innerWidth > 768);
  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

  

  useEffect(() => {
    const handleResize = () => {
      setUserIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative bg-[#e6a65e] dark:bg-[url('/assets/images/bg-dark-img.jpg')] max-w-full md:grid md:grid-cols-2">
      <div className={`flex flex-col absolute md:static inset-0 mx-auto gap-4 md:justify-between md:mx-0 z-10 pl-4 pr-4 sm:pr-[1.3em] md:gap-6 md:pr-8 md:pl-8 md:pt-[1em]`}>
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ stiffness: 50, damping: 30, duration: 1 }}
          className="flex flex-col mx-auto leading-0 md:gap-2">
          <p className={`${styles['title-fullstack']} font-textImportant text-text-secondary dark:text-[#d57d7d] text-2xl font-light leading-none sm:text-3xl sm:-ml-[0.3em] md:pl-[0.8em] md:text-4xl xl:text-3xl 2xl:text-5xl`}>
            {t('smallTitle')}
          </p>
          <h1 className={`${styles['heading-dev']} font-textImportant text-[#ef273e]  dark:text-accent-secondary uppercase mt-[0.7em] md:-mt-[0em] text-4xl sm:text-8xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-8xl`}>
            {t('title')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ stiffness: 50, damping: 30, duration: 2 }}
          className="relative flex flex-col gap-6 md:gap-2">
          <p className={`${styles['hello']} font-heading tracking-wider text-text-secondary dark:text-bg-secondary font-bold text-xl md:text-5xl md:mb-[1em] 2xl:text-4xl`}>
            {t('helloName')} <span className="font-sub-heading">{t('helloSpan')}</span>
          </p>
          <h2 className={`${styles['myName']} font-textImportant text-[#ef273e] dark:text-accent-secondary uppercase text-3xl md:mb-2 md:-mt-[0.5em] sm:text-5xl md:text-4xl lg:text-6xl 2xl:text-6xl font-bold text-text-heading tracking-tighter`}>
            {t('name')}
          </h2>
          <p className={`${styles['iCode']} font-textImportant text-text-secondary dark:text-bg-secondary md:text-5xl l font-light tracking-tight `}>
            {t('iCode')}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ stiffness: 50, damping: 30, duration: 3 }}
          className="flex flex-col gap-8 md:gap-4">
          <p className={`${styles['subCv']} font-sub-heading text-text-secondary dark:text-bg-secondary text-xl md:text-right md:text-4xl  mb-2 leading-none`}>
            {t('subCv')}
          </p>
          <h2 className={`${styles['cv']} font-textImportant text-[#ef273e] dark:text-accent-secondary uppercase text-5xl md:-mt-[0.1em] sm:text-6xl md:text-8xl 2xl:text-8xl font-bold leading-none`}>
            {t('cv')}
          </h2>
        </motion.div>

        {userIsDesktop && (
          <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="flex flex-col gap-6 mx-auto justify-center items-center text-md max-w-[80%] -mb-[3em]">
            <p className="text-text-secondary text-center">
              {t('desktopText')}
            </p>
            <p className="text-text-primary text-center">
              {t('desktopDonwload')}
            </p>
          </motion.div>
        )}

        <div className={`${styles['container-btn']} font-heading flex flex-col lg:flex-row gap-4 sm:gap-24 md:gap-12 lg:gap-32 xl:gap-40 justify-center text-lg sm:text-2xl md:text-lg lg:text-xl sm:mt-[18em] md:pb-[2em] md:mb-4 md:static md:mt-16 cursor-pointer`}>
        <Button className=" bg-btn-bg text-bg-primary border-btn-bg hover:border-bg-hover hover:bg-bg-hover py-2 px-4 sm:py-3 sm:px-6 w-full sm:w-auto">
          {t('buttonCV')}
        </Button>

          <NavLink to="#" className="font-sub-heading border-btn-bg text-btn-bg border-2 text-center hover:border-bg-hover tracking-wider hover:bg-bg-hover hover:text-bg-primary py-2 px-4 sm:py-3 sm:px-6 rounded w-full sm:w-auto">
            {t('contact')}
          </NavLink>
        </div>
      </div>

      <div className="w-full object-cover">
        <ResponsiveHeroImage />
      </div>
    </div>
  );
}

export default HeroSection;
