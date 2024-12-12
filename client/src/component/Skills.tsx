import { useTranslation } from "react-i18next";
import TitleAnimation from "./Partial/TitleAnimation";

const Skills = () => {
  const { t } = useTranslation('skills');
  
  
  return (
    <>
      <TitleAnimation title={t('titleSkills')} dot="."/>

    </>
  );
};

export default Skills;
