import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import Title from "../../Partial/Title";
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
    <Title 
      id={"skills"} 
      title={t('webSkills:titleSkills')} 
      dot={t('webSkills:dot')} 
      children={t('webSkills:subTitleSkills')} 
      className="text-[#535437] dark:text-[#69864e] bg-[#fff5d7] dark:bg-[#1b0909]" 
      sticky={true}/>
       
       <div className="container mx-auto px-4 md:px-10 py-8 md:py-12">
      <motion.div 
        ref={ref} 
        initial="hidden" 
        animate={ctrls} 
        variants={vars} 
        className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-20 mb-8"
      >

        <h1 className="text-center text-hover-text text-2xl md:text-7xl bg-[#535437] dark:bg-[#69864e] dark:text-[#4b1718]  py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
          {t('webbDev')}
        </h1>


        <div className="items-center md:row-start-2 md:col-start-1">
          <h2 className="font-textImportant text-4xl md:text-5xl text-[#535437] dark:text-[#69864e] mb-4 leading-10 font-bold text-center md:leading-[3rem]">
            {t('titleCode')}
          </h2>
          <h3 className="text-text-secondary font-light leading-3 text-center">
            {t('subTitleWebDev')}
          </h3>
        </div>
      
        <div className="items-center md:row-start-2 md:col-start-2">
          <h1 className="font-textImportant text-4xl md:text-5xl text-[#535437] dark:text-[#69864e] font-bold text-center mb-2">
            {t("titleWeb")}
          </h1>
          <h3 className="text-center text-text-secondary not-italic font-light  ">
            {t('titleWebDev')}
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
