import { useTranslation } from "react-i18next"
import ResponsiveHeroImage from "./ResponsiveHeroImage"

function HeroSection() {
  const { t } = useTranslation('heroSection')

  // bg-[url('/assets/images/bg-light-img.jpg')] dark:bg-[url('/assets/images/bg-dark-img.jpg')]
  return (
    <div className="w-screen h-auto  bg-center md:grid-cols-2 object-cover mb-12">
      <div className="flex flex-col justify-center mx-auto">
        {/* <h1 className="text-3xl md:text-5xl font-bold">{t('title')}</h1>
        <h3 className="text-xl md:text-3xl">{t('subtitle')}</h3> */}
      </div>

      <ResponsiveHeroImage />

    </div>
  )
}

export default HeroSection
