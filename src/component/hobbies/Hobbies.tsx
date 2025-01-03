import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Title from '../Partial/Title';

const Hobbies = () => {
    const { t } = useTranslation("hobbies");
    return (
        <>
            <Title 
                title={t('titleHobbie')} 
                id={'hobbies'} 
                dot={'!'} 
                children={t('subTitleHobbie')} 
                className="text-hover-text dark:text-accent-primary bg-slate-900 dark:bg-stone-950" 
                subHeadingClassName="text-hover-text dark:text-text-secondary px-4" 
                sticky={true} 
            />
            <p className='md:text-xl px-4 pb-8 justify-center mx-auto max-w-[80%] text-text-secondary'>{t('introHobbie')}</p>

            <div className="grid grid-rows-1 sm:grid-cols-1 xl:grid-cols-3 gap-4 px-4 xl:px-20 text-center mb-12 jusity-center ">
                {/* Musik */}
                <div className="lg:col-start-1 lg:row-start-2 ">
                    <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-accent-primary py-2 md:py-4 px-4 border-2 dark:border-accent-primary rounded '>
                        {t("music")}
                    </p>
                </div>
                
                {/* Konsert & Festival */}
                <div className="lg:col-start-2 lg:row-start-1">
                    <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-accent-primary py-2 md:py-4 px-4 border-2 rounded dark:border-accent-primary'>
                        {t("consertAndFestival")}
                    </p>
                </div>
                
                {/* Film & Serier */}
                <div className="lg:col-start-3 lg:row-start-3">
                    <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-accent-primary py-2 md:py-4 px-4 border-2 rounded dark:border-accent-primary'>
                        {t("filmAndSeries")}
                    </p>
                </div>
            </div>

          <div className='flex flex-col items-center max-w-[80%] md:max-w-[60%] mx-auto mb-12'>
            <h2 className='font-textImportant mx-auto text-6xl md:text-8xl text-center text-accent-secondary dark:text-accent-primary'>{t('thanksHobbie')}</h2>
            <h2 className='font-textImportant text-4xl md:text-6xl text-center'>{t("thanksIntro")}</h2>
            <p className='font-sub-heading text-2xl md:text-3xl text-center text-text-secondary mb-8 md:mb-12'  
                dangerouslySetInnerHTML={{__html: t('thanksEnd')}}></p>
            <NavLink to="#"
          className="font-sub-heading bg-transparent items-start text-btn-bg text-2xl md:text-4xl font-medium hover:shadow-lg border-2 md:border-4 hover:bg-bg-hover tracking-wider hover:text-bg-primary rounded shadow py-2 md:py-4 px-4 md:px-8 border-btn-bg hover:border-transparent">
          {t("contactHobbie")}</NavLink>
          </div>
        </>
    );
};

export default Hobbies;
