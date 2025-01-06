import { useTranslation } from "react-i18next";
import SectionPlate from "../../Partial/SectionPlate";
import Title from "../../Partial/Title";
import GraphicSkills from "./GraphicSkills";
import OtherSkills from "./OtherSkills";
import WebSkills from "./WebSkills";

const Skills = () => {
  const { t } = useTranslation(["Profile/Skills/skills"]);

  return (
    <div className="mx-auto">
      <SectionPlate id="web">
        <Title
          title={t("webSkills.webSkillsTitle")}
          dot="."
          children="Skills related to web development."
          className="text-[#535437] dark:text-[#489c80] bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <WebSkills />
      </SectionPlate>

      <SectionPlate id="graphic">
        <Title
          title={t('graphicSkills.graphicSkillsTitle')}
          dot="."
          children={t("graphicSkills.subTitleGraphicSkills")}
          className="text-[#ca5b87] dark:text-accent-primary bg-accent-secondary dark:bg-amber-950"
          sticky
        />
        <GraphicSkills />
      </SectionPlate>

      <SectionPlate id="other-skills">
        <Title
          title="Other Skills"
          dot="."
          children="Other technical and soft skills."
          className="text-text-accent dark:text-[#b5685c] bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <OtherSkills />
      </SectionPlate>
    </div>
  );
};

export default Skills;
