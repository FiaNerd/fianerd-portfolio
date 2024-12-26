import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import Title from "../../Partial/Title";
import AboutNav from "../about/AboutNav";
import ProgressBar from "./ProgressBar";

const WebSkills = () => {
  const { t } = useTranslation("webSkills");
  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });


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
        <Title id={"skills"} title={t('webSkills:titleSkills')} dot={t('webSkills:dot')} children={t('webSkills:subTitleSkills')} />
        <AboutNav />
      <div className="container mx-auto px-4 md:px-10 py-8 md:py-12">

        <motion.div  ref={ref} 
          initial="hidden" 
          animate={ctrls} 
          variants={vars} 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
            <h1 className="text-amber-950 dark:text-text-heading mb-0 font-bold text-center md:leading-[2.5rem]">
              {t('titleWeb')}
            </h1>
            <h3 className="text-text-sub-heading font-bold text-center">
              {t('titleWebDev')}
            </h3>
          </div>

            <div>
              <h2 className="text-amber-950 dark:text-text-heading mb-0 font-bold text-center md:leading-[2.5rem]">
                {t('titleWebDev')}
              </h2>
              <h3 className="text-text-sub-heading font-bold text-center">
                  {t('subTitleWebDev')}
              </h3>
            </div>
        </motion.div>

      <motion.div 
          ref={ref} 
          initial="hidden" 
          animate={ctrls} 
          variants={vars} 
          className="grid grid-cols-1 md:grid-cols-[5%_45%_auto] gap-4 mb-8"
        >
          {/* Vertical Text Column */}
          <div className="flex items-center justify-center">
            <h1 className="font-semibold transform rotate-180 [writing-mode:vertical-lr] text-center">
              {t('webbDev').toUpperCase()}
            </h1>
          </div>

        {/* Middle Column */}
        <div className="sm:col-span-1 md:pr-8">
          <h5 className="text-text-sub-heading not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('titleBE') }}></h5>
          <p className="text-amber-950 dark:text-text-secondary" dangerouslySetInnerHTML={{ __html: t('textBE') }}></p>
          <h5 className="text-text-sub-heading not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('titleFE') }}></h5>
          <p className="text-amber-950 dark:text-text-secondary" dangerouslySetInnerHTML={{ __html: t('textFE') }}></p>
          <p className="text-amber-950 dark:text-text-secondary" dangerouslySetInnerHTML={{ __html: t('textCMS') }}></p>
          <p className="text-amber-950 dark:text-text-secondary" dangerouslySetInnerHTML={{ __html: t('textAzure') }}></p>
          <p className="text-text-sub-heading italic font-light">
            {t('textGoal')}
          </p>
        </div>

        {/* Skills Column */}
        <div className="col-span-2 md:col-span-1">
          {webSkills.map(skill => (
            <div key={skill.name}>
              <h2 className="text-sm text-amber-950 dark:text-text-secondary font-semibold mb-[0.15em]">{skill.name}</h2>
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
