import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import ProgramAndSoftware from "./ProgramAndSoftware";

 const OtherSkills = () => {
    const { t } = useTranslation(["Profile/Skills/skills"]);
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: false });

return (
    <section>
        <motion.div  
            ref={ref} 
            initial="hidden" 
            animate={ctrls} 
            variants={vars} 
            className="max-w-screen-xl mx-auto px-4 md:px-10 md:py-12 grid grid-rows-1 lg:grid-cols-2 gap-8 xl:px-20 text-center mb-12 lg:mb-20 justify-center "
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
                            <p className="not-italic text-text-secondary mb-12">
                                <span className="font-medium dark:text-[#48a07a] font-sub-heading inline">
                                    {t('otherSkills.otherSkillsDrivingTitle').split(":")[0]}:
                                </span>
                                    {t('otherSkills.otherSkillsDrivingTitle').split(":")[1]}
                            </p>
                        </div>
                    </div>

            <div>
                <section id="programsAndSoftwares" className="">
                    <ProgramAndSoftware />
                </section>
            </div>
        </motion.div>
        </section>
    );
};

export default OtherSkills;