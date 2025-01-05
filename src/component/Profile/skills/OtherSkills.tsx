import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import ProgramAndSoftware from "./ProgramAndSoftware";

 const OtherSkills = () => {
    const { t } = useTranslation(["Profile/Skills/skills"]);
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: false });

return (
    <>
    <section>
        <motion.div  
            ref={ref} 
            initial="hidden" 
            animate={ctrls} 
            variants={vars} 
            className="max-w-screen-xl mx-auto px-4 md:px-10 py-8 md:py-12 grid grid-rows-1 sm:grid-cols-1 xl:grid-cols-3 gap-4xl:px-20 text-center mb-12 justify-center "
            >
            <div>
                <h1 className="text-center text-hover-text mb-8 text-2xl md:text-3xl lg:text-5xl bg-[#4b1718] dark:bg-[#48a07a] dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
                    {t('otherSkills.otherSkillsTitle')}
                </h1>

                    <h2 className="text-[#4b1718] dark:text-[#48a07a] font-textImportant text-4xl md:text-5xl mb-2 leading-none font-bold text-center md:leading-[3rem]">
                        {t('otherSkills.otherSkillsTitleLanguageAndDriving')}
                    </h2>
                    <h3 className="text-text-secondary font-light mb-12 leading-3 md:leading-none text-center">
                        {t('otherSkills.otherSkillsSubTitleLanguageAndDriving')}
                    </h3>

                    <div className="sm:col-span-1 md:pr-8 flex flex-col">
                    <p className="text-text-sub-heading not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline tracking-wider">{t('otherSkills.otherSkillsSwedishTitle').split(":")[0]}:</span>
                        {t('otherSkills.otherSkillsSwedishTitle').split(":")[1]}
                    </p>
                    <p className="not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline">
                            {t('otherSkills.otherSkillsEnglishTitle').split(":")[0]}:
                        </span>
                        {t('otherSkills.otherSkillsEnglishTitle').split(":")[1]}
                    </p>
                    <p className="not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline">
                            {t('otherSkills.otherSkillsDrivingTitle').split(":")[0]}:
                        </span>
                        {t('otherSkills.otherSkillsDrivingTitle').split(":")[1]}
                    </p>
                </div>

                <div 
                className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-8"
                 >
                <div>
                    <h1 className="text-center text-hover-text start-first md:start-none text-2xl md:text-3xl lg:text-5xl bg-[#4b1718] dark:bg-[#48a07a] dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
                    {t('otherSkills.otherSkillsTitle')}
                    </h1>
                </div>

                <div>
                    <h1 className="text-center text-hover-text text-2xl md:text-3xl start-last md:start-none  lg:text-5xl bg-[#4b1718] dark:bg-[#48a07a] dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
                        {t('programsAndSoftwares.programsAndSoftwaresTitle')}
                    </h1>
                </div>

                <div className="items-center md:row-start-2 md:col-start-1">
                    <h2 className="text-[#4b1718] dark:text-[#48a07a] font-textImportant text-4xl md:text-5xl mb-4 leading-10 font-bold text-center md:leading-[3rem]">
                        {t('otherSkills.otherSkillsTitleLanguageAndDriving')}
                    </h2>
                    <h3 className="text-text-secondary font-light  text-center">
                        {t('otherSkills.otherSkillsSubTitleLanguageAndDriving')}
                    </h3>
                </div>

                <div>
                    <div className="items-center md:row-start-2 md:col-start-1">
                        <h2 className="text-[#4b1718] dark:text-[#48a07a] font-textImportant text-4xl md:text-5xl mb-4 leading-10 font-bold text-center md:leading-[3rem]">
                            {t('programsAndSoftwares.programsAndSoftwareTitleProgram')}
                        </h2>
                        <h3 className="text-text-secondary font-light text-center">
                            {t('programsAndSoftwares.programsAndSoftwareSubTitleProgram')}
                        </h3>
                    </div>
                </div>
            </div>

                <div
                className="grid grid-cols-1 lg:grid-cols-[30%_auto] gap-4 mb-8"
            >
                <div className="sm:col-span-1 md:pr-8 flex flex-col">
                    <p className="text-text-sub-heading not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline tracking-wider">{t('otherSkillsSwedishTitle').split(":")[0]}:</span>
                        {t('otherSkills.otherSkillsSwedishTitle').split(":")[1]}
                    </p>
                    <p className="not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline">
                            {t('otherSkills.otherSkillsEnglishTitle').split(":")[0]}:
                        </span>
                        {t('otherSkills.otherSkillsEnglishTitle').split(":")[1]}
                    </p>
                    <p className="not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline">
                            {t('otherSkills.otherSkillsDrivingTitle').split(":")[0]}:
                        </span>
                        {t('otherSkills.otherSkillsDrivingTitle').split(":")[1]}
                    </p>
                </div>

                <section id="programsAndSoftwares">
                    <ProgramAndSoftware />
                </section>
            </div>
        </div>

        </motion.div>
    </section>

        {/* <section id="otherSkills" className="max-w-screen-xl mx-auto px-4 md:px-10 py-8 md:py-12">
            <motion.div 
                ref={ref} 
                initial="hidden" 
                animate={ctrls} 
                variants={vars} 
                className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-8"
            >
                <div>
                    <h1 className="text-center text-hover-text start-first md:start-none text-2xl md:text-3xl lg:text-5xl bg-[#4b1718] dark:bg-[#48a07a] dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
                    {t('otherSkills.otherSkillsTitle')}
                    </h1>
                </div>

                <div>
                    <h1 className="text-center text-hover-text text-2xl md:text-3xl start-last md:start-none  lg:text-5xl bg-[#4b1718] dark:bg-[#48a07a] dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
                        {t('programsAndSoftwares.programsAndSoftwaresTitle')}
                    </h1>
                </div>

                <div className="items-center md:row-start-2 md:col-start-1">
                    <h2 className="text-[#4b1718] dark:text-[#48a07a] font-textImportant text-4xl md:text-5xl mb-4 leading-10 font-bold text-center md:leading-[3rem]">
                        {t('otherSkills.otherSkillsTitleLanguageAndDriving')}
                    </h2>
                    <h3 className="text-text-secondary font-light  text-center">
                        {t('otherSkills.otherSkillsSubTitleLanguageAndDriving')}
                    </h3>
                </div>

                <div>
                    <div className="items-center md:row-start-2 md:col-start-1">
                        <h2 className="text-[#4b1718] dark:text-[#48a07a] font-textImportant text-4xl md:text-5xl mb-4 leading-10 font-bold text-center md:leading-[3rem]">
                            {t('programsAndSoftwares.programsAndSoftwareTitleProgram')}
                        </h2>
                        <h3 className="text-text-secondary font-light text-center">
                            {t('programsAndSoftwares.programsAndSoftwareSubTitleProgram')}
                        </h3>
                    </div>
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={ctrls}
                variants={vars}
                className="grid grid-cols-1 lg:grid-cols-[30%_auto] gap-4 mb-8"
            >
                <div className="sm:col-span-1 md:pr-8 flex flex-col">
                    <p className="text-text-sub-heading not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline tracking-wider">{t('otherSkillsSwedishTitle').split(":")[0]}:</span>
                        {t('otherSkills.otherSkillsSwedishTitle').split(":")[1]}
                    </p>
                    <p className="not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline">
                            {t('otherSkills.otherSkillsEnglishTitle').split(":")[0]}:
                        </span>
                        {t('otherSkills.otherSkillsEnglishTitle').split(":")[1]}
                    </p>
                    <p className="not-italic text-text-secondary">
                        <span className="font-medium dark:text-[#48a07a] font-sub-heading inline">
                            {t('otherSkills.otherSkillsDrivingTitle').split(":")[0]}:
                        </span>
                        {t('otherSkills.otherSkillsDrivingTitle').split(":")[1]}
                    </p>
                </div>

                <section id="programsAndSoftwares">
                    <ProgramAndSoftware />
                </section>
            </motion.div>
        </section> */}
        </>
    );
};

export default OtherSkills;