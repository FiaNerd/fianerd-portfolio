import { useTranslation } from "react-i18next";
import styles from '../../styles/HeroSection.module.css';
import ResponsiveHeroImage from "./ResponsiveHeroImage";

function HeroSection() {
  const { t } = useTranslation('heroSection');

  return (
    <div className="relative mb-12 bg-[url('/assets/images/bg-light-img.jpg')] dark:bg-[url('/assets/images/bg-dark-img.jpg')] w-full h-full md:grid md:grid-cols-2 md:gap-4">
      {/* Wrapper for text with relative positioning */}
      <div className={`flex flex-col absolute md:static inset-0 mx-auto md:justify-between md:mx-0 z-10`}>
       <div className="flex flex-col font-heading mx-auto leading-0 md:pt-[1em]">
        <p className={`${styles['title-fullstack']} text-2xl  sm:text-4xl md:text-2xl xl:text-3xl 2xl:text-5xl font-light leading-0`}>
            {t('smallTitle')}
          </p>
          <h1 className={`${styles['heading-dev']} text-accent-secondary md:mt-0 sm:text-7xl md:text-5xl xl:text-6xl 2xl:text-8xl `}>
            {t('title')}
          </h1>
        </div>

        <div className="font-heading flex flex-col text-start pl-4 sm:pl-8 md:pl-4">
          <p className={`${styles['hello']} font-bold 2xl:text-2xl mb-0`}>
            {t('helloName')} <span className="font-normal">{t('helloSpan')}</span>
          </p>
          <h2 className={`${styles['myName']} text-4xl sm:text-5xl md:text-4xl md:mt-0 lg:text-3xl 2xl:text-6xl font-bold mb-0 text-accent-secondary tracking-tighter`}>{t('name')}</h2>
          <p className={`${styles['iCode']} font-heading  2xl:text-2xl mb-0 font-light`}>{t('iCode')}</p>
        </div>

        <div className="flex flex-col">
          <p className={`${styles['subCv']} font-heading md:text-right 2xl:text-2xl mb-0`}>{t('subCv')}</p>
          <h2 className={`${styles['cv']} text-5xl md:m-0 sm:text-6xl 2xl:text-8xl text-accent-secondary pr-4 sm:pl-8 font-bold`}>{t('cv')}</h2>
        </div>

        <div className="flex font-heading gap-11 justify-center md:pb-[2em] text-[1.3rem] mt-28 md:mt-16">
          <button className="bg-accent-primary text-white py-2 px-4 rounded-md">{t('buttonCV')}</button>
          <button className="bg-accent-secondary py-2 px-4 rounded-md text-white">{t('contact')}</button>
        </div>

        {/* <div className="bg-bg-secondary">
          <p className={`${styles['espresso']} text-white leading-0 mb-0 text-sm`}>{t('cvSubtitle')}</p>
        </div> */}
      </div>

      <div className="w-full object-cover">
       <ResponsiveHeroImage />
      </div>
    </div>
  );
}

export default HeroSection;
