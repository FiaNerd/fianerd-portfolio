import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";
import { motion } from "framer-motion";
import AboutNav from "../about/AboutNav";
import ProgressBar from "./ProgressBar";

const GraphicSkills = () => {
    const { t } = useTranslation("graphicSkills");
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

    const skillsGraphic = [
      { name: 'PhotoShop', percentage: 80 },
      { name: 'Illustrator', percentage: 90 },
      { name: 'InDesign', percentage: 60 },
      { name: 'UX / UI', percentage: 40 },
    ];

  return (
   <div className="max-w-screen-xl mx-auto">
      <AboutNav />
      <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 mb-4 ">
        <div className="items-center">
          <h1 className="text-amber-950 dark:text-text-heading mb-4 font-bold text-center mb-0 whitespace-break-spaces">
            {t("graphicSkills:titleGraphic")}
          </h1>
          <h5 className="text-center text-text-sub-heading not-italic whitespace-break-spaces font-bold">
            {t('titleGraphicSkills')}
          </h5>
        </div>

        {/* TODO: Add a small litle picture her for the desktop verison and it will dissapear for mobile */}

        {/* <div>
          <h2 className="text-amber-950 dark:text-text-heading mb-0 font-bold text-center leading-[2.5rem]">
            {t('titleWebDev')}
          </h2>
          <h3 className="text-text-sub-heading font-bold text-center">
            {t('subTitleWebDev')}
          </h3>
        </div> */}
        </motion.div>
       < motion.div className="whitespace-break-spaces grid  grid-cols-[5%_1fr] md:grid-cols-[auto_50%_1fr] gap-4">

          <div className="flex items-center justify-center">
            <h1  className="font-semibold transform rotate-180 [writing-mode:vertical-lr]">{t('graphicTitle').toUpperCase()} </h1>
          </div>
          <div className="sm:col-span-1 md:pr-8">
            <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textPS') }}></p>
            <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textAI') }}></p>
            <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textID') }}></p>
            <p className="text-amber-950 dark:text-text-secondary " dangerouslySetInnerHTML={{ __html: t('textUX/UI') }}></p>

            <p className="text-text-sub-heading italic font-light">
              {t('textGoal')}
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
          <div>
          <h2 className="text-amber-950 dark:text-text-heading mb-0 font-bold text-center md:leading-[2.5rem]">
            {t('titleGraphicSkills')}
          </h2>
          <h3 className="text-text-sub-heading font-bold text-center">
            {t('subTitleGraphic')}
          </h3>
        </div>
            {skillsGraphic.map(skill => (
              <div key={skill.name} className="mb-8">
                <h2 className="text-sm text-amber-950 dark:text-text-secondary font-semibold mb-[0.15em]">{skill.name}</h2>
                <ProgressBar percentage={skill.percentage} />
              </div>
            ))}
          </div>
          
      </motion.div>
   </div>
  );
};

export default GraphicSkills;