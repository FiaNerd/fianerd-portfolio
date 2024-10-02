import { useTranslation } from "react-i18next"
import ResponsiveHeroImage from "./ResponsiveHeroImage"

function HeroSection() {
  const { t } = useTranslation('heroSection')

  return (
    <div className="relative w-screen mb-12">
      
      <div className="absolute pl-4 pr-4 inset-0 flex flex-col md:justify-center mt-2 gap-2 md:gap-8 z-10 text-center lg:max-w-[18em] md:pl-4">
        <div className=" items-center">
          <p className="absolute ml-[7.7em] mt-2 font-heading text-2xl font-light leading-0 text-right">{t('smallTitle')}</p>
          <h1 className="text-accent-secondary mb-0 mt-6">{t('title')}</h1>
        </div>

        <div className="font-heading">
          <p className="absolute font-bold">{t('titleName')} <span className="font-normal">{t('titleSpan')}</span></p>
          <h2 className="text-4xl mt-4 font-bold text-accent-secondary text-left tracking-tighter">{t('name')}</h2>
          <p className="absolute font-heading font-light left-[4.8em] top-[calc(100%-27.5rem)] md:top-[calc(100%+1rem)] lg:top-[calc(100%+1.5rem)]">{t('subTitleName')}</p>
          {/* Justera top-värden för att passa din design */}
        </div>

        <div >
          <p className="absolute top-[calc(100%-26rem)] left-[17.4rem] font-heading">{t('subtitle')}</p>
          <h2 className="text-5xl text-accent-secondary text-right font-bold">{t('cv')}</h2>
          {/* <h2 className="text-5xl text-accent-secondary text-right font-bold"><span className="pr-2 font-heading text-sm font-normal text-text-secondary">{t('subtitle')}</span>{t('cv')}</h2> */}

          
        </div>

        <div className="flex font-heading gap-4 justify-center text-md">
          <button className="color-btn-primary">{t('buttonCV')}</button>
          <button className="color-btn-primary">{t('contact')}</button>
        </div>

        <p>{t('cvSubtitle')}</p>
      </div>

      <ResponsiveHeroImage />
    </div>
  )
}

export default HeroSection
