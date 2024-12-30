
import { useTranslation } from "react-i18next";
import Title from "../../Partial/Title";
import GraphicSkills from "./GraphicSkills";
import WebSkills from "./WebSkills";

const Skills = () => {

  const { t } = useTranslation('webSkills'); 

  
  return (
    <>
    <div className="mx-auto">
    <Title 
      id={"skills"} 
      title={t('webSkills:titleSkills')} 
      dot={t('webSkills:dot')} 
      children={t('webSkills:subTitleSkills')} 
      className="text-[#535437] dark:text-accent-primary bg-[#fff5d7] dark:bg-[#1b0909]" 
      sticky={true}/>
    {/* <AboutNav /> */}
      <WebSkills />
        <GraphicSkills />
    </div>
    </>
  );
};

export default Skills;
