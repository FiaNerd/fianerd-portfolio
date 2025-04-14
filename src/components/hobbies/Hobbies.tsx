import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Hobbies = () => {
    const { t } = useTranslation("profile/hobbies");

    return (
        <section className='max-w-screen-2xl mx-auto'>
            <p className='px-4 pb-8 justify-center mx-auto lg:max-w-[80%] text-text-secondary'>{t('introHobbie')}</p>

            <div className="grid grid-rows-1 sm:grid-cols-1 xl:grid-cols-3 gap-4 px-4 xl:px-20 text-center mb-12">
                {/* Musik */}
                <div className="lg:col-start-1 lg:row-start-2">
                    <h3 className='flex justify-center font-textImportant text-[#b67076] dark:text-bg-primary bg-[#3e3a19] dark:bg-accent-primary py-2 md:py-4 px-4 border-2 dark:border-accent-primary rounded'>
                        {t("music")}
                    </h3>
                </div>

                {/* Konsert & Festival */}
                <div className="lg:col-start-2 lg:row-start-1">
                    <h3 className='flex align-middle justify-center font-textImportant text-[#b67076] dark:text-bg-primary bg-[#3e3a19] dark:bg-accent-primary py-2 md:py-4 px-4 border-2 rounded dark:border-accent-primary'>
                        {t("consertAndFestival")}
                    </h3>
                </div>

                {/* Film & Serier */}
                <div className="lg:col-start-3 lg:row-start-3">
                    <h3 className='flex justify-center font-textImportant text-[#b67076] dark:text-bg-primary bg-[#3e3a19] dark:bg-accent-primary py-2 md:py-4 px-4 border-2 rounded dark:border-accent-primary'>
                        {t("filmAndSeries")}
                    </h3>
                </div>
            </div>

            <div className='flex flex-col items-center max-w-[80%] md:max-w-[60%] mx-auto mb-12'>
                <h2 className='font-textImportant mx-auto text-center text-accent-secondary dark:text-accent-primary'>{t('thanksHobbie')}</h2>
                <h2 className='font-textImportant text-center'>{t("thanksIntro")}</h2>
                <h4 className='font-sub-heading text-center text-text-secondary mb-8 md:mb-12'  
                    dangerouslySetInnerHTML={{__html: t('thanksEnd')}}></h4>
                <NavLink to="/contact"
                    className="flex flex-row items-center text-lg md:text-3xl gap-4 justify-center font-sub-heading bg-transparent text-btn-bg font-medium hover:shadow-lg border-2 md:border-4 hover:bg-bg-hover tracking-wider hover:text-bg-primary rounded shadow py-2 md:py-4 px-4 md:px-8 border-btn-bg hover:border-transparent">
                    <Icon icon="line-md:email-twotone" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /> {t("contactHobbie")}
                </NavLink>
            </div>
        </section>
    );
};

export default Hobbies;