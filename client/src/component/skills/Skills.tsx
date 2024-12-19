
import Section from "../Partial/Section";
import GraphicSkills from "./GraphicSkills";
import WebSkills from "./WebSkills";

const Skills = () => {

  
  return (
    <>
    <section className="mx-auto mb-8">
      <WebSkills />
      <Section className="bg-bg-plate pt-8 pb-8 w-full p-4">
        <GraphicSkills />
      </Section>
    </section>
    </>
  );
};

export default Skills;
