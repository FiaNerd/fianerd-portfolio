import { useTranslation } from 'react-i18next';
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

            <div className="grid grid-rows-1 sm:grid-cols-1 xl:grid-cols-3 gap-4 px-4 xl:px-20 text-center mb-12 jusity-center">
                {/* Musik */}
                <div className="lg:col-start-1 lg:row-start-2">
                    <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-accent-primary py-4 px-4'>
                        {t("music")}
                    </p>
                </div>
                
                {/* Konsert & Festival */}
                <div className="lg:col-start-2 lg:row-start-1">
                    <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-accent-primary py-4 px-4'>
                        {t("consertAndFestival")}
                    </p>
                </div>
                
                {/* Film & Serier */}
                <div className="lg:col-start-3 lg:row-start-3">
                    <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-accent-primary py-4 px-4'>
                        {t("filmAndSeries")}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Hobbies;
