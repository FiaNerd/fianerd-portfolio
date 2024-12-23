
import SectionPlate from "../../Partial/SectionPlate";
import GraphicSkills from "./GraphicSkills";
import WebSkills from "./WebSkills";

const Skills = () => {

  
  return (
    <>
    <div className="mx-auto">
      <WebSkills />
      <SectionPlate className="bg-bg-plate  w-full ">
        <GraphicSkills />
      </SectionPlate>
    </div>
    </>
  );
};

export default Skills;
