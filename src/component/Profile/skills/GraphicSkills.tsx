import { useTranslation } from "react-i18next";
import ProgressBar from "./ProgressBar";

const GraphicSkills = () => {
  const { t } = useTranslation("Profile/skills");

  const skillsGraphic = [
    { name: "PhotoShop", percentage: 80 },
    { name: "Illustrator", percentage: 90 },
    { name: "InDesign", percentage: 60 },
    { name: "UX / UI", percentage: 40 },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-8 md:py-12">
      <div 
        className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-8"
      >
        {/* H1 in the first row, first column */}
        <h1 className="text-center text-hover-text text-2xl md:text-3xl lg:text-5xl bg-[#4b1718]  dark:bg-bg-secondary dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
          {t('graphicSkills.graphicTitle')}
        </h1>

          <div className="items-center md:row-start-2 md:col-start-1">
          <h2 className="text-[#4b1718] font-textImportant text-4xl md:text-5xl dark:text-bg-secondary mb-4 leading-10 font-bold text-center md:leading-[3rem]">
            {t('graphicSkills.titleDesign')}
          </h2>
          <h3 className="text-text-secondary font-light leading-3 text-center">
            {t('graphicSkills.subTitleGraphic')}
          </h3>
        </div>

        <div className="items-center md:row-start-2 md:col-start-2">
          <h1 className="text-[#4b1718] dark:text-bg-secondary font-textImportant text-4xl md:text-5xl font-bold text-center mb-2 whitespace-break-spaces">
            {t("graphicSkills.titleGraphic")}
          </h1>
          <h3 className="text-center text-text-secondary not-italic font-light whitespace-break-spaces ">
            {t('graphicSkills.titleGraphicSkills')}
          </h3>
        </div>

      </div>


      <div
        className="grid grid-cols-1 lg:grid-cols-[5%_50%_auto] gap-4 mb-8"
      >

        
        {/* Vertical Text Column */}
        <div className="items-center justify-center hidden lg:block">
          <h1 className="text-[#4b1718] dark:text-bg-secondary font-semibold tracking-widest transform rotate-180 [writing-mode:vertical-lr] text-center">
            {t("graphicSkills.graphicTitle").toUpperCase()}
          </h1>
        </div>

        {/* Middle Column */}
        <div className="sm:col-span-1 order-last lg:order-none md:pr-8 flex flex-col justify-between	">
           <p className="italic font-medium font-sub-heading underline decoration-wavy text-[#4b1718] dark:text-bg-secondary dark:decoration-text-secondary underline-offset-8 text-md md:text-xl mb-6">{t('graphicSkills.textTitleGraphicGoal')}</p>
          <p className="text-text-sub-heading not-italic" dangerouslySetInnerHTML={{ __html: t("graphicSkills.textPS") }}></p>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t("graphicSkills.textAI") }}></p>
          <p className="text-text-primary" dangerouslySetInnerHTML={{ __html: t("graphicSkills.textID") }}></p>
          <p className="text-text-primary mb-12" dangerouslySetInnerHTML={{ __html: t("graphicSkills.textUX/UI") }}></p>
          <p className="text-[#4b1718] dark:text-text-secondary font-sub-heading outline-dashed outline-2 outline-[#4b1718] dark:outline-bg-secondary outline-offset-4 italic font-normal py-2 px-4 p-2 rounded">
            {t('graphicSkills.textGoal')}
          </p>
        </div>

        {/* Skills Column */}
        <div className="col-span-2 md:col-span-1 order-first lg:order-none">
          
          {skillsGraphic.map((skill) => (
            <div key={skill.name}>
              <h2 className="text-sm text-text-secondary dark:text-text-secondary font-semibold mb-[0.15em]">
                {skill.name}
              </h2>
              <ProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicSkills;
