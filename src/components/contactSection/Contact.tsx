import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";

const Contact = () => {
    const {t } = useTranslation('contact');
    const methods = useForm()
    
  return (
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center px-4">
        <p className="dark:bg-[#1d1617] py-4 px-8 rounded-lg max-w-screen-md mb-12">{t('contactIntro')}</p>
        <div className="dark:bg-[#1d1617] flex flex-col items-center max-w-screen-lg py-4 px-8 rounded-lg">
        <FormProvider {...methods}>
            <form className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-text-secondary dark:text-text-primary">{t('name')}</label>
                    <input type="text" id="name" {...methods.register('name')} className="dark:bg-[#1d1617] dark:text-text-primary dark:border-accent-primary dark:border-2 rounded-lg p-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-text-secondary dark:text-text-primary">{t('email')}</label>
                    <input type="email" id="email" {...methods.register('email')} className="dark:bg-[#1d1617] dark:text-text-primary dark:border-accent-primary dark:border-2 rounded-lg p-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-text-secondary dark:text-text-primary">{t('message')}</label>
                    <textarea id="message" {...methods.register('message')} className="dark:bg-[#1d1617] dark:text-text-primary dark:border-accent-primary dark:border-2 rounded-lg p-2" />
                </div>
                <button type="submit" className="dark:bg-[#1d1617] dark:text-text-primary dark:border-accent-primary dark:border-2 rounded-lg p-2">{t('send')}</button>
            </form>
        </FormProvider>

        </div>
    </div>
  )
}

export default Contact

