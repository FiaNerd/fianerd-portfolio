import { useTranslation } from "react-i18next";
import Title from "../../partials/Title";
import GraphicSkills from "./GraphicSkills";
import OtherSkills from "./OtherSkills";
import WebSkills from "./WebSkills";

const Skills = () => {
  const { t } = useTranslation(["profile/skills"]);

  return (
    <div className="mx-auto top-0 left-0 ">
      <section id="web">
        <Title
          title={t("webSkills.webSkillsTitle")}
          dot="."
          children={t("webSkills.subTitleWebSkills")}
          className="text-[#535437] dark:text-[#489c80] bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <WebSkills />
      </section>

      <section id="graphic" className="top-0 left-0">
        <Title
          title={t('graphicSkills.graphicSkillsTitle')}
          dot="."
          children={t("graphicSkills.subTitleGraphicSkills")}
          className="text-[#4b1718] dark:text-bg-secondary  bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <GraphicSkills />
      </section>

      <section id="other-skills" className="top-0 left-0">
        <Title
          title="Other Skills"
          dot="."
          children="Other technical and soft skills."
          className="text-[#bc3a08] dark:text-[#48a07a] bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <OtherSkills />
      </section>
    </div>
  );
};

export default Skills;
