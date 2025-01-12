import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";
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
    <div className="relative w-full h-full flex items-center justify-center">
    <p className="absolute top-6 left-8 transform -translate-x-1-translate-y-1/2 text-center text-4xl md:text-6xl text-[#b7253d] dark:text-accent-primary font-textImportant">
TEST
    </p> <ResponsiveHeroImage />
    </div>
     
  );
}

export default HeroSection;

          {/* <p className={`${styles['title-fullstack']} font-textImportant text-text-secondary dark:text-[#d57d7d] text-2xl font-light leading-none sm:text-3xl sm:-ml-[0.3em] md:pl-[0.8em] md:text-4xl xl:text-3xl 2xl:text-5xl`}>
            {t('smallTitle')}
          </p>
          <h1 className={`${styles['heading-dev']} font-textImportant text-[#ef273e]  dark:text-accent-secondary uppercase mt-[0.7em] md:-mt-[0em] text-4xl sm:text-8xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-8xl`}>
            {t('title')}
          </h1>
        </motion.div> */}

       