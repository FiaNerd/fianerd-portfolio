import { useTranslation } from "react-i18next";
import styles from '../../styles/HeroSection.module.css';
import ResponsiveHeroImage from "./ResponsiveHeroImage";

function HeroSection() {
  const { t } = useTranslation('heroSection');

  return (
    <div className="relative font-heading mb-12 md:bg-[url('/assets/images/bg-light-img.jpg')] md:dark:bg-[url('/assets/images/bg-dark-img.jpg')] w-full h-full md:grid md:grid-cols-2">
      {/* Wrapper for text with relative positioning */}
      <div className={`flex flex-col absolute md:static inset-0 mx-auto md:justify-between md:mx-0 z-10 pr-4 sm:pr-[1.3em] md:gap-4 md:pr-4 md:pl-4 md:pt-[1em]`}>
       <div className="flex flex-col font-heading mx-auto leading-0 ">
        <p className={`${styles['title-fullstack']} flex text-2xl font-light leading-none sm:text-4xl md:pr-[0.1em] md:text-4xl xl:text-3xl 2xl:text-5xl`}>
            {t('smallTitle')}
          </p>
          <h1 className={`${styles['heading-dev']} text-accent-secondary md:-mt-[0.2em] sm:text-7xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-8xl `}>
            {t('title')}
          </h1>
        </div>

        <div className=" flex flex-col text-start pl-4 sm:pl-8 md:pl-4">
          <p className={`${styles['hello']} font-bold md:text-2xl md:mb-[0.5em] 2xl:text-2xl`}>
            {t('helloName')} <span className="font-normal">{t('helloSpan')}</span>
          </p>
          <h2 className={`${styles['myName']} text-4xl md:-mt-[0.2em] sm:text-5xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-0 text-accent-secondary tracking-tighter`}>{t('name')}</h2>
          <p className={`${styles['iCode']} 2xl:text-2xl mb-0 font-light  md:text-xl md:-mt-[0.2em] md:ml-[0.9em] lg:ml-[5.5em]`}>{t('iCode')}</p>
        </div>

        <div className="flex flex-col">
          <p className={`${styles['subCv']} md:text-right md:text-2xl 2xl:text-2xl mb-0 leading-none`}>{t('subCv')}</p>
          <h2 className={`${styles['cv']} text-5xl md:-mt-[0.3em] sm:text-6xl md:text-6xl 2xl:text-8xl text-accent-secondary font-bold leading-none`}>{t('cv')}</h2>
        </div>

        <div className="flex gap-11 justify-center md:pb-[2em] text-[1.3rem] mt-28 md:mt-16">
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
