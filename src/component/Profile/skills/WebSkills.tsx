import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import ProgressBar from "./ProgressBar";

const WebSkills = () => {
  const { t } = useTranslation("Profile/Skills/skills");
  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: false });


  const webSkills = [
    { name: 'C#', percentage: 70 },
    { name: 'ASP.Net Core', percentage: 60 },
    { name: 'Sql Server', percentage: 60 },
    { name: 'React', percentage: 80 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'HTML / CSS and Tailwind CSS', percentage: 90 },
    { name: 'Node js', percentage: 40 },
    { name: 'Git / terminal', percentage: 90 },
  ];

  return (
       <section  className="max-w-screen-xl mx-auto top-0 left-0 px-4 md:px-6 lg:px-10 py-8 md:py-12">
        <motion.div 
          ref={ref} 
          initial="hidden" 
          animate={ctrls} 
          variants={vars} 
          className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-8"
        >

          <h1 className="text-center text-hover-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-[#535437] dark:bg-[#69864e] dark:text-[#4b1718]  py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
            {t('webSkills.webbDev')}
          </h1>


          <div className="items-center md:row-start-2 md:col-start-1">
            <h2 className="font-textImportant text-4xl md:text-5xl text-[#535437] dark:text-[#69864e] mb-4 leading-10 font-bold text-center md:leading-[3rem]">
              {t('webSkills.titleCode')}
            </h2>
            <h3 className="text-text-secondary font-light leading-3 text-center">
              {t('webSkills.subTitleWebDev')}
            </h3>
          </div>
        
          <div className="items-center md:row-start-2 md:col-start-2">
            <h1 className="font-textImportant text-4xl md:text-5xl text-[#535437] dark:text-[#69864e] font-bold text-center mb-2">
              {t("webSkills.titleWeb")}
            </h1>
            <h3 className="text-center text-text-secondary not-italic font-light  ">
              {t('webSkills.titleWebDev')}
            </h3>
          </div>
        </motion.div>     

        <motion.div 
            ref={ref} 
            initial="hidden" 
            animate={ctrls} 
            variants={vars} 
            className="grid grid-cols-1 md:order-0 lg:grid-cols-[5%_50%_auto] gap-8 mb-8"
          >
            {/* Vertical Text Column */}
            <div className="hidden lg:block items-center justify-center">
              <h1 className="uppercase font-semibold font-sub-heading whitespace-pre-line text-[#535437] dark:text-[#69864e] tracking-widest transform rotate-180 [writing-mode:vertical-lr] text-center">
                {t('webSkills.webbDev')}
              </h1>
            </div>

          {/* Middle Column */}
          <div className="sm:col-span-1 order-last lg:order-none md:pr-8">
            <p className="italic font-medium underline decoration-wavy text-center underline-offset-8 derocation-text-secondary dark:decoration-text-secondary text-md md:text-2xl md:mb-8 text-[#535437] dark:text-[#69864e]">{t('webSkills.textTitleDevGoal')}</p>
            <h5 className="text-text-secondary not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('webSkills.titleBE') }}></h5>
            <p dangerouslySetInnerHTML={{ __html: t('webSkills.textBE') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('webSkills.textDB') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('webSkills.textAzure') }}></p>
            <h5 className="text-text-secondary not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('webSkills.titleFE') }}></h5>
            <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t('webSkills.textFE') }}></p>
            <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t('webSkills.textVue') }}></p>
            <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t('webSkills.textCMS') }}></p>
            <p className="text-text-primary mb-12" dangerouslySetInnerHTML={{ __html: t('webSkills.textAzure') }}></p>
            <p className="text-text-secondary font-sub-heading outline-dashed outline-2 outline-text-secondary dark:outline-[#69864e] outline-offset-4 italic font-normal py-2 px-4 p-2 rounded">
              {t('webSkills.textGoal')}
            </p>

          </div>

          {/* Skills Column */}
          <div className="col-span-2 md:col-span-1">
            {webSkills.map(skill => (
              <div key={skill.name}>
                <h2 className="text-sm text-text-secondary font-semibold mb-[0.15em]">{skill.name}</h2>
                <ProgressBar percentage={skill.percentage} />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
  );
};

export default WebSkills;
