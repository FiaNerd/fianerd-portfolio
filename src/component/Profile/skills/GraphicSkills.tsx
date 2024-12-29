import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import ProgressBar from "./ProgressBar";

const GraphicSkills = () => {
  const { t } = useTranslation("graphicSkills");
  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

  const skillsGraphic = [
    { name: "PhotoShop", percentage: 80 },
    { name: "Illustrator", percentage: 90 },
    { name: "InDesign", percentage: 60 },
    { name: "UX / UI", percentage: 40 },
  ];

  return (
    <div className="container mx-auto px-4 md:px-10 py-8 md:py-12">
        <motion.div 
           ref={ref} 
           initial="hidden" 
           animate={ctrls} 
           variants={vars} 
           className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

             <div className="items-center">
              <h1 className="text-[#4b1718] dark:text-bg-secondary  font-bold text-center mb-2 whitespace-break-spaces">
                {t("graphicSkills:titleGraphic")}
              </h1>
              <h3 className="text-center text-text-secondary not-italic font-light whitespace-break-spaces ">
                {t('titleGraphicSkills')}
              </h3>
            </div>

            <div>
              <h1 className="text-[#4b1718] dark:text-bg-secondary  mb-4 leading-10 font-bold text-center md:leading-[3rem]">
                {t('titleGraphicSkills')}
              </h1>
              <h3 className="text-text-secondary font-light text-center">
                {t('subTitleGraphic')}
              </h3>
            </div>

          </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={vars}
        className="grid grid-cols-1 md:grid-cols-[5%_50%_auto] gap-4 mb-8"
      >

        
        {/* Vertical Text Column */}
        <div className="flex items-center justify-center">
          <h1 className="text-[#4b1718] dark:text-bg-secondary font-semibold tracking-widest transform rotate-180 [writing-mode:vertical-lr] text-center">
            {t("graphicTitle").toUpperCase()}
          </h1>
        </div>

        {/* Middle Column */}
        <div className="sm:col-span-1 md:pr-8 flex flex-col justify-between	">
          <p className="text-text-sub-heading not-italic" dangerouslySetInnerHTML={{ __html: t("textPS") }}></p>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t("textAI") }}></p>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t("textID") }}></p>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t("textUX/UI") }}></p>
          <p className="text-hover-text dark:text-bg-primary italic font-normal py-2 px-4 bg-[#4b1718] dark:bg-bg-secondary">
            {t("textGoal")}
          </p>
        </div>

        {/* Skills Column */}
        <div className="col-span-2 md:col-span-1">
          
          {skillsGraphic.map((skill) => (
            <div key={skill.name}>
              <h2 className="text-sm text-text-secondary dark:text-text-secondary font-semibold mb-[0.15em]">
                {skill.name}
              </h2>
              <ProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GraphicSkills;
