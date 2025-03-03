import { useTranslation } from "react-i18next";

const Contact = () => {
    const {t } = useTranslation('contact');
    
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col items-center px-4">
        <p className="dark:bg-[#1d1617] py-4 px-8 rounded-lg max-w-screen-md mb-12">{t('contactIntro')}</p>
        <div className="dark:bg-[#1d1617] flex flex-col items-center max-w-screen-lg py-4 px-8 rounded-lg">
            <label htmlFor="name" className="dark:text-[#c6aa72]">{t('contactName')}</label>
            <input type="text" />
        </div>
    </div>
  )
}

export default Contact