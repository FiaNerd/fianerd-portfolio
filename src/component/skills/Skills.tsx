
import SectionPlate from "../Partial/SectionPlate";
import GraphicSkills from "./GraphicSkills";
import WebSkills from "./WebSkills";

const Skills = () => {

  
  return (
    <>
    <section className="mx-auto mb-8">
      <WebSkills />
      <SectionPlate className="bg-bg-plate pt-8 pb-4 w-full p-4">
        <GraphicSkills />
      </SectionPlate>
    </section>
    </>
  );
};

export default Skills;
