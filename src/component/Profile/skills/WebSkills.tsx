import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import ProgressBar from "./ProgressBar";

const WebSkills = () => {
  const { t } = useTranslation("webSkills");
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
    <>
       
      <div className="container mx-auto px-4 md:px-10 py-8 md:py-12">

        <motion.div  ref={ref} 
          initial="hidden" 
          animate={ctrls} 
          variants={vars} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
            <h1 className="font-textImportant text-4xl md:text-5xl text-[#535437] dark:text-[#69864e] md:mb-4 font-bold text-center">
              {t('titleWeb')}
            </h1>
            <h3 className="text-text-secondary font-normal text-center">
              {t('titleWebDev')}
            </h3>
          </div>

            <div>
              <h2 className="font-textImportant text-4xl md:text-5xl text-[#535437] dark:text-[#69864e] md:mb-4 font-bold text-center md:leading-[3.7rem]">
                {t('titleCode')}
              </h2>
              <h3 className="text-text-sub-heading leading-4 text-text-secondary font-normal text-center">
                  {t('subTitleWebDev')}
              </h3>
            </div>
        </motion.div>

      <motion.div 
          ref={ref} 
          initial="hidden" 
          animate={ctrls} 
          variants={vars} 
          className="grid grid-cols-1 md:grid-cols-[5%_50%_auto] gap-8 mb-8"
        >
          {/* Vertical Text Column */}
          <div className="flex items-center justify-center">
            <h1 className="uppercase font-semibold whitespace-pre-line text-[#535437] dark:text-[#69864e] tracking-widest transform rotate-180 [writing-mode:vertical-lr] text-center">
              {t('webbDev')}
            </h1>
          </div>

        {/* Middle Column */}
        <div className="sm:col-span-1 md:pr-8">
          <h5 className="text-text-secondary not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('titleBE') }}></h5>
          <p dangerouslySetInnerHTML={{ __html: t('textBE') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('textDB') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('textAzure') }}></p>
          <h5 className="text-text-secondary not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('titleFE') }}></h5>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t('textFE') }}></p>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t('textVue') }}></p>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t('textCMS') }}></p>
          <p className="text-text-primary mg-8" dangerouslySetInnerHTML={{ __html: t('textAzure') }}></p>
          <p className="text-hover-text dark:text-bg-primary italic font-normal py-2 px-4 bg-[#535437] dark:bg-[#69864e] p-2 rounded-md">
            {t('textGoal')}
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

      </div>
    </>
  );
};

export default WebSkills;
