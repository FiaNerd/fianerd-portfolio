import { useTranslation } from "react-i18next";
import Title from "../../partials/Title";
import GraphicSkills from "./GraphicSkills";
import OtherSkills from "./OtherSkills";
import WebSkills from "./WebSkills";
import useScrollUpdateURL from "../../../hook/useScrollUpdate";

const Skills = () => {
  const { t } = useTranslation(["profile/skills"]);

  useScrollUpdateURL();

  return (
    <div className="mx-auto top-0 left-0 ">
      <section id="web-skills">
        <Title
          title={t("webSkills.webSkillsTitle")}
          dot="."
          children={t("webSkills.subTitleWebSkills")}
          light="text-[#535437] bg-[#fff5d7]"
          dark="dark:text-[#489c80] dark:bg-[#1b0909]"
          sticky
        />
        <WebSkills />
      </section>
      

      <section id="graphic-skills" className="top-0 left-0">
        <Title
          title={t('graphicSkills.graphicSkillsTitle')}
          dot="."
          children={t("graphicSkills.subTitleGraphicSkills")}
          className="text-[#4b1718] dark:text-bg-secondary  bg-[#fff5d7] dark:bg-[#1b0909]"
          light="text-[#4b1718] bg-[#fff5d7]"
          dark="dark:text-bg-secondary dark:bg-[#1b0909]"
          sticky
        />
        <GraphicSkills />
      </section>

      <section id="other-skills" className="top-0 left-0">
        <Title
          title={t("otherSkills.otherSkillsTitle")}
          dot="."
          children={t("otherSkills.subTitleOtherSkills")}
          className="text-[#bc3a08] dark:text-[#69864e] bg-[#fff5d7] dark:bg-[#1b0909]"
          light="text-[#bc3a08] bg-[#fff5d7]"
          dark="dark:text-[#69864e] dark:bg-[#1b0909]"
          sticky
        />
        <OtherSkills />
      </section>
    </div>
  );
};

export default Skills;
