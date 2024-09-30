import { useTranslation } from "react-i18next"

function HeroSection() {
    const { t } = useTranslation('heroSection')
  return (
    <div className="grid grid-cols-2 gap-4 bg-cover bg-[url('/assets/images/bg-light-img.jpg')] dark:bg-[url('/assets/images/bg-dark-img.jpg')] ">
       <div className="flex flex-col justify-center mx-auto p-12 gap-8">
       <h1>{t('title')}</h1>
       <h3>{t('subtitle')}</h3>
        </div>
        <img src="/assets/images/heroImage_desktop.png" alt="hero image Sofia" className="bg-cover w-full"/>
    </div>
  )
}

export default HeroSection