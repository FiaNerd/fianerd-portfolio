import { useTranslation } from "react-i18next";
import styles from '../../styles/HeroSection.module.css';
import ResponsiveHeroImage from "./ResponsiveHeroImage";

function HeroSection() {
  const { t } = useTranslation('heroSection');

  return (
    <div className="relative mb-12 w-full h-full">
      {/* Responsiv bild som fyller hela containern */}
      <ResponsiveHeroImage />
      
      {/* Wrapper for text with relative positioning */}
      <div className={`container absolute inset-0 mx-auto sm:mx-0 flex flex-col z-10`}>
       <div className="flex flex-col max-w-[7.5em] mx-auto leading-0">
       <p className={`${styles['title-fullstack']} font-heading text-2xl sm:text-4xl md:text-2xl font-light leading-0`}>
          {t('smallTitle')}
        </p>
        <h1 className={`${styles['heading-dev']} text-accent-secondary sm:text-7xl md:text-5xl`}>
          {t('title')}
        </h1>
       </div>

        <div className="font-heading text-center">
          <p className="font-bold">
            {t('titleName')} <span className="font-normal">{t('titleSpan')}</span>
          </p>
          <h2 className="text-4xl mt-4 font-bold text-accent-secondary tracking-tighter">{t('name')}</h2>
          <p className="font-heading font-light">{t('subTitleName')}</p>
        </div>

        <div className="text-center">
          <p className="font-heading">{t('subtitle')}</p>
          <h2 className="text-5xl text-accent-secondary font-bold">{t('cv')}</h2>
        </div>

        <div className="flex font-heading gap-11 justify-center text-[1.3rem] mt-28 md:mt-16">
          <button className="bg-accent-primary text-white py-2 px-4 rounded-md">{t('buttonCV')}</button>
          <button className="bg-accent-secondary py-2 px-4 rounded-md text-white">{t('contact')}</button>
        </div>

        <div className="bg-bg-secondary py-2 px-2 mt-4 md:mt-8">
          <p className="text-secondary leading-0 mb-0 text-sm">{t('cvSubtitle')}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
