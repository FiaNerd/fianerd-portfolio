import { useEffect, useState } from "react";
import HeroSection from "../component/heroSection/HeroSection";
import Hobbies from "../component/hobbies/Hobbies";
import SectionPlate from "../component/Partial/SectionPlate";
import AboutMe from "../component/Profile/about/AboutMe";
import Education from "../component/Profile/education/Education";
import WorkExperience from "../component/Profile/experience/WorkExperience";
import Skills from "../component/Profile/skills/Skills";
import { useSmoothScroll } from "../hook/useSmoothScroll";
import Title from "../component/Partial/Title";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const {t } = useTranslation(['webSkills']);


  useEffect(() => {
    const header = document.getElementById("header");

    const handleResize = () => {
      if (header) {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height); // Update the header height state
      }
    };

    // Set the initial header height on mount
    handleResize();

    // Add resize event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this only runs on mount

  useSmoothScroll();

  return (
    <>
      {/* Apply dynamic paddingTop to the wrapper div to ensure HeroSection is below the header */}
      <div
        style={{
          paddingTop: `${headerHeight}px`, // Apply dynamic padding based on header height
          transition: "padding-top 0.3s ease", // Smooth transition for padding change
        }}
        className="bg-blend-multiply"
      >
        {/* Hero Section */}
        <SectionPlate id="home" className="relative">
          <HeroSection />
        </SectionPlate>
      </div>
        <SectionPlate id="profile">
          
          <AboutMe />
        </SectionPlate>

        <SectionPlate id="skills">
          <Skills />
        </SectionPlate>

        <SectionPlate id="work-experience">
          <WorkExperience />
        </SectionPlate>

        <SectionPlate id="education">
          <Education />
        </SectionPlate>

        <SectionPlate id="hobbies">
          <Hobbies />
        </SectionPlate>

    </>
  );
};

export default HomePage;
