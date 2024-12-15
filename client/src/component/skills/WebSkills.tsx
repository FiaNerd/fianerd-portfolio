import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";
import ProgressBar from "./ProgressBar";

const WebSkills = () => {
    const { t } = useTranslation("skills");
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

    const skills = [
      { name: 'C#', percentage: 70 },
      { name: 'ASP.Net Core', percentage: 60 },
      { name: 'Sql Server', percentage: 60 },
      { name: 'React', percentage: 80 },
      { name: 'Tailwind CSS', percentage: 90 },
      { name: 'Node js', percentage: 40 },
      { name: 'Git / terminal', percentage: 90 },
    ];

    console.log(skills.map(x => x.percentage))
    return (
      <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="grid grid-row-2 md:grid-cols-2 gap-4 pl-4 pr-8 mb-4">
        <div className="items-center">
          <h1 className="text-amber-950 dark:text-text-heading mb-4 font-bold text-center mb-0 whitespace-break-spaces">
            {t("skills:titleWeb")}
          </h1>
          <h5 className="text-center text-text-sub-heading not-italic whitespace-break-spaces font-bold">
            {t('textTitleGoal')}
          </h5>
        </div>
        <div>
          <h2 className="text-amber-950 dark:text-text-heading mb-0 font-bold text-center leading-[2.5rem]">
            {t('titleWebDev')}
          </h2>
          <h3 className="text-text-sub-heading font-bold text-center">
            {t('subTitleWebDev')}
          </h3>
        </div>
        <div className=" whitespace-break-spaces">
          <h5 className="text-text-sub-heading not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('titleBE') }}></h5>
          <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textBE') }}></p>
          <h5 className="text-text-sub-heading not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('titleFE') }}></h5>
          <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textFE') }}></p>
          <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textCMS') }}></p>
          <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textAzure') }}></p>
          <p className="text-text-sub-heading italic font-light">
            {t('textGoal')}
          </p>
        </div>
        <div className="md:pl-8">
          {/* <h1 className="text-2xl text-text-sub-heading font-bold mb-4">My Skills</h1> */}
          {skills.map(skill => (
            <div key={skill.name}>
              <h2 className="text-sm text-amber-950 dark:text-text-secondary font-semibold mb-[0.15em]">{skill.name}</h2>
              <ProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </motion.div>
    );
};

export default WebSkills;
