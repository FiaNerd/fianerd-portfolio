import { useTranslation } from "react-i18next";
const ProgramAndSoftware = () => {
    const { t } = useTranslation('Profile/Skills/programsAndSoftwares');
  return (
    <>
        <div className="mb-8">
            <h1 className="text-center text-hover-text text-2xl md:text-3xl start-last md:start-none  lg:text-5xl bg-[#4b1718] dark:bg-[#a05a48] dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
                {t('programsAndSoftwares.programsAndSoftwaresTitle')}
            </h1>
        </div>

        <div className="items-center md:row-start-2 md:col-start-1 mb-12">
            <h2 className="text-[#4b1718] dark:text-[#a05a48] mb-0 font-textImportant text-4xl md:text-5xl font-bold text-center md:leading-[3rem]">
                {t('programsAndSoftwares.programsAndSoftwareTitleProgram')}
            </h2>
            <h3 className="text-text-secondary font-light text-center">
                {t('programsAndSoftwares.programsAndSoftwareSubTitleProgram')}
            </h3>
        </div>


    <div className="grid grid-rows-1 md:grid-cols-2 gap-x-6 gap-y-2 text-center mb-12 jusity-center">
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4 '>
                {t("visualStudio").split("-")[0]}
                <span className="font-sub-heading text-xl text-text-secondary">
                 {t("visualStudio").split("-")[1]}
                </span>
            </p>
        
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4 '>
                {t("visualStudioCode").split("-")[0]}
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("visualStudioCode").split("-")[1]}
                </span>
            </p>
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4'>
                {t("terminal").split("-")[0]}
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("terminal").split("-")[1]}
                </span>
            </p>
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4'>
                {t("git").split("-")[0]}  
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("git").split("-")[1]}
                </span>  
            </p>
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4'>
                {t("dataRequest").split("-")[0]}
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("dataRequest").split("-")[1]}
                </span>
            </p>
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4'>
                {t("ux/ui").split("-")[0]}
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("ux/ui").split("-")[1]}
                </span>
            </p>
        
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] py-2 outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 md:py-4 px-4'>
                {t("photoshop").split("-")[0]}  
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("photoshop").split("-")[1]}
                </span>
            </p>
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4'>
                    {t("illustrator").split("-")[0]}
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("illustrator").split("-")[1]}
                </span>
            </p>
            <p className='font-textImportant text-2xl text-bg-primary dark:text-[#a05a48] outline-dashed outline-2 outline-text-secondary dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4'>
                {t("inDesign").split("-")[0]}
                <span className="font-sub-heading text-xl text-text-secondary">
                    {t("inDesign").split("-")[1]}
                </span>
            </p>
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