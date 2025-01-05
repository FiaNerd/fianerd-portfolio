import { useTranslation } from "react-i18next";
const ProgramAndSoftware = () => {
    const { t } = useTranslation('Profile/Skills/programsAndSoftwares');
    //   const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: false });
  return (
    <>
     

    <div className="grid grid-rows-1 sm:grid-cols-1 xl:grid-cols-3 gap-4xl:px-20 text-center mb-12 jusity-center ">
        <div className="lg:col-start-1 lg:row-start-2 ">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 dark:border-[#a05a48] rounded '>
                {t("visualStudio")}
            </p>
        </div>
        
        <div className="lg:col-start-2 lg:row-start-1">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("Visual Studio Code")}
            </p>
        </div>
        
        <div className="lg:col-start-3 lg:row-start-3">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("Terminal")}
            </p>
        </div>

        <div className="lg:col-start-3 lg:row-start-3">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("git")}
            </p>
        </div>

        <div className="lg:col-start-3 lg:row-start-3">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("Insomnia / Postman / Swagger")}
            </p>
        </div>
        
        <div className="lg:col-start-3 lg:row-start-3">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("ux/ui")}
            </p>
        </div>
        
        
        <div className="lg:col-start-3 lg:row-start-3">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("photoshop")}
            </p>
        </div>
        
        <div className="lg:col-start-3 lg:row-start-3">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("illustrator")}
            </p>
        </div>
        
        <div className="lg:col-start-3 lg:row-start-3">
            <p className='font-textImportant text-xl md:text-4xl bg-slate-900 text-bg-primary dark:bg-[#a05a48] py-2 md:py-4 px-4 border-2 rounded dark:border-[#a05a48]'>
                {t("inDesign")}
            </p>
        </div>
    </div>

  {/* <div className='flex flex-col items-center max-w-[80%] md:max-w-[60%] mx-auto mb-12'>
    <h2 className='font-textImportant mx-auto text-6xl md:text-8xl text-center text-accent-secondary dark:text-[#a05a48]'>{t('thanksHobbie')}</h2>
    <h2 className='font-textImportant text-4xl md:text-6xl text-center'>{t("thanksIntro")}</h2>
    <p className='font-sub-heading text-2xl md:text-3xl text-center text-text-secondary mb-8 md:mb-12'  
        dangerouslySetInnerHTML={{__html: t('thanksEnd')}}></p>
  </div> */}
</>

)
}

export default ProgramAndSoftware